---
layout: default
---

<head>
  <title>Environment Snapshot</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link
  rel="stylesheet"
  type="text/css"
  href="{{ '/assets/css/releasetable.css' | relative_url }}"
/>
</head>

<style>
    .container {
      max-width: 100%; /* Ensures the container takes full width if needed */
    }
  /* existing styles */
  .environment-card {
    border-color: #007bff; /* Example color */
  }

  .add-icons {
    font-size: 24px;
    color: #28a745; 
  }
  .delete-icons {
    font-size: 24px;
    color: red;
  }
</style>

<div class="container mt-4">
  <div class="row">
    {% assign environment_types = 'test,snapshot,release' | split: ',' %}
    {% for type in environment_types %}
      {% assign orgs = site.data.envInfos | where: 'type', type %}
      {% assign domains = site.data.domains %}
            <div class="col-md-4 mb-2">
              <div class="card environment-card">
                <div class="card-body">
                  <h3 class="card-title">{{ type | capitalize }}</h3>
                  <div class="d-flex justify-content-end align-items-center add-delete-icons">
                    <!-- Add Icon -->
                    <a href="{{ site.data.project.url }}/issues/new?assignees=&labels=ops%2Cops-env-request&projects=&template=request-an-env.yml&title=Ops+-+Request+a+new+environment" target="_blank" class="icon-link mr-2">
                        <i class="add-icons bi bi-plus-circle-fill"></i>
                    </a>

                    <!-- Delete Icon -->
                    <a href="{{ site.data.project.url }}/settings/environments" target="_blank" class="icon-link">
                        <i class="delete-icons bi bi-trash-fill"></i>
                    </a>
                </div>
                  {% for org in orgs %}
                    {% include environment_card.html %}
                  {% endfor %}
                </div>
              </div>
            </div>     
    {% endfor %}
  </div>
</div>

<div class="modal" tabindex="-1" role="dialog" id="releaseModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Release Details</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="releaseModalBody">
        <!-- Dynamic content will be inserted here -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://kit.fontawesome.com/ccae0cc9ba.js" crossorigin="anonymous"></script>
<script>

   let releaseDataMap = {};

    {% assign releaseOrgs = site.data.envInfos | where: 'type', 'release' %}
    {% for org in releaseOrgs %}
      {% for domain in domains %} 
        {% assign orgReleaseData = site.data.releaselogs[org.name][domain].orgs | where: 'name', org.name %}
        {% if orgReleaseData.size > 0 %}
          {% assign releaseData = site.data.releaselogs[org.name][domain].releases | where: 'names', orgReleaseData[0].latestRelease.names[0] %}
          {% if releaseData.size > 0 %}
            releaseDataMap["{{ org.name }}"] = releaseDataMap["{{ org.name }}"] || {};
            releaseDataMap["{{ org.name }}"]["{{ domain }}"] = releaseDataMap["{{ org.name }}"]["{{ domain }}"] || {};
            releaseDataMap["{{ org.name }}"]["{{ domain }}"]["{{ orgReleaseData[0].latestRelease.names[0] }}"] = {{ releaseData[0] | jsonify }};
          {% endif %}
        {% endif %}
      {% endfor %}
    {% endfor %}




   function generateUrl(action, name, domain) {
       const repoData = {{ site.data.project | jsonify}}
       const repoUrl = repoData.url;
       let issueTemplate;
       let labels;
       let tittle;
       let additionalParams;
       switch (action) {
         case 'rollback':
            issueTemplate = 'request-a-release-branch.yml';
            labels="dev%2Cdev-release-branch-request"
            title=`Dev+-+Request+a+release+branch+from+a+release definition+${domain}+${name}`
            additionalParams = `domain=${domain}&releasedefn=${name}`
           break;
        }
       return `${repoUrl}/issues/new?labels=${labels}&template=${issueTemplate}&title=${title}&${additionalParams}`;
   }

   function handleReleaseClick(domain, org, releaseName) {
      populateModal(domain, org, releaseName);
      $('#releaseModal').modal('show');
   }

   function populateModal(domain, org, releaseName) {
    
     const repoData = {{ site.data.project | jsonify}}
     const release = releaseDataMap[org][domain][releaseName];

     let htmlContent = `<strong>Name:</strong> ${release.names[0]}  <button class="copy-button" onclick="copyToClipboard(event, '${release.names[0]}')">
       <i class="fas fa-copy"></i>
       </button><br>   `;
     htmlContent += `<strong>Date:</strong> ${release.date}<br>`;
     htmlContent += `<strong>Work Items:</strong><ul>`;

     for (const workItem in release.workItems) {
       htmlContent+=`<li><a href="${repoData.workItemUrl}/${workItem}" target="_blank">${workItem}</a></li>`
     }

     htmlContent += `</ul>`;
     htmlContent += `<strong>Artifacts with workitems:</strong>`;

     release.artifacts.forEach(artifact => {
       if (artifact.commits.length > 0) {
         htmlContent += `<div>
           <button class="collapsible-content" onclick="toggleCollapsible(event)">
             <span class="plus">+</span> ${artifact.name} (Version: ${artifact.version})
           </button>
           <div class="content-detail">
             <table class="commitTable">
                <thead>
                    <tr>
                      <th style="text-align: center;">Commit Id</th>
                      <th style="text-align: center;">Date</th>
                      <th style="text-align: center;">Author</th>
                      <th style="text-align: center;">Message</th>
                    </tr>
                </thead>
               <tbody>
                 ${artifact.commits.map(commit => `
                   <tr>
                     <td><a href="${repoData.url}/commit/${commit.commitId}" target="_blank">${commit.commitId}</a></td>
                     <td>${commit.date}</td>
                     <td>${commit.author}</td>
                     <td>${commit.message}</td>
                   </tr>
                 `).join('')}
               </tbody>
             </table>
           </div>
         </div>`;
       }
     });

     $('#releaseModalBody').html(htmlContent);
   }

   // Function to toggle collapsible content
   function toggleCollapsible(event) {
     const content = event.target.nextElementSibling;
     if (content.style.maxHeight) {
       content.style.maxHeight = null;
     } else {
       content.style.maxHeight = content.scrollHeight + "px";
     }
   }

  async function copyToClipboard(event,text) {
   event.stopPropagation()
     try {
         await navigator.clipboard.writeText(text);
         alert('Copied to clipboard: ' + text);
     } catch (err) {
         console.error('Failed to copy text: ', err);
     }
   }
</script>
