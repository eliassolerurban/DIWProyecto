$(document).ready(function() {
    $("#btn1").click(function() {
        let position = $("#entrada1").offset();
        $('html, body').animate({ scrollTop: position.top - 190 }, 'slow');
    });
    $("#btn2").click(function() {
        let position = $("#entrada2").offset();
        $('html, body').animate({ scrollTop: position.top - 190 }, 'slow');
    });
    $("#btn3").click(function() {
        let position = $("#entrada3").offset();
        $('html, body').animate({ scrollTop: position.top - 190 }, 'slow');
    });
    $("#btn4").click(function() {
        let position = $("#entrada3").offset();
        $('html, body').animate({ scrollTop: position.top - 190 }, 'slow');
    });

    //no consigo que me aparezca la flecha
    $("#toTop").css("display", "none");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $("#toTop").fadeIn("slow");
        } else {
            $("#toTop").fadeOut("slow");
        }
    });

    let x = true;
    $('#trigger').on("click", function(e) {
        e.preventDefault();
        if (x) {
            $('.navegacionPrincipal').stop().slideToggle('fast');
            x = false;
        } else {
            $('.navegacionPrincipal').stop().slideToggle('fast', function() {
                $('.navegacionPrincipal').css('display', '');
                x = true;
            })
        }
    });
});