$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.sky').css({
  	
    'transform' : 'translate(0px, -'+ wScroll /0.9 +'px)'
  });
  
  $('.sun').css({
  	
    'transform' : 'translate(0px, '+ wScroll /1.5 +'px)'
  });
  
});
