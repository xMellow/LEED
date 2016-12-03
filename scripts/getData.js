$(document).ready(function () {
  $(document).on("click", "#button", function () {
    $.ajax({
      url:    "https://pi-core.cc.lehigh.edu/piwebapi/assetservers",
      "method": "GET",
      "crossDomain": true,
      "headers": {
        "authorization": "Basic YWRcZWxrMjE4OlZlZGxpJ3NwbGFndWU1OTY="
      },
      success: function(data) {
        alert(data);
      }
    });
  });
});