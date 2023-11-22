const fs = require('fs');
const path = require('path');

const issuesDir = './_data/issueStatus';
const lockedFile = './_data/locked.json';
const outputFile = './_data/issueStatusCombined.json';

// Read the locked issue data
let lockedIssueNumber=0;
try
{
const lockedIssueData = JSON.parse(fs.readFileSync(lockedFile, 'utf8'));
const lockedIssueNumber = lockedIssueData.issue_number;
} catch(error)
{
}

// Function to update issue status based on your workflow
function updateIssueStatus(issue) {
  if (issue.issue_number === lockedIssueNumber &&  issue.status=='validation') {
    issue.status = 'locked/applying patches'; 
  } 
  return issue;
}

// Read all issue files and combine them
fs.readdir(issuesDir, (err, files) => {
  if (err) {
    console.error('Error reading the issues directory:', err);
    return;
  }

  const combinedIssues = files
    .filter(file => file.endsWith('.json') && file !== 'locked.json')
    .map(file => JSON.parse(fs.readFileSync(path.join(issuesDir, file), 'utf8')))
    .map(updateIssueStatus)
    .filter(issue => issue.status !== 'ready'); 

  // Write the combined data to the output file
  fs.writeFileSync(outputFile, JSON.stringify(combinedIssues, null, 2), 'utf8');
  console.log('Combined issue data written to', outputFile);
});

