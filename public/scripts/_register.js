/*  FUNCTIONS TO CLEAR FIELD TITLES IF ENTERING VALUES */
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
    if(field.value == "confirm password")
    {
      field.value = '';
    }
    if(field.value == "first name")
    {
      field.value = '';
    }
    if(field.value == "last name")
    {
      field.value = '';
    }
  }

/*  FUNCTIONS TO PUT FIELD TITLES BACK IN IF BLANK */
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

  function field_blur_passconfirm(field)
  {
    if(field.value == '')
    {
      field.value = 'confirm password';
    }
  }

  function field_blur_user(field)
  {
    if(field.value == '')
    {
      field.value = 'user name';
    }
  }

  function field_blur_fname(field)
  {
    if(field.value == '')
    {
      field.value = 'first name';
    }
  }

  function field_blur_lname(field)
  {
    if(field.value == '')
    {
      field.value = 'last name';
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