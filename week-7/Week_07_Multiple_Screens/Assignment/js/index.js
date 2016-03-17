$(document).ready(function(){
    $(".list").click(function(){
    	event.preventDefault();
        $(".nav").slideToggle();
    });
});