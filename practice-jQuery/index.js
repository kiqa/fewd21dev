$( document ).ready(function() {
	$("#red").click(illuminateRed);
	$("#yellow").click(illuminateYellow);
	$("#green").click(illuminateGreen);
	$("#blue").click(illuminateBlue);
	
function illuminateRed(){
		 // clearLight();
		  $(".color").css("background-color","red");
	  }
function illuminateYellow(){
		  //clearLight();
		  $(".color").css("background-color","yellow");
	  }
function illuminateGreen(){
		 // clearLight();
		  $(".color").css("background-color","green");
	  }
function illuminateBlue(){
		 // clearLight();
		  $(".color").css("background-color","blue");
	  }
	  
//function clearLight(){
//	$(".color").css("background-color","gray");
//	$(".color").css("background-color","gray");
//	$(".color").css("background-color","gray");
//	$(".color").css("background-color","gray");
//}

});