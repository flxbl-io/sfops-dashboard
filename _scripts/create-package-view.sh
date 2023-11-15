#!/bin/bash

# Ensure the script stops on first error
set -e

# Create the releasedefns directory if it doesn't exist
mkdir -p releasedefns

# Read the domains from domains.json in the _data folder
domains=$(jq -r '.[]' _data/domains.json)

# Read the branches from branches.json in the _data folder
branches=$(jq -r '.[]' _data/branches.json)

mkdir -p packageviewer

# Loop through each domain and create the corresponding .md file
for branch in $branches; do
 for domain in $domains; do
  echo "---" > "packageviewer/${branch}.md"
  echo "layout: packageviewer" >> "packageviewer/${branch}.md"
  echo "branch: ${branch}" >> "packageviewer/${branch}.md"
  echo "---" >> "packageviewer/${branch}.md"
 done
done
