$(document).ready(function () {
    $("div.link").hover(function () {
        $("div.hoverLink").show();
        $(this).hide();
    });
})