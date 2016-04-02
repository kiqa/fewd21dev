//  Bind the event handler to the "submit" JavaScript event
$(document).ready(function() {
$('form').submit(function () {

 var inputs = [
    "#inputName",
    "#inputEmail",
    "#inputComment"
  ];

  var error = false;

  inputs.forEach(function(e) {
    // Get the Login Name value and trim it
    var name = $.trim($(e).val());

    // Check if empty of not
    if (name  === '') {
       alert(e + ' You need add your information.');
       error = true;
    }
  });

   if (error) {
     return false;
   }
 
});
});