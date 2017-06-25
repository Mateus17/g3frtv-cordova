$(function () {
  $('input').on('focus', function () {
    $('.footer').hide();
  });
  $('input').on('blur', function () {
    $('.footer').show();
  });
});
