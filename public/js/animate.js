$(document).ready(function () {
    $('.section-2-slide').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]

    });

    $('.section-4-slide').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToScroll: 4,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // isotope

    $('#btn-artwork').on('click', function () {
        $('.grid').isotope({ filter: '.artwork' });
        $(this)
            .css('color', '#222222')
            .css('font-weight', '600');
        $('#btn-character')
            .css('color', '#6c6c6c')
            .css('font-weight', '200');
    });

    $('#btn-character').on('click', function () {
        $('.grid').isotope({ filter: '.character' });
        $(this)
            .css('color', '#222222')
            .css('font-weight', '600');
        $('#btn-artwork')
            .css('color', '#6c6c6c')
            .css('font-weight', '200');
    });

    // link navigation scroll
    $('#home').on('click', function () {
        // window.location.reload();
        window.scrollTo(0, 0);
        $('a').removeClass('active');
        $(this).addClass('active');
    })

    $('#info').on('click', function () {
        // window.location.reload();
        window.scrollTo(0, 700);
        $('a').removeClass('active');        
        $(this).addClass('active');
        
    });

    $('#seeOurWorld').on('click', function () {
        // window.location.reload();        
        window.scrollTo(0, 3300);
        $('a').removeClass('active');        
        $(this).addClass('active');
        
    });

    $('#bazaar').on('click', function () {
        // window.location.reload();        
        window.scrollTo(0, 4348);
        $('a').removeClass('active');        
        $(this).addClass('active');
        
    });
    $('#theCrew').on('click', function () {
        // window.location.reload();        
        window.scrollTo(0, 2250);
        $('a').removeClass('active');        
        $(this).addClass('active');
        
    });
    $('#theBookSeries').on('click', function () {
        // window.location.reload();        
        window.scrollTo(0, 1530);
        $('a').removeClass('active');
        $(this).addClass('active');
        
    });
    $(window).scroll(function () {
        console.log('X:' + window.pageXOffset+ ' Y:'+ window.pageYOffset);

    });
});

