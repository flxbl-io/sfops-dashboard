const fs = require("fs");
const path = require("path");

function main() {
  try {
    // Create the releasedefns directory if it doesn't exist
    const releaseDefnsDir = path.join( "releasedefns");
    if (!fs.existsSync(releaseDefnsDir)) {
      fs.mkdirSync(releaseDefnsDir, { recursive: true });
    }

    // Read the domains from domains.json in the _data folder
    const domains = JSON.parse(
      fs.readFileSync(path.join("_data", "domains.json"), "utf8")
    );

    // Read the branches from branches.json in the _data folder
    const branches = JSON.parse(
      fs.readFileSync(path.join("_data", "branches.json"), "utf8")
    );

    // Loop through each domain and create the corresponding .md file
    for (const branch of branches) {
      const branchDir = path.join(releaseDefnsDir, branch);
      if (!fs.existsSync(branchDir)) {
        fs.mkdirSync(branchDir, { recursive: true });
      }

      for (const domain of domains) {
        const filePath = path.join(branchDir, `${domain}.md`);
        const content = `---
layout: changelog
domain: ${domain}
branch: ${branch}
---`;
        fs.writeFileSync(filePath, content, "utf8");
      }
    }

    // Process hotfixes
    const hotfixDir = path.join("_data", "hotfixes");
    if (fs.existsSync(hotfixDir) && fs.readdirSync(hotfixDir).length) {
      let existingBranches = branches.slice();

      for (const file of fs.readdirSync(hotfixDir)) {
        if (path.extname(file) === ".json") {
          const hotfixData = JSON.parse(
            fs.readFileSync(path.join(hotfixDir, file), "utf8")
          );
          const { branch, domain } = hotfixData;

          const branchDir = path.join(releaseDefnsDir, branch);
          if (!fs.existsSync(branchDir)) {
            fs.mkdirSync(branchDir, { recursive: true });
          }

          const filePath = path.join(branchDir, `${domain}.md`);
          const content = `---
layout: changelog
domain: ${domain}
branch: ${branch}
---`;
          fs.writeFileSync(filePath, content, "utf8");

          if (!existingBranches.includes(branch)) {
            existingBranches.push(branch);
          }
        }
      }

      // Write the updated branches back to branches.json
      fs.writeFileSync(
        path.join( "_data", "branches.json"),
        JSON.stringify(existingBranches, null, 2),
        "utf8"
      );
    } else {
      console.log(`No hotfix JSON files found in ${hotfixDir}.`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
