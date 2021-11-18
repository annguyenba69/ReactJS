$(document).ready(function () {
    var distance = $("#center-wrapper").offset().top;
    console.log(distance);
    $(".button").click(function () {
        $("html").animate({ scrollTop: distance }, 500);
    });
});