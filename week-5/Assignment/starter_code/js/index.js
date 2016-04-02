$(document).ready(function(){
	$('#submit-btn').click(function(e) {
        e.preventDefault(); //this part is to prevent any default execution.

       var city = $("input:text").val(); // .val method helps to get text value from the users.
       //console.log(city);

       /* if user inputs ""New York" or "New York City" or "NYC""
           change background to ".nyc"
          else if user inputs "San Francisco" or "SF" or "Bay Area"
          change background to ".sf"
          else if user imputs "Los Angeles" or "LA" or "LAX"
          change background to ".la"
          else if user imputs "Austin" or "ATX"
          change background to ".austin"
          else if user imputs "Sydney" or "SYD"
          	change background to ".sydney"*/
     if(city == "New York" || city == "New York City" || city == "NYC") {
//.attr add a  class attribute to the body, manipuling html.
          $("body").attr("class","nyc");
     }else if(city == "San Francisco" || city == "SF" || city == "Bay Area") {
           $("body").attr("class","sf");

     }else if(city == "Los Angeles" || city == "LA" || city == "LAX") {
           $("body").attr("class","la");
     }else if(city == "Austin" || city == "ATX") {
           $("body").attr("class","austin");
     }else if(city == "Sydney" || city == "SYD") {
     	   $("body").attr("class","sydney");
     }else{
     	$("input:text").val("try again");
     }
       
   
  });     
});