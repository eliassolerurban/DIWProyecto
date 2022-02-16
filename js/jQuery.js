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
    $("#toTop").css("display", "none");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $("#toTop").fadeIn("slow");
        } else {
            $("#toTop").fadeOut("slow");
        }
    });
});