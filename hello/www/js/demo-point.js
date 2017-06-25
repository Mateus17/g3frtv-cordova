$(function () {
  $('.got-it').on('click', function () {
    $('.demo').addClass('demo-out');
    setTimeout(function () {
      $('.demo').addClass('reset-before-element');
    }, 500);
    $('.demo-text').hide();
  });
});
