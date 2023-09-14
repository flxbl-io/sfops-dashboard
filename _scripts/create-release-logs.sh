#!/bin/bash

# Ensure the script stops on first error
set -e

# Create the releaselogs directory if it doesn't exist
mkdir -p releaselogs

# Read the domains from domains.json in the _data folder
domains=$(jq -r '.[]' _data/domains.json)

# Loop through each domain and create the corresponding .md file
for domain in $domains; do
  echo "---" > "releaselogs/${domain}.md"
  echo "layout: releaselogs" >> "releaselogs/${domain}.md"
  echo "domain: ${domain}" >> "releaselogs/${domain}.md"
  echo "---" >> "releaselogs/${domain}.md"
done
