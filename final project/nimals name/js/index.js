$(document).ready(function(){
	//
	//When I writed the text and click enter the right name of the animal that it will show  alert me with"correct you did it!"
	//if i enter a wrong name of the animal it will alert me " try again!!" 
	//when i want change the image i can click SKIP.
	console.log("carne");
	$(".play").click(function(e){
		e.preventDefault();
			//var animals = [ 
			//"chimpanzee",
			//"crocodile", 
			//"elefant",
			//"hipopotamos",
			//"lion",
			//"squirrel",
			//"tiger" ];
			
			var image = new Array();
			image[0]= "chimpanzee."
			image[1]= "crocodile"
			image[2]= "elefant"
			image[3]= "hipopotamos"
			image[4]= "lion"
			image[5]= "squirrel"
			image[6]= "tiger"




			
		var selected = Math.floor(Math.Random() * image.length);
		 console.log(image[selected]);
		while (image === selected){
			if(0 === "chimpanzee"){
				console.log("correct you did it!")
			}else{
				console.log(" try again!!")
			}if(1 === "crocodile"){
				console.log("correct you did it!")
			}else{
				console.log(" try again!!")
			}if(2 === "elefant"){
				console.log("correct you did it!")
			}else{
				console.log(" try again!!")
			}if(3 === "hipopotamos"){
				console.log("correct you did it!")
			}else{
				console.log(" try again!!")
			}if(4 === "lion"){
				console.log("correct you did it!")
			}else{
				console.log(" try again!!")
			}if(5 === "squirrel"){
				console.log("correct you did it!")
			}else{
				console.log(" try again!!")
			}if(6 === "tiger"){
				console.log("correct you did it!")
			}else{
				console.log(" try again!!")
			}
}
		
	
		var animal = $("imput:text").val();
		 
	});
});
