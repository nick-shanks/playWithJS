$(document).ready(function() {

var audio = new Audio("Ali.mp3")
audio.play()

setInterval(function() {
    $(".mainpicture").animate({
        height: window.innerHeight,
        width: window.innerWidth,

    }, 8000);

    $(".mainpicture").animate({
        height: '0px',
        width: '0px',

    }, 3000);
  })

});
