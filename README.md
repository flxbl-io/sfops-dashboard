This repo is to host github pages and display various development related dashboards.

The repo is populated by the GitHub Action running in ${{ customer.project_repo }} and pushing the associated html pages daily. Other dashboards
are iframe links to Datadog

You can access the website at https://${{ customer.repo_owner }}.github.io/${{ customer.dashboard_repo }}
