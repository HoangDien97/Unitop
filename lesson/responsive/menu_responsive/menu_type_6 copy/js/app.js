$(document).ready(function() {
    $('#icon-menu-responsive').click(function() {
        $('#site').toggleClass('open-respon-menu');
        $('#icon-menu-responsive').toggleClass('fas fa-ellipsis-v fas fa-times');
        // $('#icon-menu-responsive').removeClass('fas fa-ellipsis-v');


        return false;
    });
    $(window).resize(function() {
        if ($(document).width() >= 768) {
            $('#site').removeClass('open-respon-menu');
            $('#icon-menu-responsive').removeClass('fas fa-times').addClass('fas fa-ellipsis-v');

        }
    });
});