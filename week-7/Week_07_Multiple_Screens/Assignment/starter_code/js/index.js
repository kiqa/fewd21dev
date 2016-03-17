$(document).ready(function(){
$('.logo').on('click', function(e){ //when you will click in the logo the list will be appear and hide.
     e.preventDefault();
     $('#nav').slideToggle();
});
// when you click in each article tittle the text will appear and hide.
$('.text1').on('click', function(e){
     e.preventDefault();
     $('.article1').slideToggle();
});
$('.text2').on('click', function(e){
     e.preventDefault();
     $('.article2').slideToggle();
});

});