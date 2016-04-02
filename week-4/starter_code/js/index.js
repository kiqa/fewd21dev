$( document ).ready(function() {
	// KW= this part is for the articles buttons: read more and readless hide. one of my issues was the space in each one because Jquery didn't respond when I put the space. so I decided to put dot same as class and it works!! :)//
	// $(".readless .hide1").click(disapearText1);
	// $(".readless .hide2").click(disapearText2);
	// $(".read.more1").click(showOnClick1);
	// $(".read.more2").click(showOnClick2);
	// // KW= This part is the aside. I tryed the put "learnmoretext" with event"hide" but doesn't work,so when I removed it finaly works. //
	// $(".learnmore").click(showOnClick3);
	
	
	// // KW= when i was clicking my web page jumps up the head so I research in the web and I found two opcions "e.preventDefault();" and "return false;" and I took return false because it is easy tu remmember. I would like to know what is the difference between this two method// 
	// function showOnClick1(){
	// 	$("#show-this-on-click1").slideDown();
	// 	return false;
	// }
		
	// function disapearText1(){
	// 	$("#show-this-on-click1").slideUp();
	// 	$(".readmore1").hide();
	// 	return false;
	// }
	// function showOnClick2(){
	// 	$("#show-this-on-click2").slideDown();
	// 	return false;
	// }
		
	// function disapearText2(){
	// 	$("#show-this-on-click2").slideUp();
 //        return false;
	// }
 //    function showOnClick3(){
	//    $("#learnmoretext").slideToggle();
	// 	return false;
	// }




	$('#article-1 .readmore').click(function(e){
		e.preventDefault();
		$('#article-1 #show-this-on-click').slideDown();
		$('#article-1 .readless').show();
		$('#article-1 .readmore').hide();
		
	});

	$('#article-1 .readless').click(function(e){
		e.preventDefault();
		$('#article-1 #show-this-on-click').slideUp();
		$('#article-1 .readmore').show();
		$('#article-1 .readless').hide();
		
	});

	$('#article-2 .readmore').click(function(e){
		e.preventDefault();
		$('#article-2 #show-this-on-click').slideDown();
		$('#article-2 .readless').show();
		$('#article-2 .readmore').hide();
		
	});

	$('#article-2 .readless').click(function(e){
		e.preventDefault();
		$('#article-2 #show-this-on-click').slideUp();
		$('#article-2 .readmore').show();
		$('#article-2 .readless').hide();
		
	});
});

  