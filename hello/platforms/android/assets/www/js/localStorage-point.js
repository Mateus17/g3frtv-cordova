$(function() {
  if (localStorage.getItem('count.thumb') != "0") {
    $('.tab-badge').show().text(localStorage.getItem('count.thumb'));
  }
});
