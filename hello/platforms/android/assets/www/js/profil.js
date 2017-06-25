$(function () {

  var permanentStorage = window.localStorage,
    btnMaj = document.querySelector('.submit-profil-form'),
    firstNameInput = document.getElementById("firstName"),
    lastNameInput = document.getElementById("lastName");

  if (permanentStorage.getItem('firstName')) {
    firstNameInput.setAttribute('value', permanentStorage.getItem('firstName'));
  }

  if (permanentStorage.getItem('lastName')) {
    lastNameInput.setAttribute('value', permanentStorage.getItem('lastName'));
  }

  btnMaj.addEventListener('click', function (e) {
    e.preventDefault();
    var firstName = firstNameInput.value,
      lastName = lastNameInput.value;
    btnMaj.style.backgroundColor = '#692CF9';
    btnMaj.style.color = '#FFFFFF';
    $(btnMaj).attr('value', 'Modifications enregistrées');
    permanentStorage.setItem('firstName', firstName);
    permanentStorage.setItem('lastName', lastName);
    setTimeout(function () {
      btnMaj.style.backgroundColor = '#FFFFFF';
      btnMaj.style.color = '#424242';
      $(btnMaj).attr('value', 'Modifier');
    }, 3000);
    if ($(this).attr('href') == "#") {
      window.location.replace('bubble-screen.html');
    }
  });

});
