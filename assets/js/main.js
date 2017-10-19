
(function($) {

    $(function() {

        var $window = $(window),
            $mainWindow = $('#main-window');
            $body = $('body'),
            $header = $('#header'),
        	$nav = $('nav');
            $cartStyling = document.getElementById('cart-styling');

        $window.scroll(function() {
            var windowTop = $window.scrollTop();
            var pic3Top = $('#pic3').offset().top;
            if (windowTop > pic3Top) {
                $cartStyling.innerHTML="";
            }
            else {
                $cartStyling.innerHTML=".shopify-buy-frame--toggle {  visibility: hidden; opacity: 0; }";
            }
        });

        // smooth scroll to anchor
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    if ($nav.hasClass('open')) {
                        $nav.removeClass('open');
                    }
                    $('html, body').animate({
                        scrollTop: target.offset().top - $header.height()
                    }, 1000);
                    return false;
                }
            }
        });

        // open and close mobile nav menu
        $('#menu-icon').on('click', function() {
            if ($nav.hasClass('open')) {
                $nav.removeClass('open');
            } else {
                $nav.addClass('open');
            }
            return false;
        });

        $window.trigger('scroll');

    });

})(jQuery);
