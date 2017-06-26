$(function () {
  $('input').on('focus', function () {
    $('.footer').hide();
  });
  $('input').on('blur', function () {
    $('.footer').show();
  });

  localStorage.setItem('count.thumb', 0);

  localStorage.setItem('1.thumb', '');
  localStorage.setItem('2.thumb', '');
  localStorage.setItem('3.thumb', '');
  localStorage.setItem('4.thumb', '');
  localStorage.setItem('5.thumb', '');
  localStorage.setItem('6.thumb', '');
  localStorage.setItem('7.thumb', '');
  localStorage.setItem('8.thumb', '');
  localStorage.setItem('9.thumb', '');
  localStorage.setItem('10.thumb', '');
  localStorage.setItem('11.thumb', '');
});
