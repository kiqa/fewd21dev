jQuery( document ).ready(function() {
	jQuery("#stopButton").click(illuminatedRed);
	jQuery("#slowButton").click(illuminatedYellow);
	jQuery("#goButton").click(illuminatedGreen);

	function illuminatedRed(){
		clearLight();
		jQuery("#stopLight").css("background-color","red");
		console.log("Red Light!");
	}


	function illuminatedYellow(){
		
		clearLight();
		jQuery("#slowLight").css("background-color","yellow");
		console.log("Yellow Light!");
	}


	function illuminatedGreen(){
		
		clearLight();
		jQuery("#goLight").css("background-color","green");
		console.log("Green Light!");
	}



	function clearLight(){
		jQuery("#stopLight").css("background-color","black");
		jQuery("#slowLight").css("background-color","black");
		jQuery("#goLight").css("background-color","black");
		
		}
});
