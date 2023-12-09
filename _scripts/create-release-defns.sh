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
hotfix_dir="_data/hotfixes"

# Check if the hotfixes directory exists and has json files
if [ -d "$hotfix_dir" ] && [ "$(ls -A $hotfix_dir/*.json 2> /dev/null)" ]; then
    # Read the current branches into an array
    existing_branches=($(jq -r '.[]' _data/branches.json))

    for json_file in "$hotfix_dir"/*.json; do
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

        # Add branch to the existing_branches array if it's not already present
        if [[ ! " ${existing_branches[@]} " =~ " ${branch} " ]]; then
            existing_branches+=("$branch")
        fi
    done

    # Write the updated branches back to branches.json
    jq -n --argjson branches "$(printf '%s\n' "${existing_branches[@]}" | jq -sR 'split("\n") | map(select(length > 0))')" > _data/branches.json
else
    echo "No hotfix JSON files found in $hotfix_dir."
fi