var win = $(window);

const showNavBar = () => {
    $(".navigation__hamburger").on('click',function(){
        $(this).animate({
            opacity: 1,
            left: "+=50",
            height: "toggle"
          }, 500, function() {
            $('.navAfterClickHamburger').css('display','flex')
                .hide()
                .fadeIn();
          });
    })
}

const showUpArrow = () => {
    $(win).scroll(function(){
        if ($(this).scrollTop() >= 150){
            $('.backToUpArrow').fadeIn(500);
        }
        else{
            $('.backToUpArrow').fadeOut(500);
        }
    })
}

const linkScroll = () => {

    $('.navigation__item--home, .navigation__logo').on('click',function(){
        $('html, body').animate({
            scrollTop: $('.header').offset().top
        }, 1500);
    })

    $('.navigation__item--aboutUs').on('click',function(){
        $('html, body').animate({
            scrollTop: $('.aboutUs').offset().top
        }, 1500);
    })

    $('.navigation__item--menu').on('click',function(){
        $('html, body').animate({
            scrollTop: $('.menu').offset().top
        }, 1500);
    })

    $('.navigation__item--gallery').on('click',function(){
        $('html, body').animate({
            scrollTop: $('.gallery').offset().top
        }, 1500);
    })

    $('.navigation__item--contact').on('click',function(){
        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 1500);
    })


    $('.backToUpArrow').on('click',function(){
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 850);
    })

    
}

const hamburgerAndNavFix = () =>{
    $(window).on('resize', function(){
        
        var show;
        if(win.width() > 1195){
            $('.navAfterClickHamburger').css('display','none');
            $('.navigation__hamburger').css('display', 'none');
            
            

        }
        else if(win.width() < 1195){
            $('.navigation__hamburger').css({
                'display': 'flex',
            });
        }
    })
}

const exitNavigationButton = () =>{
    $(".navAfterClickHamburger--exit").on('click', function(){
        $(".navAfterClickHamburger").animate({
            right: '0',
            width: 'toggle'
        }, 500, function(){
                $('.navigation__hamburger').animate({
                    opacity: 1,
                    display: 'flex',
                    height: "toggle"
                },500, function(){
                    return true;
                })
        })
    })
}


$(document).ready(function(){

    exitNavigationButton();
    linkScroll();
    hamburgerAndNavFix();
    showNavBar();
    showUpArrow();
    
})
