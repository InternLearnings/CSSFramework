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



function submitButtonStyle(_this)
{
    _this.style.backgroundColor = "lightgreen";
}

$(document).ready(function(){
  $("input[name='check']").change(function(){
      var maxallowed=3;
      var cnt=$("input[name='check']:checked").length;
      if(cnt>maxallowed){
          $(this).prop("checked","");
          alert('Alert!! Select maximum ' + maxallowed + ' Checkboxes');
      }
  });
  $('.cm-checkbox-animate').hover(function(){
      $(this).css('opacity','0.5');}
     ,function(){
       $(this).css('opacity','1');
     })
  $('.cm-checkbox-animate').checked(function(){
      $(this).css('border-radius','100%').css('background-color','pink');
  })

  $("input[type='checkbox'] .cm-chk").change(function(){
      if($(this).is(":checked")){
          $(this).parent().addClass("green"); 
      }else{
          $(this).parent().removeClass("green");  
      }
  });
});



function sliderval() {
    const myslider = document.getElementById("cm-my-slider");
const svalue = document.getElementById("cm-slider-value");
    svalue.textContent = myslider.value;
}
function slidersquareval(){
    const myslide = document.getElementById("cm-slider-square");
    const slidervalue = document.getElementById("cm-slider-square-value");
    slidervalue.textContent = myslide.value;
}
function sliderrectangleval(){
    const myslide = document.getElementById("cm-slider-rectangle");
    const slidervalue = document.getElementById("cm-slider-rectangle-value");
    slidervalue.textContent = myslide.value;
}