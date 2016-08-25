$(document).ready(function() {

    function moveDiv() {
        var fern = $(".a");

        fern.fadeOut(1000, function() {
            var maxLeft = $(window).width() - fern.width();
            var maxTop = $(window).height() - fern.height();
            var leftPos = Math.floor(Math.random() * (maxLeft + 1))
            var topPos = Math.floor(Math.random() * (maxTop + 1))

            fern.css({
                left: leftPos,
                top: topPos
            }).fadeIn(1000);
        });
    };

    moveDiv();
    setInterval(moveDiv, 1000);

});
