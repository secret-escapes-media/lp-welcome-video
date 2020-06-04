// general js for the project that wouldn't be a reuseable component


var modalQueryString = 'fromApp';
if (getQueryStringByName(modalQueryString)) {
  $('body').addClass('fromApp');
}


$('.js-play').click(function(){
  $('.banner').toggleClass('video-active');
});

///////////////////////////////////////
//    Animate SVG paths
///////////////////////////////////////

var path = $('.banner__window-path');
$('.banner__window-path').each(function(){
  var length = this.getTotalLength();
  $(this).css({ 'stroke-dasharray': length });
  $(this).css({ 'stroke-dashoffset': length });
});