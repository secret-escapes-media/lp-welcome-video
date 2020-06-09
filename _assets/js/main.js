// general js for the project that wouldn't be a reuseable component


$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('animate');
  },500);
});




if (getQueryStringByName('fromApp')) {
  $('body').addClass('fromApp');
}


$('.js-play').click(function(){
  $('.banner').toggleClass('video-active');
});




///////////////////////////////////////
//    Video
///////////////////////////////////////

function videoPlay(){
  $('.banner').addClass('video-playing');
  $('.banner__play').fadeOut();
  $('.banner__window').fadeOut();
  $('.banner__video').fadeIn();
  ytPlayer.playVideo();
}

$('.js-play-video').click(function(){
  videoPlay();
});

if (getQueryStringByName('video')) {
  videoPlay();
}




///////////////////////////////////////
//    Animate SVG paths
///////////////////////////////////////

var path = $('.banner__window-path');
$('.banner__window-path').each(function(){
  var length = this.getTotalLength();
  $(this).css({ 'stroke-dasharray': length });
  $(this).css({ 'stroke-dashoffset': length });
});



