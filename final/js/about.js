$(document).ready(function() {
	
  $('#readmore1').click(function(e){
      e.preventDefault();
	  $('#show-text1').slideDown();
      $('#readless1').show();
      $('#readmore1').hide();
  });
  
  $('#readless1').click(function(e){
      e.preventDefault();
	  $('#show-text1').slideUp();
      $('#readless1').hide();
      $('#readmore1').show();
  });
  
  $('#readmore2').click(function(e){
      e.preventDefault();
	  $('#show-text2').slideDown();
      $('#readless2').show();
      $('#readmore2').hide();
  });
  
  $('#readless2').click(function(e){
      e.preventDefault();
	  $('#show-text2').slideUp();
      $('#readless2').hide();
      $('#readmore2').show();
  });
  
  
  /*
	  $('#article-1 .readmore').click(function(e){
		e.preventDefault();
		$('#article-1 #show-this-on-click').slideDown();
		$('#article-1 .readless').show();
		$('#article-1 .readmore').hide();
		
	});
  */
  
  //$('#read2').click();
  //  $('#show-text1').slideDown();
  //  $('#show-text2').slideDown();
    
 });