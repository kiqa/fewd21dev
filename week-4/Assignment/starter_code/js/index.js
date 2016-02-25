$( document ).ready(function() {
	
	$(".readless.hide1").click(disapearText1);
	$(".readless.hide2").click(disapearText2);
	$(".read.more1").click(showOnClick1);
	$(".read.more2").click(showOnClick2);
	$(".learnmore").click(showOnClick3);
	
	
	
	function showOnClick1(){
		$("#show-this-on-click1").slideDown();
		return false;
	}
		
	function disapearText1(){
		$("#show-this-on-click1").slideUp();
		return false;
	}
	function showOnClick2(){
		$("#show-this-on-click2").slideDown();
		return false;
	}
		
	function disapearText2(){
		$("#show-this-on-click2").slideUp();
        return false;
	}
    function showOnClick3(){
	   $("#learnmoretext").slideToggle();
		return false;
	}
});

  