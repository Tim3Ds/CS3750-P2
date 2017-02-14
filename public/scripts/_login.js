/*  FUNCTIONS TO CLEAR FIELD TITLES IF ENTERING VALUES */
function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
    if(field.value == 'user name')
    {
      field.value = '';
    }
  }

/*  FUNCTIONS TO PUT FIELD TITLES BACK IN IF BLANK */
  function field_blur_user(field)
  {
    if(field.value == '')
    {
      field.value = 'user name';
    }
  }

  function field_blur_pass(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('.btn').click(function(event){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.value == "Sign In")
    {
        event.preventDefault();
    }
});