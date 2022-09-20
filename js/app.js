$('#openMenu').click(function () {
    $('.links').css('left', '50%');
    $('.overlay').fadeIn();
    $('#openMenu').hide();
    $('#closeMenu').show();
})

$('#closeMenu').click(function () {
    $('.links').css('left', '150%');
    $('.overlay').fadeOut();
    $('#openMenu').show();
    $('#closeMenu').hide();
})

//Dropdown Menu
$('.dropDown1').click(function() {
    $('.btn1').fadeToggle()
})
$('.dropDown2').click(function() {
    $('.btn2').fadeToggle()
})