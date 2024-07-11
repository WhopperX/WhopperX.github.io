$(function() {
    //caches a jQuery object containing the header element
    var header = $("#navy");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('bg-transparent').addClass("bg-info");
        } else {
            header.removeClass("bg-info").addClass('bg-transparent');
        }
    });
});