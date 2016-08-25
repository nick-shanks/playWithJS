$(document).ready(function() {


  $(".parent").append('<div class="a1"></div>')

    function moveDiv() {
        var span = $(".a");

        span.fadeOut(1000, function() {
            var maxLeft = $(window).width() - span.width();
            var maxTop = $(window).height() - span.height();
            var leftPos = Math.floor(Math.random() * (maxLeft + 1))
            var topPos = Math.floor(Math.random() * (maxTop + 1))

            span.css({
                left: leftPos,
                top: topPos
            }).fadeIn(1000);
        });
    };

    moveDiv();
    setInterval(moveDiv, 1000);



    // var audio = new Audio("lounge mix (HQ) by Bee Flow.mp3")
    // audio.play()

    // setInterval(function() {
    //     $(".mainpicture").animate({
    //         height: window.innerHeight,
    //         width: window.innerWidth,
    //
    //     }, 1000);
    //
    //     $(".mainpicture").animate({
    //         height: '0px',
    //         width: '0px',
    //
    //     }, 1000);
    //   })


});
