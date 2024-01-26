const fs = require('fs');
const path = require('path');

// Setup paths to the data directory and JSON files
const dataDir = path.join(process.cwd(), '_data');
const processedDir = path.join(process.cwd(),'_data', 'processedChangelog');
const branchesFile = path.join(dataDir, 'branches.json');
const domainsFile = path.join(dataDir, 'domains.json');
const latestReleaseFile = path.join(dataDir, 'latestReleaseMap.json'); // This may not exist


const releaseOrgsFile = path.join(dataDir, 'releaseOrgs.json'); 
const releaselogsDir = path.join(dataDir, 'releaselogs');

const releaseEnvs = JSON.parse(fs.readFileSync(releaseOrgsFile, 'utf8'));
// Read the branches and domains from the JSON files
const branches = JSON.parse(fs.readFileSync(branchesFile, 'utf8'));
const domains = JSON.parse(fs.readFileSync(domainsFile, 'utf8'));

//Read all the releases from all the envs
let allEnvReleaseMap = {};
for (const releaseEnv of releaseEnvs) {
    const orgDir = path.join(releaselogsDir, releaseEnv); 
    getAllReleaseMap(allEnvReleaseMap,releaseEnv,orgDir);
}


// Ensure the processedChangelog directory exists
if (!fs.existsSync(processedDir)) {
    fs.mkdirSync(processedDir, { recursive: true });
}


let latestReleaseMap = {};

try {
    latestReleaseMap = JSON.parse(fs.readFileSync(latestReleaseFile, 'utf8'));
} catch (error) {
    console.warn(`Warning: ${latestReleaseFile} not found. Will start from the first release for each domain.`);
}


// Main execution loop for processing each domain within each branch
branches.forEach(branch => {
    domains.forEach(domain => {
        const latestRelease = latestReleaseMap['prod'] && latestReleaseMap['prod'][domain] || null; // Use null if latest release is not specified
        try {
            updateChangelogForDomain(branch, domain, latestRelease);
            console.log(`Updated changelog for ${domain} in branch ${branch}`);
        } catch (error) {
            console.error(`Error updating changelog for ${domain} in branch ${branch}: ${error.message}`);
        }
    });
});

console.log('Changelogs updated and saved in processedChangelog directory.');




// Function to truncate the changelog at a specified release and add cumulative work items
function truncateAndAddCumulativeData(domain,changelog, releaseName) {
    let releaseIndex = releaseName ? changelog.releases.findIndex(release => release.names.includes(releaseName)) : 0;
    if (releaseIndex === -1 || releaseIndex == 0) {
        releaseIndex = 0;
    }
    else if(releaseIndex == changelog.releases.length-1)
    {
        return { releases: [] };
    }
    else if ( releaseIndex <= changelog.releases.length-1 )
   {
        releaseIndex = releaseIndex + 1;
   } 

   
   

    // Truncate the changelog to start from the specified release or the first release if not found
    let truncatedReleases = changelog.releases.slice(releaseIndex);
    let cumulativeWorkItems = {};

    truncatedReleases.forEach(release => {

        release.deployedTo = [];
        // Navigate through releaseMap and figure whether release is deployed to that env
        for( const env of Object.keys(allEnvReleaseMap))
        {
            if(allEnvReleaseMap[env][domain]?.includes(release.names[0]))
            {
                    console.log(`Found in ${env}  ${release.names[0]}`)
                    release.deployedTo.push(env)
            }
        }
        Object.entries(release.workItems || {}).forEach(([workItemKey, commitIds]) => {
            if (!cumulativeWorkItems[workItemKey]) {
                cumulativeWorkItems[workItemKey] = [];
            }
            let uniqueCommitIds = new Set([...cumulativeWorkItems[workItemKey], ...commitIds]);
            cumulativeWorkItems[workItemKey] = Array.from(uniqueCommitIds);
        });
        release.cumulativeWorkItems = { ...cumulativeWorkItems };
    });

    return { releases: truncatedReleases };
}

//Get all releease of an env
function getAllReleases(env,orgFilePath) {
    const data = JSON.parse(fs.readFileSync(orgFilePath, 'utf8'));
    return data.orgs.find(org => org.name === env)?.releases.map(release => release.names[0])
}

function getAllReleaseMap(allEnvReleaseMap,env,orgDir) {
    // Check if the releaselogs/prod directory exists
    if (!fs.existsSync(orgDir)) {
        console.error(`The directory ${orgDir} does not exist.`);
        return;
    }

    const domainFiles = fs.readdirSync(orgDir);
    const envReleaseMap = {};
    envReleaseMap[env] = {};

    

    // Read the  release from each domain file
    domainFiles.forEach(file => {
        const filePath = path.join(orgDir, file);
        const allReleases = getAllReleases(env, filePath);
        if (allReleases) {
            const domainName = path.basename(file, '.json');
            envReleaseMap[env][domainName] = allReleases;
        }
    });
   
    allEnvReleaseMap[env]=envReleaseMap[env];
}

// Function to process and update changelog files for a given domain and branch
function updateChangelogForDomain(branch, domain, latestRelease) {
    const changelogPath = path.join(dataDir,'releasechangelog', branch, `${domain}.json`);
    const changelogData = JSON.parse(fs.readFileSync(changelogPath, 'utf8'));
    const updatedChangelog = truncateAndAddCumulativeData(domain,changelogData, latestRelease);

    // Create subdirectory for the branch if it doesn't exist
    const branchDir = path.join(processedDir, branch);

    if (!fs.existsSync(branchDir)) {
        fs.mkdirSync(branchDir, { recursive: true });
    }

    // Write the updated changelog to the new directory
    fs.writeFileSync(path.join(branchDir, `${domain}.json`), JSON.stringify(updatedChangelog, null, 2), 'utf8');
}
