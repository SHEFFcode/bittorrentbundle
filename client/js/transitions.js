$(document).ready(function () {
  //remove the bt loading screen after one second
  setTimeout(function () {
    $('#loading').removeClass('load');
    $('.main').removeClass('hidden');
    $('.navbar-default').addClass('navbar-fixed-top');
  }, 1000);

  //video controls
  var vid = $('video');
  var top = vid.offset().top;
  $(window).on('scroll', function(event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    // whether that's below the form
    if (y > top) {
      vid.addClass('scroll');
      $('.vid-wrap').addClass('scroll');
      $('.video').addClass('scroll');
    } else {
      $('.video').removeClass('scroll');
      $('.vid-wrap').removeClass('scroll');
      vid.removeClass('scroll');
    }
  });
  //play functionality
  $('.play').click(function () {
    $('.video').removeClass('hidden');
    $('.playing').addClass('hidden');
    $('.playing').addClass('hidden');
    $('.splash-info-bar').addClass('hidden');
  });

});