const fs = require('fs');
const path = require('path');

// Directories
const branchesPath = path.join(process.cwd(), '_data', 'branches.json');
const domainsPath = path.join(process.cwd(), '_data', 'domains.json'); 
const prodReleaseChangelogPath = path.join(process.cwd(), '_data', 'releaselogs','prod'); 

// Read the branches and domains from the JSON files
const branches = JSON.parse(fs.readFileSync(branchesPath, 'utf8'));
const domains = JSON.parse(fs.readFileSync(domainsPath, 'utf8'));

let branchWorkitemMap = {};

for (const branch of branches) {
    const branchDir = path.join(process.cwd(), '_data', 'processedChangelog', branch);
    let workitemMap = {};
    const workItemsEverReleased={}
    for(const domain of domains)
    {
        if(fs.existsSync(path.join (prodReleaseChangelogPath,`${domain}.json`)))
        {
            const prodReleaseChangelog = JSON.parse(fs.readFileSync(path.join (prodReleaseChangelogPath,`${domain}.json`)));
            workItemsEverReleased[domain]=[];
            //Read all the workitems in prodReleaseChangelog into an array
            for(const release of prodReleaseChangelog.releases)
            {
                for(const workItemKey in release.workItems)
                {
                    workItemsEverReleased[domain].push(workItemKey);
                }
            }
        }
    }

    for (const domain of domains) {
        const filePath = path.join(branchDir, `${domain}.json`);
        if (fs.existsSync(filePath)) {
            const domainReleaseChangelog = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            for (const release of domainReleaseChangelog.releases) {
                for (const workItemKey in release.workItems) {
                    const workItemDetail = {
                        domain: domain,
                        releaseName: release.names[0] // Assuming first name in the names array is the primary name
                    };

                    if(workItemsEverReleased[domain]?.includes(workItemKey))
                    {
                     workItemDetail['released']=true;
                    }
                    if (workitemMap.hasOwnProperty(workItemKey)) {
                        // If already present in this branch, add the new detail to the existing array
                        workitemMap[workItemKey].push(workItemDetail);
                    } else {
                        // If not present in this branch, create a new array with the detail
                        workitemMap[workItemKey] = [workItemDetail];
                    }
                }
            }
        }
    }

    branchWorkitemMap[branch] = workitemMap;
}

// To see the branchWorkitemMap result
console.log(JSON.stringify(branchWorkitemMap, null, 2));

fs.writeFileSync(path.join(process.cwd(), '_data', 'crossDomainWorkItems.json'), JSON.stringify(branchWorkitemMap, null, 2));