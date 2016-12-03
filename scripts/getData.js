$(document).ready(function () {
  $(document).on("click", "#button", function () {
    $.ajax({
      url:    "https://devdata.osisoft.com/piwebapi",
      "method": "GET",
      "headers": {
        "authorization": "Basic d2ViYXBpdXNlcjohdHJ5My4xNHdlYmFwaSE="
      },
      success: function(data) {
        alert(data);
      }
    });
  });
});