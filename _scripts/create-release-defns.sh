#!/bin/bash

# Ensure the script stops on first error
set -e

# Create the releasedefns directory if it doesn't exist
mkdir -p releasedefns

# Read the domains from domains.json in the _data folder
domains=$(jq -r '.[]' _data/domains.json)

# Loop through each domain and create the corresponding .md file
for domain in $domains; do
  echo "---" > "releasedefns/${domain}.md"
  echo "layout: changelog" >> "releasedefns/${domain}.md"
  echo "domain: ${domain}" >> "releasedefns/${domain}.md"
  echo "---" >> "releasedefns/${domain}.md"
done
