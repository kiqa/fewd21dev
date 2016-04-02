var imageData = new Array();
imageData.push(["chimpanzee.jpg","chimpanzee"]);
imageData.push(["crocodile.jpg","crocodile"]);
imageData.push(["elefant.jpg","elefant"]);
imageData.push(["hipopotamos.jpg","hipopotamos"]);
imageData.push(["lion.jpg","lion"]);
imageData.push(["squirrel.jpg","squirrel"]);
imageData.push(["tiger.jpg","tiger"]);


	function play(){
		// Sets up a game to play
						
		// Choose an animal
		var selected = Math.floor(Math.random() * imageData.length);
		console.log(selected);
		console.log(imageData[selected]);
		
		// Assign image to display
		jQuery(".image img").attr("src","img/"+imageData[selected][0]);
		
		// Assign animal name to the alt attribute
		jQuery(".image img").attr("alt",imageData[selected][1]);
		
			
	}// end function play
	
	
	function submitAnswer(){
		// Tests answer against submission
		var animal = $.trim($("#animalSubmission").val());
		
		if (animal  === '') {
            alert('You cannot enter a blank name.');
            return false;
        }

		
		var correctSpelling = jQuery(".image img").attr("alt");
		if(animal == correctSpelling){
			jQuery(".image img").attr("src","img/correct.jpg");
		}else{
			jQuery(".image img").attr("src","img/incorrect.png");
		}
		$("#animalSubmission").val("");
		$( "" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
			
	} // end submitAnswer
	

$(document).ready(function(){
	//
	//When I writed the text and click enter the right name of the animal that it will show  alert me with"correct you did it!"
	//if i enter a wrong name of the animal it will alert me " try again!!" 
	//when i want change the image i can click SKIP.
	
	
	    
	    $(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
		$(".play").click(function(e){
			e.preventDefault();
			play();
		});
			
	     
	    $(".skip").click(function(e){
			e.preventDefault();
			play();
		});
			
	    $(".enter").click(function(e){
			e.preventDefault();
            submitAnswer();
		});

	});
