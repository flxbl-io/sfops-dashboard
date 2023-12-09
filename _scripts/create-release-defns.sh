#!/bin/bash

# Ensure the script stops on first error
set -e

# Create the releasedefns directory if it doesn't exist
mkdir -p releasedefns

# Read the domains from domains.json in the _data folder
domains=$(jq -r '.[]' _data/domains.json)

# Read the branches from branches.json in the _data folder
branches=$(jq -r '.[]' _data/branches.json)


# Loop through each domain and create the corresponding .md file
for branch in $branches; do
 mkdir -p releasedefns/${branch}
 for domain in $domains; do
  echo "---" > "releasedefns/${branch}/${domain}.md"
  echo "layout: changelog" >> "releasedefns/${branch}/${domain}.md"
  echo "domain: ${domain}" >> "releasedefns/${branch}/${domain}.md"
  echo "branch: ${branch}" >> "releasedefns/${branch}/${domain}.md"
  echo "---" >> "releasedefns/${branch}/${domain}.md"
 done
done

#process hotfixes
for json_file in _data/hotfixes/*.json; do
    branch=$(jq -r '.branch' "$json_file")
    domain=$(jq -r '.domain' "$json_file")

    # Create directory for branch if it doesn't exist
    mkdir -p "releasedefns/${branch}"

    # Create the markdown file with the hotfix information
    echo "---" > "releasedefns/${branch}/${domain}.md"
    echo "layout: changelog" >> "releasedefns/${branch}/${domain}.md"
    echo "domain: ${domain}" >> "releasedefns/${branch}/${domain}.md"
    echo "branch: ${branch}" >> "releasedefns/${branch}/${domain}.md"
    echo "---" >> "releasedefns/${branch}/${domain}.md"
done
