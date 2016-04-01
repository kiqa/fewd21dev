$(document).ready(function() {
  $('#read1').click(function(){
    $('#show-text1').slideDown();
    $('#read1').hide();
    $('.readless').show();
    event.preventDefault();
  });
  $('.readless').click(function(){
    $('#show-text1').slideUp();
    $('.readless').hide();
    $('#read1').show();
    event.preventDefault();
  });
  $('#read2').click(function(){
    $('#show-text2').slideDown();
    $('#read2').hide();
    $('.readless').show();
    event.preventDefault();
  });
  $('.readless').click(function(){
    $('#show-text2').slideUp();
    $('.readless').hide();
    $('#read2').show();
    event.preventDefault();
  });

 });