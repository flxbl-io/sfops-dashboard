#!/bin/bash

# Find all .yml files under the "_data" directory and its subdirectories
find _data/releasedefns -type f -name "*.yml" | while read -r file; do
  # Extract the directory, filename, and extension
  dir=$(dirname "$file")
  filename=$(basename "$file" .yml)
  
  # Extract the prefix and the rest of the filename
  prefix=$(echo $filename | cut -d'.' -f1)
  rest=$(echo $filename | cut -d'.' -f2-)
  
  # Concatenate the prefix and rest, removing the first period
  new_filename="${prefix}$(echo $rest | sed 's/\\.//')"
  
  # Construct the new file path
  new_file="${dir}/${new_filename}.yml"
  
  # Rename the file
  mv "$file" "$new_file"
done
