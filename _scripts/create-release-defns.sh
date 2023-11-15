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
