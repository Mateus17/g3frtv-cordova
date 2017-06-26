$(function () {
  if (localStorage.getItem('count.thumb') != "0") {
    $('.empty').hide();
    $('.booked').show();
    for (var i = 1; i < 12; i++) {
      var test = i + '.thumb';
      if (localStorage.getItem(test) !== '') {
        $('.booked').append('<a href="#"><img src="' + localStorage.getItem(test) + '" data-img="' + i + '" alt=""></a>');
      }
    }
  }
});
