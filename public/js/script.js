$(document).ready(function(){

    var $header = $('#top-head');

    // Nav Fixed
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });

    // Nav Toggle Button
    $('#nav-toggle').click(function(){
        $header.toggleClass('open');
    });
    $('#global-nav').click(function(){
        $header.toggleClass('open');
    });

//    $(document).on('click touchend', function(event) {
//        if (!$(event.target).closest('#nav-toggle #global-nav').length) {
//            $header.removeClass('open');
//        }
//    });

});
