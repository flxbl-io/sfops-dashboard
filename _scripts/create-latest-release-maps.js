const fs = require('fs');
const path = require('path');

// Directories
const releaselogsDir = path.join(process.cwd(),'_data', 'releaselogs');
const releaseEnvPath = path.join(process.cwd(),'_data', 'releaseOrgs.json'); 

// Read the release-orgs.json file
const releaseEnvs = JSON.parse(fs.readFileSync(releaseEnvPath, 'utf8'));

// This function reads the latest release name from the org's JSON file
function readLatestRelease(env,orgFilePath) {
    const data = JSON.parse(fs.readFileSync(orgFilePath, 'utf8'));
    return data.orgs.find(org => org.name === env)?.latestRelease.names[0];
}

// Main script execution
function generateLatestReleaseMap(latestReleaseMap,env,orgDir) {
    // Check if the releaselogs/prod directory exists
    if (!fs.existsSync(orgDir)) {
        console.error(`The directory ${orgDir} does not exist.`);
        return;
    }

    // Get all domain files from the prod directory
    const domainFiles = fs.readdirSync(orgDir);
    const latestEnvReleaseMap = {};
    latestEnvReleaseMap[env] = {};

    

    // Read the latest release from each domain file
    domainFiles.forEach(file => {
        const filePath = path.join(orgDir, file);
        const latestRelease = readLatestRelease(env, filePath);
        if (latestRelease) {
            const domainName = path.basename(file, '.json');
            latestEnvReleaseMap[env][domainName] = latestRelease;
        }
    });

  latestReleaseMap[env] = latestEnvReleaseMap[env];
}

let latestReleaseMap = {};
for (const releaseEnv of releaseEnvs) {
    const orgDir = path.join(releaselogsDir, releaseEnv); 
    generateLatestReleaseMap(latestReleaseMap,releaseEnv,orgDir);
      // Write the latestReleaseMap to a JSON file
}

const outputFilePath = path.join(process.cwd(),'_data', 'latestReleaseMap.json');
fs.writeFileSync(outputFilePath, JSON.stringify(latestReleaseMap, null, 2), 'utf8');
console.log(`latestReleaseMap.json has been created at ${outputFilePath}`);

