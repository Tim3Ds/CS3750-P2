
//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('.btn').click(function(event){
    e = event || window.event;
    var target = e.target || e.srcElement;
    if (target.value == "Register")
    {
        event.preventDefault();
    }
});