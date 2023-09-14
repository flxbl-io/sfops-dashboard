$(document).ready(function() {
    var table = $('#packageTable').DataTable({
      "scrollY": "100%",
      "scrollCollapse": true,
      "paginate": false,
      "initComplete": function() {
        // Attach package info to each row after DataTable initialization
        this.api().rows().every(function() {
          var data = this.data();
          var id = data[0]; // Assuming package name is in the first column
          var slugifiedId = id.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(); // Basic slugify
          $(this.node()).attr('data-package-info', JSON.stringify(packageData[slugifiedId]));
        });
  
        // Add dropdown filter for second column
        var column = this.api().column(1);
        var select = $('<select><option value=""></option></select>')
          .appendTo($("#filterRow th").eq(column.index()))
          .on('change', function() {
            var val = $.fn.dataTable.util.escapeRegex($(this).val());
            column.search(val ? '^' + val + '$' : '', true, false).draw();
          });
        column.data().unique().sort().each(function(d, j) {
          select.append('<option value="' + d + '">' + d + '</option>');
        });
      }
    });
  
    // Row click to show modal with package info
    $('#packageTable tbody').on('click', 'tr', function() {
      var packageInfo = $(this).attr('data-package-info');
      if (packageInfo) {
        var parsedInfo = JSON.parse(packageInfo); // Assuming packageInfo is a JSON string
        $('#jsonData').text(JSON.stringify(parsedInfo.packageInfo, null, 2));
        Prism.highlightElement(document.getElementById('jsonData'));

         // Convert domainData to YAML and display
     if (parsedInfo.domainData) {
        var domainDataYAML = jsyaml.dump(parsedInfo.domainData);
        $('#yamlData').text(domainDataYAML);  // Assuming you have an element with id="yamlData"
        Prism.highlightElement(document.getElementById('yamlData'), 'language-yaml');
      }


        $('#packageModal').modal('show');
      }
    });
  
    // Close modal
    $('.modal-close').click(function() {
      $('#packageModal').hide();
    });
  });
  