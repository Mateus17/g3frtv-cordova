$(function () {

  var permanentStorage = window.localStorage,
    btnMaj = document.querySelector('.submit-profil-form'),
    firstNameInput = document.getElementById("firstName"),
    lastNameInput = document.getElementById("lastName"),
    check1Input = document.getElementById("check_01"),
    check2Input = document.getElementById("check_02"),
    check3Input = document.getElementById("check_03");
  console.log(permanentStorage);
  if (permanentStorage.getItem('firstName')) {
    firstNameInput.setAttribute('value', permanentStorage.getItem('firstName'));
  }

  if (permanentStorage.getItem('lastName')) {
    lastNameInput.setAttribute('value', permanentStorage.getItem('lastName'));
  }

  if (permanentStorage.getItem('checkbox_1')) {
    if (permanentStorage.getItem('checkbox_1') == 'true') {
      check1Input.setAttribute('checked', 'checked');
    }
  }

  if (permanentStorage.getItem('checkbox_2')) {
    if (permanentStorage.getItem('checkbox_2') == 'true') {
      check2Input.setAttribute('checked', 'checked');
    }
  }

  if (permanentStorage.getItem('checkbox_3')) {
    if (permanentStorage.getItem('checkbox_3') == 'true') {
      check3Input.setAttribute('checked', 'checked');
    }
  }

  btnMaj.addEventListener('click', function (e) {
    e.preventDefault();
    var firstName = firstNameInput.value,
      lastName = lastNameInput.value,
      check1 = check1Input.checked,
      check2 = check2Input.checked,
      check3 = check3Input.checked;
    btnMaj.style.backgroundColor = '#692CF9';
    btnMaj.style.color = '#FFFFFF';
    $(btnMaj).attr('value', 'Modifications enregistrées');
    permanentStorage.setItem('firstName', firstName);
    permanentStorage.setItem('lastName', lastName);
    permanentStorage.setItem('checkbox_1', check1);
    permanentStorage.setItem('checkbox_2', check2);
    permanentStorage.setItem('checkbox_3', check3);
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
