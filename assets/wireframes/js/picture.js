// JavaScript Document
$('.displayimg').hide();

$('img').click(function() {
  var source = $(this).attr('src');
  $('.thedisplayimg').attr('src',source);
  $('.displayimg').fadeIn();
});

$('.displayimg').click(function() {
  $(this).hide();
});