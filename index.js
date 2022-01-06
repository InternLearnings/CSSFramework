let password_check = document.getElementsByClassName("cm-password-check")[0];
let password_toggle_visibility = document.getElementsByClassName("cm-password-toggle-visibility")[0];

password_check.onkeyup = function() {
  
  let length = password_check.value.length;

  if(length == 1) {
    password_check.classList.add('cm-txt-outline-danger');
  }
  else if(length == 4) {
    password_check.classList.remove('cm-txt-outline-danger');
    password_check.classList.add('cm-txt-outline-warning');
  }
  else if(length == 9){
    password_check.classList.remove('cm-txt-outline-warning');
    password_check.classList.add('cm-txt-outline-success');
  }

  console.log(document.getElementsByClassName(password_check));
}

password_toggle_visibility.onclick = function() {
  const type = password_check.getAttribute('type') === 'password' ? 'text' : 'password';
  password_check.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
}

$( "div.demo" ).scrollTop( 300 );
