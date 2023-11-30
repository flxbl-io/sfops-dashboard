---
layout: homepage
---

<style>
ul {
    list-style-type: none;
    padding: 20px 0;
    background: #007bff;
    text-align: center;
    margin-bottom: 20px;
}
ul li {
    display: inline-block;
    margin: 0 10px;
}
ul li a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
}
ul li a.selected {
    background-color: #0056b3;
    padding: 5px 10px;
    border-radius: 5px;
}
iframe {
    width: 100%;
    height: calc(100vh - 5vh - 60px);
    border: none;
    display: none;
}
#fullscreenIcon, #rotateIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #007bff;
    font-size: 24px;
}
#rotateIcon {
    right: 50px;
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

<ul id="navBar">
    <li><a href="#cicd">CI CD Performance</a></li>
    <li><a href="#workItems">WorkItems</a></li>
    <li><a href="#packages">Packages</a></li>
    <li><a href="#orgComparison">Org Comparison</a></li>
    <li><a href="#releasedefns">Release Candidates</a></li>
    <li><a href="#releases">Releases</a></li>
    <li><a href="#apexTests">Test Reports</a></li>
    <li><a href="#pmdReport">PMD Reports</a></li>
    <li><a href="#packageSummary">Package Metrics</a></li>
    <li><a href="#platformOverview">Platform Overview</a></li>
</ul>

<div id="orgSelector" style="text-align: right; display: none;">
    <span>Select an Org:</span>
    <select id="orgSelect">
        {% for org in site.data.orgs %}
        <option value="{{ org }}">{{ org }}</option>
        {% endfor %}
    </select>
</div>

<div id="testOrgSelector" style="text-align: right; display: none;">
    <span>Select an Org:</span>
    <select id="testOrgSelect">
        {% for org in site.data.testorgs %}
        <option value="{{ org }}">{{ org }}</option>
        {% endfor %}
    </select>
</div>

<div id="branchSelector" style="text-align: right; display: none;">
    <span>Select a Branch:</span>
      <select id="branchSelect">
        {% for branch in site.data.branches %}
        <option value="{{ branch }}">{{ branch }}</option>
        {% endfor %}
    </select>
</div>

<div id="domainSelector" style="text-align: right; display: none;">
    <span>Select a Domain/Release config:</span>
      <select id="domainSelect">
        {% for domain in site.data.domains %}
        <option value="{{ domain }}">{{ domain }}</option>
        {% endfor %}
    </select>
</div>



<!-- Icons -->
<i id="fullscreenIcon" class="fas fa-expand-arrows-alt" onclick="toggleFullscreen()"></i>
<i id="rotateIcon" class="fas fa-sync-alt" onclick="toggleRotation()"></i>

<!-- Iframes -->
<iframe id="iframe1"></iframe>
<iframe id="iframe2"></iframe>
<iframe id="iframe3"></iframe>
<iframe id="iframe4"></iframe>
<iframe id="iframe5"></iframe>
<iframe id="iframe6"></iframe>
<iframe id="iframe7"></iframe>
<iframe id="iframe8"></iframe>
<iframe id="iframe9"></iframe>
<iframe id="iframe10"></iframe>


<script>
var fullscreen = false;
var rotating = false;
var rotateInterval;

{% assign dashboard = site.data.dashboard %}

var baseUrl = window.location.origin;
var pathArray = window.location.pathname.split('/');
let siteSuffix=`/${pathArray[1]}/`
if(siteSuffix=='//')
  siteSuffix='';


var tabs = {
    'cicd': {
        iframeId: 'iframe1',
        url: '{{ dashboard.cicd_performance_dashboard_url }}'
    },
    'workItems': {
        iframeId: 'iframe10',
        url: `${siteSuffix}/workitems/workitems.html`
    },
     'packages': {
        iframeId: 'iframe2',
        url: `${siteSuffix}/packageviewer/`
    },
    'orgComparison': {
        iframeId: 'iframe3',
        url: `${siteSuffix}/packageVersionReports/packageVersionReport.html`
    },
      'releasedefns': {
        iframeId: 'iframe4',
        url: `${siteSuffix}/releasedefns/`  // url will be completed in showTab function
    },
    'releases': {
        iframeId: 'iframe5',
        url: `${siteSuffix}/releaselogs/`  // url will be completed in showTab function
    },
    'apexTests': {
        iframeId: 'iframe6',
        url: `${siteSuffix}/apextestResults/`
    },
    'pmdReport': {
        iframeId: 'iframe7',
        url: `${siteSuffix}/pmd/pmdReport.html`
    },
    'packageSummary': {
        iframeId: 'iframe8',
        url: '{{ dashboard.package_summary_dasbhoard_url }}'
    },
    'platformOverview': {
        iframeId: 'iframe9',
        url: '{{ dashboard.platform_overview_dashboard_url }}'
    }
  
};



function showTab(hash) {
    var tab = tabs[hash];

    if (!tab) {
        console.error('Invalid hash: ' + hash);
        return;
    }

    // Hide all iframes
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
        iframes[i].src = '';
    }

    // Show the selected iframe and set its src
    var iframe = document.getElementById(tab.iframeId);
    iframe.style.display = 'block';

    if(hash === 'apexTests') {
        document.getElementById('testOrgSelector').style.display = 'block';
        document.getElementById('branchSelector').style.display = 'none';
        document.getElementById('orgSelector').style.display = 'none';
        document.getElementById('domainSelector').style.display = 'none';
        var selectedOrg = document.getElementById('testOrgSelect').value;
        iframe.src = tab.url + selectedOrg + '.html';
    } 
    else if(hash === 'packages') {
        var selectedBranch = document.getElementById('branchSelect').value;
        iframe.src = tab.url + selectedBranch+ '.html';
       
        document.getElementById('orgSelector').style.display = 'none';
        document.getElementById('branchSelector').style.display = 'block';
        document.getElementById('domainSelector').style.display = 'none';
        document.getElementById('testOrgSelector').style.display = 'none';
    } 
    else if(hash === 'releasedefns') {
        var selectedDomain = document.getElementById('domainSelect').value;
        var selectedBranch = document.getElementById('branchSelect').value;
        iframe.src = tab.url + selectedBranch + "/"+ selectedDomain + '.html';       
        document.getElementById('orgSelector').style.display = 'none';
        document.getElementById('branchSelector').style.display = 'block';
        document.getElementById('domainSelector').style.display = 'block';
        document.getElementById('testOrgSelector').style.display = 'none';
    } else if (hash === 'releases')
    {
        var selectedDomain = document.getElementById('domainSelect').value;
        iframe.src = tab.url + selectedDomain + '.html';
       
        document.getElementById('orgSelector').style.display = 'none';
        document.getElementById('branchSelector').style.display = 'none';
        document.getElementById('domainSelector').style.display = 'block';
        document.getElementById('testOrgSelector').style.display = 'none';
    }
    else {
        iframe.src = tab.url;
       
        document.getElementById('orgSelector').style.display = 'none';
        document.getElementById('branchSelector').style.display = 'none';
        document.getElementById('domainSelector').style.display = 'none';
        document.getElementById('testOrgSelector').style.display = 'none';
    }

    // Highlight the selected link
    var links = document.querySelectorAll('ul#navBar li a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
    var link = document.querySelector('ul#navBar li a[href="#' + hash + '"]');
    link.classList.add('selected');
}

 function initializePage() {
            var hash = window.location.hash.substring(1);
            showTab(hash || 'cicd');
}

function toggleFullscreen() {
    if (!fullscreen) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
    fullscreen = !fullscreen;
}

function toggleRotation() {
    if (rotating) {
        clearInterval(rotateInterval);
    } else {
        rotateInterval = setInterval(function() {
            var selectedLink = document.querySelector('ul#navBar li a.selected');
            var nextLink = selectedLink.parentElement.nextSibling;
            if (!nextLink) {
                nextLink = document.querySelector('ul#navBar li a:first-child');
            }
            window.location.hash = nextLink.getAttribute("href").substring(1);
        }, 2 * 60 * 1000); // every 2 minutes
    }
    rotating = !rotating;
}

window.onload = function() {
    initializePage();

     // Event listener for org selection dropdown
    document.getElementById('orgSelect').addEventListener('change', function() {
        if (window.location.hash.substring(1) === 'apexTests') {
            showTab('apexTests');
        }
    });

     document.getElementById('domainSelect').addEventListener('change', function() {
        if (window.location.hash.substring(1) === 'releasedefns') {
            showTab('releasedefns');
        }
        else if (window.location.hash.substring(1) === 'releases') {
            showTab('releases');
        }
    });

      document.getElementById('branchSelect').addEventListener('change', function() {
        if (window.location.hash.substring(1) === 'releasedefns') {
            showTab('releasedefns');
        }
        else if (window.location.hash.substring(1) === 'domains') {
            showTab('domains');
        }
    });


};

window.onhashchange = function() {
    var hash = window.location.hash.substring(1);
    showTab(hash);
};
window.onhashchange = function() {
            initializePage();
};
</script>