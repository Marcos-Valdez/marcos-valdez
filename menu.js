$(init);
function init(){
  $('.button-menu').click(navSlide);
  $('.flex-item').click(navHide);
}

function navSlide(){
  $('.flex-item').slideToggle(0, navResponsive);
}

function navHide(){
  $('.flex-item').removeClass('nav-expanded');
}

function navResponsive(){
  $('.flex-item').toggleClass('nav-expanded').css('display','');
}
