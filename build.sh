# Use this script to build locally and launch it at localhost:4000

node ./_scripts/create-org-files.js
node ./_scripts/create-release-defns.js
./_scripts/create-release-logs.sh
./_scripts/create-package-view.sh
node _scripts/issue-combiner.js  
node _scripts/create-latest-release-maps.js
node _scripts/process-release-logs.js
node _scripts/create-cross-domain-workitems.js
                    

bundle exec jekyll serve