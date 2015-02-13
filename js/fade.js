$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    $('.message1').css('display', 'none');
    $('.message2').css('display', 'none');
    $('.message3').css('display', 'none');
    $('.message4').css('display', 'none');
    $('.message5').css('display', 'none');
    $('.message6').css('display', 'none');
    $('.message7').css('display', 'none');
    $('#fake').css('display', 'none');
    $('#fake').fadeOut(1);
    $('#wrapper').css('display', 'none');
    $('#wrapper').fadeIn(2000);

    $('.fadelink').click(function() {
        event.preventDefault();
        newLocation = this.href;
        $('#fake').fadeIn(1000);
        $('#wrapper').fadeOut(1000, m1);
    });

    function newpage() {
        window.location = newLocation;
    }

    function m1() {
        $('.message1').fadeIn(2000, m2);
    }

    function m2() {
        $('.message2').fadeIn(2000, m3);
    }

    function m3() {
        $('.message3').fadeIn(2000, m4);
    }

    function m4() {
        $('.message4').fadeIn(2000, m5);
    }

    function m5() {
        $('.message5').fadeIn(2000, m6);
    }

    function m6() {
        $('.message6').fadeIn(2000, m7);
    }

    function m7() {
        $('.message7').fadeIn(2000, body);
    }

    function body() {
        $('body').fadeOut(2000, newpage);
    }

});