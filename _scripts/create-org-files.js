const fs = require('fs');
const path = require('path');

// Define paths
const inputFilePath = path.join(process.cwd(), '_data', 'envInfos.json');
const outputDir = path.join(process.cwd(), '_data');

// Read JSON data from file
const rawdata = fs.readFileSync(inputFilePath, 'utf8');
const environments = JSON.parse(rawdata);

// Helper function to write JSON to a file in the _data directory
function writeJSONToFile(fileName, data) {
    const outputPath = path.join(outputDir, fileName);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
}

// Processing the data
const testRunOrgs = environments.filter(env => env.testrun === 'true').map(env => env.name);
const releaseOrgs = environments.filter(env => env.type === 'release').map(env => env.name);
const devOrgs = environments.filter(env => env.type === 'dev').map(env => env.name);
const testOrgs = environments.filter(env => env.type === 'test').map(env => env.name);
const orgs = environments.map(env => env.name);

// Writing to files
writeJSONToFile('testRunOrgs.json', testRunOrgs);
writeJSONToFile('releaseOrgs.json', releaseOrgs);
writeJSONToFile('devOrgs.json', devOrgs);
writeJSONToFile('testOrgs.json', testOrgs);
writeJSONToFile('orgs.json', orgs);
