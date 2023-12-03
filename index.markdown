---
layout: default
---

<head>
    <meta charset="UTF-8">
    <title>sfops dev centre</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        body {
            display: flex;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            overflow: hidden; /* Prevents scrolling */
        }

        .vertical-nav {
            width: 250px;
            height: 100vh; /* Full height */
            position: fixed; /* Fixed Sidebar (stay in place on scroll) */
            z-index: 1; /* Stay on top */
            top: 0; /* Stay at the top */
            left: 0;
            background-color: #007bff;
            overflow-x: hidden; /* Disable horizontal scroll */
            padding-top: 20px;
        }

        .vertical-nav .logo-image {
            display: block;
            max-width: 20%; /* Adjust as needed */
            height: auto;
            margin: 5px auto; /* Center the image */
        }
        
        .vertical-nav header, .vertical-nav .header2 {
            font-weight:bold;
            text-align:center;
            font-size: 20px;
        }

        .vertical-nav ul {
            list-style-type: none;
            padding: 0;
        }

        .vertical-nav ul li {
            padding: 10px 20px;
        }

        .vertical-nav ul li a {
            color: #fff;
            text-decoration: none;
            display: block;
            transition: background-color 0.3s;
        }

        .vertical-nav ul li a.selected,
        .vertical-nav ul li a:hover {
            background-color: #0056b3;
            border-radius: 5px;
        }

        .vertical-nav ul li i {
            margin-right: 10px;
        }

        .vertical-nav .submenu {
            display: block;
            padding-left: 20px; /* Indent submenus */
        }
        .content-area {
            margin-left: 250px; /* Same as the width of the sidebar */
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }

        iframe {
            width: 100%;
            height: calc(100vh - 100px);
            border: none;
        }
        .selectors-container {
            display: flex;
            justify-content: flex-end; /* Align selectors to the right */
            flex-wrap: wrap; /* Allow wrapping on smaller screens */
            padding: 10px 15px;
            background-color: #ffffff;
        }

        .selector-container {
            display: inline-flex;
            align-items: center;
            margin-left: 10px; /* Space between selectors */
            padding: 5px 10px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
     

        .selector-container span {
            margin-right: 10px;
            font-weight: bold;
            color: #333; /* Darker text for better readability */
        }

        .selector-container select {
            border: 1px solid #ddd; /* Subtle border */
            background: white;
            color: #333;
            padding: 8px 12px;
            margin-left: 5px;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
            transition: all 0.3s ease;
        }

        .selector-container select:hover,
        .selector-container select:focus {
            border-color: #0056b3; /* Blue border on hover/focus */
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
        }

        #orgSelector, #testOrgSelector, #domainSelector, #branchSelector {
            text-align: right;
            display: none;
            color: #34bdeb;
            padding: 10px;
            border-radius: 5px;
        }

        #orgSelector span, #testOrgSelector span, #domainSelector span, #branchSelector span{
            margin-right: 10px;
            font-weight: bold;
        }

        #orgSelector select,#testOrgSelector select, #domainSelector select, #branchSelector select {
            border: none;
            background: #0056b3;
            color: #fff;
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="vertical-nav">
         <img src="assets/logo.png" alt="Logo" class="logo-image">
        <header>sfops</header>
        <div class="header2">Dev Central</div>
        <ul>
            <li><span><i class="fas fa-laptop-code"></i> Development</span>
                <ul class='submenu'>
                    <li><a href="#workItems">Work Items</a></li>
                    <li><a href="#packages">Packages</a></li>
                </ul>
            </li>
            <li><span><i class="fas fa-network-wired"></i> Environments</span>
                 <ul class='submenu'>
                    <li><a href="#devSandboxes">Dev Sandboxes</a></li>
                    <li><a href="#reviewSandboxes">Review Sandboxes</a></li>
                    <li><a href="#scratchOrgPools">Scratch Org Pools</a></li>
                    <li><a href="#orgComparison">Org Comparison</a></li>
                </ul>
            </li>
            <li><span><i class="fas fa-chart-bar"></i> Quality Reports</span>
                 <ul class='submenu'>
                    <li><a href="#apexTests">Test Reports</a></li>
                    <li><a href="#pmdReport">PMD Reports</a></li>
                </ul>
            </li>
            <li><span><i class="fas fa-tasks"></i> Release Management</span>
                <ul class='submenu'>
                    <li><a href="#releasedefns">Release Candidates</a></li>
                    <li><a href="#releases">Releases</a></li>
                </ul>
            </li>
            <li><span><i class="fas fa-chart-line"></i> Dashboards</span>
                 <ul class='submenu'>
                    <li><a href="#evolution">Package Evolution</a></li>
                    <li><a href="#cicd">CI/CD Performance</a></li>
                    <li><a href="#platformOverview">Platform Overview</a></li>
                    <li><a href="#packageSummary">Package Metrics</a></li>
                </ul>
            </li>
             <li><span><i class="fas fa-circle-info"></i> Support</span>
                 <ul class='submenu'>
                    <li><a href="#flxblKnowledge">Reference Guide</a></li>
                    <li><a href="#flxblSupport">Chat with us</a></li>
                    <li><a href="#flxblIssue">Log an issue</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="content-area">
    <div class="selectors-container">
        <div class="selector-container" id="orgSelector" style="text-align: right; display: none;">
            <span>Select an Org:</span>
            <select id="orgSelect">
                {% for org in site.data.orgs %}
                <option value="{{ org }}">{{ org }}</option>
                {% endfor %}
            </select>
        </div>

        <div class="selector-container" id="testOrgSelector" style="text-align: right; display: none;">
            <span>Select an Org:</span>
            <select id="testOrgSelect">
                {% for org in site.data.testorgs %}
                <option value="{{ org }}">{{ org }}</option>
                {% endfor %}
            </select>
        </div>

        <div class="selector-container" id="branchSelector" style="text-align: right; display: none;">
            <span>Select a Branch:</span>
            <select id="branchSelect">
                {% for branch in site.data.branches %}
                <option value="{{ branch }}">{{ branch }}</option>
                {% endfor %}
            </select>
        </div>

        <div class="selector-container" id="domainSelector" style="text-align: right; display: none;">
            <span>Select a Domain/Release config:</span>
            <select id="domainSelect">
                {% for domain in site.data.domains %}
                <option value="{{ domain }}">{{ domain }}</option>
                {% endfor %}
            </select>
        </div>
      </div>

        <!-- Iframes and other elements here -->
        <iframe id="iframe"></iframe>
         <!-- Iframes and other elements here -->
        <iframe id="iframePMD"></iframe>
    </div>
<body>
<script>
       
       {% assign dashboard = site.data.dashboard %}

        var baseUrl = window.location.origin;
        var pathArray = window.location.pathname.split('/');
        let siteSuffix=`/${pathArray[1]}/`
        if(siteSuffix=='//')
        siteSuffix='';
        var tabs = {
            'cicd': {
                url: '{{ dashboard.cicd_performance_dashboard_url }}'
            },
            'devSandboxes': {
                url: `${siteSuffix}/sandboxes/devSandboxes.html`
            },
            'reviewSandboxes': {
                url: `${siteSuffix}/sandboxes/reviewSandboxes.html`
            },
            'evolution': {
                url: `${siteSuffix}/packageVisualisation/index.html`
            },
            'workItems': {
                url: `${siteSuffix}/workitems/workitems.html`
            },
             'packages': {
                urlTemplate: `${siteSuffix}/packageviewer/{branch}.html`,
            },
            'orgComparison': {
                url: `${siteSuffix}/packageVersionReports/packageVersionReport.html`
            },
              'releasedefns': {
                urlTemplate: `${siteSuffix}/releasedefns/{branch}/{domain}.html`,
                showBranchSelector: true,
                showDomainSelector: true,
                showOrgSelector: false,
                showTestOrgSelector: false
            },
            'releases': {
                urlTemplate: `${siteSuffix}/releaselogs/{domain}.html`,
                showBranchSelector: false,
                showDomainSelector: true,
                showOrgSelector: false,
                showTestOrgSelector: false
            },
            'apexTests': {
                urlTemplate: `${siteSuffix}/apextestResults/{testOrg}.html`,
                showTestOrgSelector: true
     
            },
            'pmdReport': {
                iframeId: 'iframePMD',
                url: `${siteSuffix}/pmd/pmdReport.html`
            },
            'packageSummary': {
                url: '{{ dashboard.package_summary_dasbhoard_url }}'
            },
            'platformOverview': {
                url: '{{ dashboard.platform_overview_dashboard_url }}'
            },
            'flxblKnowledge': {
                url: 'https://docs.dxatscale.io/sfops/overview',
                openInNewWindow:true
            },
            'flxblIssue': {
                url: 'https://github.com/flxbl-io/sfops-issues',
                openInNewWindow:true
            },
            'flxblSupport': {
                url: 'https://flxbl-io.slack.com',
                openInNewWindow:true
            }
          
        };

       

        function showTab(hash) {
              if (!hash || hash=='default') {
                // Default page to show when no hash is present
                hash=`workItems`;
            }

            window.location.hash = hash;
            var tab = tabs[hash];
            if (!tab) {
                console.error('Invalid hash: ' + hash);
                return;
            }

            var iframes = document.getElementsByTagName('iframe');
            for (var i = 0; i < iframes.length; i++) {
                iframes[i].style.display = 'none';
            }

            document.getElementById('branchSelector').style.display = tab.showBranchSelector ? 'block' : 'none';
            document.getElementById('domainSelector').style.display = tab.showDomainSelector ? 'block' : 'none';
            document.getElementById('orgSelector').style.display = tab.showOrgSelector ? 'block' : 'none';
            document.getElementById('testOrgSelector').style.display = tab.showTestOrgSelector ? 'block' : 'none';


           if(tab.iframeId)
           {
            var iframe = document.getElementById(tab.iframeId);
            iframe.style.display = 'block';
           }
           else
           {
            var iframe = document.getElementById('iframe');
            iframe.style.display = 'block';
           }

            if(tab.openInNewWindow)
            {
                window.open(tab.url, '_blank');
                iframe.style.display = 'block';
                iframe.srcdoc = createPlaceholderMessage("This content has been opened in a new window.");

            }
            else if (!tab.urlTemplate) {
                iframe.src = tab.url;
            }
            else
            {
                console.log(`urlTemplate: ${tab.urlTemplate}`);
              
                let url = tab.urlTemplate;
                if (url.includes('{branch}')) {
                    let selectedBranch = document.getElementById('branchSelect').value;
                    url = url.replace('{branch}', selectedBranch);
                    console.log(`selectedBranch`, selectedBranch);
                    console.log(`url`, url);
                }
                if (url.includes('{domain}')) {
                    let selectedDomain = document.getElementById('domainSelect').value;
                    url = url.replace('{domain}', selectedDomain);
                } 
                if (url.includes('{org}')) {
                    let selectedOrg = document.getElementById('orgSelect').value;
                    url = url.replace('{org}', selectedOrg);
                } 
                if (url.includes('{testOrg}')) {
                    let selectedOrg = document.getElementById('testOrgSelect').value;
                    url = url.replace('{testOrg}', selectedOrg);
                } 

                iframe.src = url;    
            }
        
            
        }

        window.onload = function() {    

            var links = document.querySelectorAll('.vertical-nav ul li ul li a');
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function(event) {
                    var hash = this.getAttribute('href').substring(1);
                    showTab(hash);

                    var selectedLinks = document.querySelectorAll('.vertical-nav ul li ul li a.selected');
                    for (var j = 0; j < selectedLinks.length; j++) {
                        selectedLinks[j].classList.remove('selected');
                    }
                    this.classList.add('selected');

                    event.preventDefault();
                });
            }
            var currentHash = window.location.hash.substring(1) || 'default'; // default page when no hash
            showTab(currentHash);
        };

        window.onhashchange = function() {
            var hash = window.location.hash.substring(1) || 'default'; // default page when no hash changes
            showTab(hash);
        };

        document.getElementById('testOrgSelect')?.addEventListener('change', function() {
            var currentHash = window.location.hash.substring(1);
            showTab(currentHash);
           
            if (tabs[currentHash] && tabs[currentHash].showTestOrgSelector) {
                
            }
        });

        document.getElementById('branchSelect')?.addEventListener('change', function() {
            var currentHash = window.location.hash.substring(1);
             showTab(currentHash);
        });

        document.getElementById('domainSelect')?.addEventListener('change', function() {
            var currentHash = window.location.hash.substring(1);
             showTab(currentHash);
            if (tabs[currentHash] && tabs[currentHash].showDomainSelector) {
               
            }
        });
         function createPlaceholderMessage(message) {
                 return `<div style="text-align: center; padding: 20px;"><p>${message}</p></div>`;
        }
</script>
