function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
    if(field.value == "user name")
    {
      field.value = '';
    }
    if(field.value == "password")
    {
      field.value = '';
    }
  }

function field_blur_email(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }

  function field_blur_pass(field)
  {
    if(field.value == '')
    {
      field.value = 'password';
    }
  }

  function field_blur_user(field)
  {
    if(field.value == '')
    {
      field.value = 'user name';
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
//Stop click event
$('.btn').click(function(event){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.value == "Register")
    {
        event.preventDefault();
    }
});