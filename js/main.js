$(document).ready(function(){


$(".enslishVersion").hide();

$(".spanishBtn").click(function(){
    $(".spanishBtn").hide();
    $(".englishBtn").show();
    $(".spanishVersion").show();
    $(".englishVersion").hide();
});

$(".englishBtn").click(function(){
    $(".englishBtn").hide();
    $(".spanishBtn").show();
    $(".englishVersion").show();
    $(".spanishVersion").hide();
});

$('#newsBtn').click(function (){
    $('html, body').animate({
        scrollTop: $("div.news").offset().top
    }, 2000)
});

});