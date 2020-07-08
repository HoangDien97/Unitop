$(document).ready(function() {
    $('#icon-menu-responsive').click(function() {
        $('#respon-menu').slideToggle();
        return false;
    });
    $(window).resize(function() {
        if ($(document).width() >= 768) {
            $('#respon-menu').css('display', 'none');
        }
    });
});