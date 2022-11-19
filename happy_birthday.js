$(document).ready(function() {
    $(".candles").click(function() {

        $(".flame").animate({ "opacity": 0 }, "fast");
        $(".flame2").animate({ "opacity": 0 }, "fast");
        $(".flame3").animate({ "opacity": 0 }, "fast");
        $(".text").animate({ "top": -250, "opacity": 1, "width": 380 }, "fast");
        $(".text").delay(1500).fadeIn().animate({ "top": -200, "opacity": 0, "width": 380 }, "fast");
        $(".text1").delay(2000).animate({ "top": -200, "opacity": 1, "width": 380 }, "fast");
        $(".text1").delay(2000).fadeIn().animate({ "top": -200, "opacity": 0, "width": 380 }, "fast");
        $(".text2").delay(5000).animate({ "top": -200, "opacity": 1, "width": 380 }, "fast");
        $(".text2").delay(2000).fadeIn().animate({ "top": -200, "opacity": 0, "width": 380 }, "fast");
        $(".text3").delay(8000).animate({ "top": -200, "opacity": 1, "width": 380 }, "fast");
        $(".text3").delay(3000).fadeIn().animate({ "top": -200, "opacity": 0, "width": 380 }, "fast");
        setTimeout(function() {
            $(".modal").css("display", "block");
        }, 13000);
        $('.candles').off('click');

    });
    $(".next").click(function() {
        $(".birthday-cake").animate({ "opacity": 0 }, "fast");
        $("body").css("overflow", "hidden");
        $('body').css("width", "100%");
        $('body').css("height", "100%");
        $(".star-sky").css("display", "block");
        $(".star-sky").css("position","relative");
        $(".star-sky").css("overflow", "hidden");
        $('.star-sky').css("width", "100%");
        $('.star-sky').css("height", "100%");
        setTimeout(function() {
            $(".firework-container").css("display", "block");
        }, 1500);
    });
});