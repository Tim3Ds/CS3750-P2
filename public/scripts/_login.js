function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
  }

  function field_blur(field, email)
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