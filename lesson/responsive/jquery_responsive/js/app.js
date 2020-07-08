$(document).ready(function() {
    // alert('Nội dung được hiển thị bởi jquery')
    $('a#change_color').click(function() {
        // alert('Đổi màu');
        $('h1').css('color', 'red');
        return false;
    });

});