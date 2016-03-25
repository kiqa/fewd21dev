//  Bind the event handler to the "submit" JavaScript event
$('form').submit(function () {

 var inputs = [
    "#inputName",
    "#inputEmail",
    "#inputPhone",
    "#inputStates",
    "#inputPassword",
    "#inputTerms"
  ];

  var error = false;

  inputs.forEach(function(e) {
    // Get the Login Name value and trim it
    var name = $.trim($(e).val());

    // Check if empty of not
    if (name  === '') {
       alert(e + ' is empty.');
       error = true;
    }
  });

   if (error) {
     return false;
   }
 
});