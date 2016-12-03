$(document).ready(function () {
  $(document).on("click", "#button", function () {
    if($('#name-input').val() == ""){
      $('#record-table').append('<p class="text-danger message">Please enter your name!</p>');
    }
    else{
      getData($('#name-input').val());
    }
  });
});

function getData(name){
  $.ajax({
    url:    "http://108.24.150.90/workshop/workshop.php",
    type:   "POST",
    data:   {
        name:  name
    },
    success: function(data) {
      $('#loading').hide();
      $("#record-table").empty();
      $( "#record-table" ).css('opacity', '0');
      
      if(data.indexOf("Error") > -1){
        $('#record-table').append('<p class="text-danger message"><br><br><br>'+data.replace('Error', '')+'</p>');
      }
      else{
        console.log("success");

        json = $.parseJSON(data);
        for(var i=0; i<json.length; i++){
          console.log(json[i]);
          $("#record-table").append('<p class="lead" id="record'+i+'">Hello, '+json[i].name+'. I see you contacted me at '+json[i].time+'.</p><p class="lead" id="record'+i+'">Here is some wisdom for you: '+json[i].wisdom+'</p>');
        }

        $("#record-table").fadeTo("fast" , 1, function() {
          //This is a jQuery animation!
        });
      }
    }
  });
}