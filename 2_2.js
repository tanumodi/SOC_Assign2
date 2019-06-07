$(document).ready(function(){
  $("#btn").on("click", function() {
    var input = $(this).val().toLowerCase();
    $("#t1 tr").filter(function() {
      $(this).hide($(this).text().toLowerCase().indexOf(input) > -1)
    });
  });
});