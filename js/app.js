$(function() {
    
    
    ////    ADDING HOVER EFFECT ON EACH PACKSHOT PRODUCT
    
    var products = $('.packshot-container').find('[class*="item"]');
    
    products.hover(function() {
        $(this).addClass('hover');
        $(this).animate({
            opacity: 1
        }, 50)
    }, function() {
        $(this).removeClass('hover');
        $(this).animate({
            opacity: 0.2
        }, 50)
    });
    
    
    
    ////    CHANGING THE SECTION '#CONTENT' BACKGROUND TO DARK FOR BETTER VISIBILITY
    
    var infoContent = $('.info-content');
    
    infoContent.hover(function() {
        $(this).addClass('info-hover');
    }, function() {
        $(this).removeClass('info-hover');
    })
    
    
    ////    ANIMATING ARROW ON HOVER IN EACH 'A' ELEMENT AND 'BUTTON' ELEMENT
    
    var allBtns = $('a');
    var formBtn = $('form').find('button');
    
    allBtns.on('mouseenter', function() {
        $(this).find('span').animate({
            right: '+=4px'
        }, 300, function() {
            $(this).animate({
                right: '-=4px'
            }, 300)
        })
    })
    formBtn.on('mouseenter', function() {
        $(this).find('span').animate({
            right: '+=4px'
        }, 300, function() {
            $(this).animate({
                right: '-=4px'
            }, 300)
        })
    })
    
    
    ////    TOGGLING SIDE-MENUS VISBILITY ON CLICK    
    
    var sideTopBtn = $('.header-menu-btn');
    var sideBotBtn = $('.footer-menu-btn');
    
    var sideTop = $('.side-menu-top');
    var sideBot = $('.side-menu-bot');
    
    sideTopBtn.click(function() {
        sideTop.toggleClass('visible');
    })
    sideBotBtn.click(function() {
        sideBot.toggleClass('visible');
    })
    
    
//    var body = $('body');
//    
//    $('body:not(.header-menu-btn, .side-menu-top)').click(function() {
//        sideTop.removeClass('visible');
//    })
    
});