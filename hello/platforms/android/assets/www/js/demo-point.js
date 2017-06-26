$(function () {
  $('.got-it').on('click', function () {
    $('.demo').addClass('demo-out');
    setTimeout(function () {
      $('.demo').addClass('reset-before-element');
    }, 500);
    $('.demo-text').hide();
  });

  function newItemThumb() {
    $('.tab-badge').show().text(localStorage.getItem('count.thumb'));
  }

  var int;

  $('.pin').on('click', function () {
    if (document.querySelector('#video').currentTime !== 0) {
      var currentTime = Math.floor(document.querySelector('#video').currentTime);
      //console.log(currentTime);

      switch (true) {
        case (currentTime > 2 && currentTime <= 15 && localStorage.getItem('1.thumb') == ''):
          localStorage.setItem('1.thumb', 'img/point-01.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 15 && currentTime <= 30 && localStorage.getItem('2.thumb') == ''):
          localStorage.setItem('2.thumb', 'img/point-02.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 30 && currentTime <= 41 && localStorage.getItem('3.thumb') == ''):
          localStorage.setItem('3.thumb', 'img/point-03.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 41 && currentTime <= 52 && localStorage.getItem('4.thumb') == ''):
          localStorage.setItem('4.thumb', 'img/point-04.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 52 && currentTime <= 57 && localStorage.getItem('5.thumb') == ''):
          localStorage.setItem('5.thumb', 'img/point-05.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 57 && currentTime <= 63 && localStorage.getItem('6.thumb') == ''):
          localStorage.setItem('6.thumb', 'img/point-06.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 63 && currentTime <= 89 && localStorage.getItem('7.thumb') == ''):
          localStorage.setItem('7.thumb', 'img/point-07.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 89 && currentTime <= 92 && localStorage.getItem('3.thumb') == ''):
          localStorage.setItem('3.thumb', 'img/point-03.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 92 && currentTime <= 101 && localStorage.getItem('8.thumb') == ''):
          localStorage.setItem('8.thumb', 'img/point-08.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
        case (currentTime > 101 && currentTime <= 117 && localStorage.getItem('4.thumb') == ''):
          localStorage.setItem('4.thumb', 'img/point-04.png');
          int = parseInt(localStorage.getItem('count.thumb'));
          localStorage.setItem('count.thumb', int + 1);
          newItemThumb();
          break;
      }
      console.log(localStorage);
      /*      console.log(localStorage.getItem('count.thumb'));*/
    }
  });

});
