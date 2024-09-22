(function(jQuery) {
    "use strict";

   
     if (sessionStorage.getItem('dontLoad') == null){
              jQuery('#myModal').modal('show');
            sessionStorage.setItem('dontLoad', 'true');
          }
    
    
   
/*counter*/
jQuery('.count').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: jQuery(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            jQuery(this).text(Math.ceil(now));
        }
    });
});
/*counter*/

  jQuery('.menu-item-has-children a').click(function(){
    jQuery('.pxp-nav-sub').toggleClass(' active ');
    jQuery('.pxp-nav-sub').siblings().removeClass(' active '); 
    
  });



    function toggleSticky() {
        if (jQuery('.pxp-sp-agent-section').length > 0) {
            var windowWidth = jQuery(window).width();
            var footerHeight = jQuery('.pxp-footer').height() + 360;
            var topSpacing = 182;

            if (windowWidth > 991) {
                jQuery('.pxp-sp-agent-section').sticky({
                    topSpacing: topSpacing, 
                    bottomSpacing: footerHeight
                });
            } else {
                jQuery('.pxp-sp-agent-section').unstick();
            }
        }
    }

    function checkNav() {
        var windowWidth = jQuery(window).width();

        if (windowWidth > 991) {
            if (jQuery('.pxp-header-nav-trigger').hasClass('pxp-active')) {
                jQuery('.pxp-header-nav-trigger').removeClass('pxp-active');
                jQuery('.pxp-logo').removeClass('pxp-logo-nav');
                jQuery('.pxp-header').removeClass('pxp-mobile');
            }

            jQuery('.pxp-nav').show();
            jQuery('.pxp-nav .pxp-nav-sub').hide();
        } else {
            if (!jQuery('.pxp-header-nav-trigger').hasClass('pxp-active')) {
                jQuery('.pxp-nav').hide();
            }

            jQuery('.pxp-nav .pxp-nav-sub').show();
        }
    }

    // function windowResizeHandler() {
    //     toggleSticky();
    //     checkNav();
    // }

    // windowResizeHandler();

    // jQuery(window).resize(function() {
    //     windowResizeHandler();
    // });

    function onContentScroll() {
        if (window.pageYOffset > 93) {
            jQuery('.pxp-header').addClass('pxp-is-sticky');
        } else {
            jQuery('.pxp-header').removeClass('pxp-is-sticky');
        }
    }

    window.onscroll = function() {
        onContentScroll();
    };

    var animateHTML = function() {
        var elems;
        var windowHeight;

        function init() {
            elems = document.querySelectorAll('.pxp-animate-in');
            windowHeight = window.innerHeight;
            addEventHandlers();
            checkPosition();
        }

        function addEventHandlers() {
            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', init);
        }

        function checkPosition() {
            for (var i = 0; i < elems.length; i++) {
                var positionFromTop = elems[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                    elems[i].classList.add('pxp-in');
                }
            }
        }

        return {
            init: init
        };
    };

    if (jQuery('.pxp-hero-has-animation').length > 0) {
        setTimeout(function() {
            jQuery('.pxp-hero-has-animation').addClass('pxp-hero-animate');
        }, 100);
    }

    animateHTML().init();

    if (jQuery('.pxp-props-carousel-right-stage').length > 0) {
        jQuery('.pxp-props-carousel-right-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                    'stagePadding': 30
                },
                900: {
                    'items': 3,
                    'stagePadding': 60
                },
                1200: {
                    'items': 3,
                    'stagePadding': 120
                },
                1600: {
                    'items': 4,
                    'stagePadding': 120
                }
            },
            'navText': [`<div class="pxp-props-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828" class="pxp-arrow-1">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-props-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    if (jQuery('.pxp-props-carousel-right-stage-1').length > 0) {
        jQuery('.pxp-props-carousel-right-stage-1').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                },
                900: {
                    'items': 2,
                    'stagePadding': 30
                },
                1200: {
                    'items': 3,
                    'stagePadding': 30
                },
                1600: {
                    'items': 3,
                    'stagePadding': 120
                }
            },
            'navText': [`<div class="pxp-props-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-props-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    if (jQuery('.pxp-services-c-stage').length > 0) {
        jQuery('.pxp-services-c-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                },
                900: {
                    'items': 2,
                },
                1200: {
                    'items': 3,
                },
            },
            'navText': [`<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`,
                        `<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    if (jQuery('.pxp-testim-1-stage').length > 0) {
        jQuery('.pxp-testim-1-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2,
                },
                900: {
                    'items': 2,
                },
                1200: {
                    'items': 3,
                },
            },
            'navText': [`<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`,
                        `<svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                            <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    var heroPropCarouselItems = 1;

    jQuery('.pxp-hero-props-carousel-1 .carousel-item').each(function(index, element) {
        if (index == 0) {
            jQuery('.pxp-hero-props-carousel-1-prices').addClass('pxp-price-active pxp-first-time');
        }

        jQuery('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-counter').append('<span>0' + heroPropCarouselItems + '</span>');

        heroPropCarouselItems += 1;
    });

    jQuery('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-total').append('<span>0' + jQuery('.pxp-hero-props-carousel-1 .carousel-item').length + '</span>');

    jQuery('.pxp-hero-props-carousel-1').on('slide.bs.carousel', function(carousel) {
        jQuery('.pxp-hero-props-carousel-1-prices').removeClass('pxp-first-time');
        jQuery('.pxp-hero-props-carousel-1-prices').carousel(carousel.to);
    });

    jQuery('.pxp-hero-props-carousel-1').on('slid.bs.carousel', function(carousel) {
        var tickerPos = (carousel.to) * 13;

        jQuery('.pxp-hero-props-carousel-1-prices .pxp-carousel-ticker-counter > span').css('transform', 'translateY(-' + tickerPos + 'px)');
    });

    jQuery('.pxp-hero-props-carousel-1 .pxp-carousel-control-next').click(function(e) { 
        jQuery('.pxp-hero-props-carousel-1').carousel('next');
    });
    jQuery('.pxp-hero-props-carousel-1 .pxp-carousel-control-prev').click(function(e) { 
        jQuery('.pxp-hero-props-carousel-1').carousel('prev');
    });

    jQuery('.pxp-hero-props-carousel-2-right').on('slide.bs.carousel', function(carousel) {
        if(carousel.direction == 'left') {
            jQuery('.pxp-hero-props-carousel-2-left').carousel('next');
        } else {
            jQuery('.pxp-hero-props-carousel-2-left').carousel('prev');
        }
    });

    jQuery('.pxp-hero-props-carousel-2 .pxp-carousel-control-next').click(function(e) { 
        jQuery('.pxp-hero-props-carousel-2-right').carousel('next');
    });
    jQuery('.pxp-hero-props-carousel-2 .pxp-carousel-control-prev').click(function(e) { 
        jQuery('.pxp-hero-props-carousel-2-right').carousel('prev');
    });

    var heroPropCarousel2Items = 1;

    jQuery('.pxp-hero-props-carousel-2-right .carousel-item').each(function(index, element) {
        jQuery('.pxp-hero-props-carousel-2 .pxp-carousel-ticker-counter').append('<span>0' + heroPropCarousel2Items + '</span>');

        heroPropCarousel2Items += 1;
    });

    jQuery('.pxp-hero-props-carousel-2 .pxp-carousel-ticker-total').append('<span>0' + jQuery('.pxp-hero-props-carousel-2-right .carousel-item').length + '</span>');

    jQuery('.pxp-hero-props-carousel-2-right').on('slid.bs.carousel', function(carousel) {
        var tickerPos = (carousel.to) * 13;

        jQuery('.pxp-hero-props-carousel-2 .pxp-carousel-ticker-counter > span').css('transform', 'translateY(-' + tickerPos + 'px)');
    });

    jQuery('.pxp-sp-more').click(function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        jQuery(this).prev('p').find('.pxp-dots').toggle();
        jQuery(this).prev('p').find('.pxp-dots-more').slideToggle();
        jQuery(this).toggleClass('pxp-sp-less');
    });

    if (jQuery('#pxp-calculator-chart').length > 0) {
        var calculatorChartElem = document.getElementById('pxp-calculator-chart').getContext('2d');
        var calculatorChart = new Chart(calculatorChartElem, {
            type: 'doughnut',
            data: {
                labels: ['Principal and Interest', 'Property Taxes', 'HOA Dues'],
                datasets: [{
                    data: [0, 0, 0],
                    backgroundColor: ['rgba(0, 112, 201, 1)', 'rgba(75, 154, 217, 1)', 'rgba(153, 198, 233, 1)'],
                    borderWidth: [2, 2, 2],
                    hoverBackgroundColor: ['rgba(0, 112, 201, 1)', 'rgba(75, 154, 217, 1)', 'rgba(153, 198, 233, 1)'],
                    hoverBorderWidth: [2, 2, 2],
                    hoverBorderColor: ['rgba(0, 112, 201, 0.10)', 'rgba(75, 154, 217, 0.10)', 'rgba(153, 198, 233, 0.10)']
                }],
            },
            options: {
                responsive: true,
                cutoutPercentage: 90,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false,
                }
            }
        });
    }

    function updateCalculatorInfo() {
        var term           = jQuery('#pxp-calculator-form-term').val();
        var interest       = jQuery('#pxp-calculator-form-interest').val();
        var price          = jQuery('#pxp-calculator-form-price').val();
        var downPrice      = jQuery('#pxp-calculator-form-down-price').val();
        var downPercentage = jQuery('#pxp-calculator-form-down-percentage').val();
        var taxes          = jQuery('#pxp-calculator-form-property-taxes').val();
        var dues           = jQuery('#pxp-calculator-form-hoa-dues').val();

        var termValue = term;
        var interestValue = interest.replace('%', '');
        var priceValue = price.replace(/\D+/g, '');
        var downPriceValue = downPrice;
        var downPercentageValue = downPercentage.replace('%', '');
        var taxesValue = taxes.replace(/\D+/g, '');
        var duesValue = dues.replace(/\D+/g, '');

        var dpa   = parseFloat(downPercentageValue) * parseFloat(priceValue) / 100;
        var ma    = parseFloat(priceValue) - dpa;
        var r     = parseFloat(interestValue) / 12 / 100;
        var n     = parseFloat(termValue) * 12;
        var tmp   = Math.round(ma * (r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1));
        var total = tmp + parseFloat(taxesValue) + parseFloat(duesValue);

        jQuery('#pxp-calculator-data-pi').text('jQuery' + tmp.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        jQuery('#pxp-calculator-data-pt').text(taxes);
        jQuery('#pxp-calculator-data-hd').text(dues);
        jQuery('.pxp-calculator-chart-result-sum').text('jQuery' + total.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));

        calculatorChart.data.datasets[0].data = [tmp, taxesValue, duesValue];
        calculatorChart.update();
    }

    if (jQuery('.pxp-calculator-form').length > 0) {
        updateCalculatorInfo();
    }

    jQuery('.pxp-form-control-transform').focus(function() {
        var self_ = jQuery(this);
        var inputValue = self_.val();
        var dataType = self_.attr('data-type');
        var newInputValue;

        if (dataType == 'currency') {
            newInputValue = inputValue.replace(/\D+/g, '');
        } else if (dataType == 'percent') {
            newInputValue = inputValue.replace('%', '');
        }

        self_.val(newInputValue);
        self_.attr('type', 'number');

        if (dataType == 'percent') {
            self_.attr('min', '0');
            self_.attr('max', '100');
        }
    });

    jQuery('.pxp-form-control-transform').blur(function() {
        var self_ = jQuery(this);
        var inputValue = self_.val();
        var dataType = self_.attr('data-type');
        var newInputValue;

        if (dataType == 'currency') {
            newInputValue = 'jQuery' + inputValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else if (dataType == 'percent') {
            newInputValue = inputValue.replace(/\,/g, '.') + '%';
        }

        self_.attr('type', 'text');

        if (dataType == 'percent') {
            self_.removeAttr('min');
            self_.removeAttr('max');
        }

        self_.val(newInputValue);
    });

    jQuery('#pxp-calculator-form-down-price').on('keyup change', function() {
        var price     = jQuery('#pxp-calculator-form-price').val();
        var downPrice = jQuery(this).val();

        var priceValue = price.replace(/\D+/g, '');
        var downPercentage = (parseFloat(downPrice) * 100 / parseFloat(priceValue)).toFixed(2);
        var newDownPercentage = downPercentage.toString() + '%';

        jQuery('#pxp-calculator-form-down-percentage').val(newDownPercentage);

        updateCalculatorInfo();
    });

    jQuery('#pxp-calculator-form-down-percentage').on('keyup change', function() {
        var price          = jQuery('#pxp-calculator-form-price').val();
        var downPercentage = jQuery(this).val();

        var priceValue = price.replace(/\D+/g, '');
        var downPrice = Math.round(parseFloat(downPercentage) * parseFloat(priceValue) / 100);
        var newDownPrice = 'jQuery' + downPrice.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        jQuery('#pxp-calculator-form-down-price').val(newDownPrice);

        updateCalculatorInfo();
    });

    jQuery('#pxp-calculator-form-price').on('keyup change', function() {
        var price          = jQuery(this).val();
        var downPercentage = jQuery('#pxp-calculator-form-down-percentage').val();

        var priceValue = price.replace(/\D+/g, '');
        var downPrice = Math.round(parseFloat(downPercentage) * parseFloat(priceValue) / 100);
        var newDownPrice = 'jQuery' + downPrice.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        jQuery('#pxp-calculator-form-down-price').val(newDownPrice);

        updateCalculatorInfo();
    });

    jQuery('#pxp-calculator-form-interest').on('keyup change', function() {
        updateCalculatorInfo();
    });

    jQuery('#pxp-calculator-form-term').on('change', function() {
        updateCalculatorInfo();
    });

    jQuery('.pxp-blog-posts-carousel-1 .pxp-carousel-control-next').click(function(e) { 
        jQuery('.pxp-blog-posts-carousel-1-img').carousel('next');
    });
    jQuery('.pxp-blog-posts-carousel-1 .pxp-carousel-control-prev').click(function(e) { 
        jQuery('.pxp-blog-posts-carousel-1-img').carousel('prev');
    });

    jQuery('.pxp-blog-posts-carousel-1-img').on('slide.bs.carousel', function(carousel) {
        if(carousel.direction == 'left') {
            jQuery('.pxp-blog-posts-carousel-1-caption').carousel('next');
        } else {
            jQuery('.pxp-blog-posts-carousel-1-caption').carousel('prev');
        }
    });

    // Animate nav sub menu
    jQuery('.pxp-nav > li').hover(function() {
        var subMenu = jQuery(this).children('ul:first');

        if (subMenu.length > 0 && !jQuery('.pxp-header').hasClass('pxp-mobile')) {
            var subMenuWidth  = subMenu.width();
            var menuItemLeft  = jQuery(this).offset().left;
            var windowWidth   = jQuery(window).width();
            var menuItemRight = windowWidth - menuItemLeft;

            if (menuItemRight < subMenuWidth) {
                subMenu.css({
                    'right': '0',
                    'left': 'auto'
                });
            }

            subMenu.fadeIn({ queue: false, duration: 200 });
            subMenu.animate({ top: "25px" }, 200);
        }
    }, function() {
        var subMenu = jQuery(this).children('ul:first');

        if (subMenu.length > 0  && !jQuery('.pxp-header').hasClass('pxp-mobile')) {
            subMenu.fadeOut({ queue: false, duration: 200 });
            subMenu.animate({ top: "50px" }, 200);
        }
    });

    jQuery('.pxp-header-nav-trigger').click(function() {
        jQuery(this).toggleClass('pxp-active');
        jQuery('.pxp-logo').toggleClass('pxp-logo-nav');
        jQuery('.pxp-header').toggleClass('pxp-mobile');
        jQuery('.pxp-nav').toggle();
    });

    jQuery('.pxp-blog-post-video').click(function() {
        jQuery(this).hide().next('iframe').show();
    });

    // Handle agent rating system
    function clearAgentRating() {
        jQuery('.pxp-single-agent-rating span').removeClass('pxp-selected');
    }
    jQuery('.pxp-single-agent-rating span').click(function() {
        clearAgentRating();
        jQuery(this).addClass('pxp-selected');
    });

    jQuery('.pxp-map-toggle').click(function () {
        jQuery('.pxp-map-side').addClass('pxp-max');
        jQuery('.pxp-content-side').addClass('pxp-min');
        jQuery('.pxp-list-toggle').show();
    });

    jQuery('.pxp-list-toggle').click(function() {
        jQuery('.pxp-map-side').removeClass('pxp-max');
        jQuery('.pxp-content-side').removeClass('pxp-min');
        jQuery('.pxp-list-toggle').hide();
    });

    jQuery('.pxp-adv-toggle').click(function () {
        jQuery(this).toggleClass('pxp-active');
        jQuery('.pxp-content-side-search-form-adv').slideToggle();
    });

    jQuery('.pxp-signin-trigger').click(function() {
        jQuery('#pxp-signup-modal').modal('hide');
        jQuery('#pxp-signin-modal').modal('show');
    });
    jQuery('.pxp-signup-trigger').click(function() {
        jQuery('#pxp-signin-modal').modal('hide');
        jQuery('#pxp-signup-modal').modal('show');
    });
    jQuery('#pxp-signin-modal').on('shown.bs.modal', function () {
        jQuery('body').addClass('modal-open');
    });
    jQuery('#pxp-signup-modal').on('shown.bs.modal', function () {
        jQuery('body').addClass('modal-open');
    });

    jQuery('.pxp-results-card-1 .carousel-control-next').click(function(event) {
        event.preventDefault();
        var target = jQuery(this).attr('data-href');

        jQuery(target).carousel('next');
    });
    jQuery('.pxp-results-card-1 .carousel-control-prev').click(function(event) {
        event.preventDefault()
        var target = jQuery(this).attr('data-href');

        jQuery(target).carousel('prev');
    });

    if (jQuery('.pxp-gallery-carousel-stage').length > 0) {
        jQuery('.pxp-gallery-carousel-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'center': true,
            'loop': true,
            'margin': '100',
            'margin': false,
            'responsive': {
                0: {
                    'items': 1,
                    'stagePadding': 80
                },
                600: {
                    'items': 1,
                    'stagePadding': 120
                },
                900: {
                    'items': 1,
                    'stagePadding': 220
                },
                1200: {
                    'items': 1,
                    'stagePadding': 320
                },
                1600: {
                    'items': 1,
                    'stagePadding': 420
                },
                1800: {
                    'items': 1,
                    'stagePadding': 520
                }
            },
            'navText': [`<div class="pxp-gallery-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828" class="pxp-arrow-1">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-gallery-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    jQuery('.pxp-testim-2-caption-carousel .pxp-carousel-control-next').click(function(e) { 
        jQuery('.pxp-testim-2-caption-carousel').carousel('next');
    });
    jQuery('.pxp-testim-2-caption-carousel .pxp-carousel-control-prev').click(function(e) { 
        jQuery('.pxp-testim-2-caption-carousel').carousel('prev');
    });
    jQuery('.pxp-testim-2-caption-carousel').on('slide.bs.carousel', function(carousel) {
        jQuery('.pxp-testim-2-photos-carousel').carousel(carousel.to);
    });

    // Hero search tabs toggle
    jQuery('.pxp-hero-search-tabs ul li a').click(function() {
        jQuery(this).prev().prop("checked", true);
        jQuery(this).parent().siblings().removeClass('pxp-active');
        jQuery(this).parent().addClass('pxp-active');
    });

    // Areas section carousel
    if (jQuery('.pxp-areas-carousel-stage').length > 0) {
        jQuery('.pxp-areas-carousel-stage').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 30,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2
                },
                900: {
                    'items': 3
                },
                1200: {
                    'items': 3
                },
                1600: {
                    'items': 4
                }
            },
            'navText': [`<div class="pxp-areas-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828" class="pxp-arrow-1">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-areas-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    // Areas section carousel
    if (jQuery('.pxp-areas-carousel-stage1').length > 0) {
        jQuery('.pxp-areas-carousel-stage1').owlCarousel({
            'nav': true,
            'dots': false,
            'margin': 20,
            'autoplay': true,
            'loop':true,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2
                },
                900: {
                    'items': 7
                },
                1200: {
                    'items': 7,
                    'nav': true,
                },
                1600: {
                    'items': 7,
                    'nav': true,
                }
            },
            
            'navText': [`<div class="pxp-areas-carousel-left-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828" class="pxp-arrow-1">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                    <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`,
                        `<div class="pxp-areas-carousel-right-arrow pxp-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                    <line id="Line_2" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_3" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_4" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>`],
            'checkVisible': false,
            'smartSpeed': 600
            
        });
    }
    
    // Services tabs section
    jQuery('.pxp-services-tabs .carousel-indicators li').on('click', function() {
        var slide = jQuery(this).attr('data-slide-to');

        jQuery('.pxp-services-tabs .carousel-indicators li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('#pxp-services-tabs-content-carousel').carousel(parseInt(slide));
    });

    // Toogle properties advanced search form section
    jQuery('.pxp-search-properties-toggle').click(function () {
        jQuery(this).toggleClass('pxp-active');
        jQuery('.pxp-search-properties-toggle-plus').toggle();
        jQuery('.pxp-search-properties-toggle-minus').toggle();
        jQuery('.pxp-search-properties-form-adv').slideToggle();
    });

    // Promo slider
    jQuery('.pxp-promo-slider-caption .pxp-promo-slider-caption-dots li').on('click', function() {
        jQuery('.pxp-promo-slider-caption .pxp-promo-slider-caption-dots li').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery('.pxp-promo-slider-carousel').on('slide.bs.carousel', function(carousel) {
        var currentSlide = jQuery(this).parent().find('.pxp-promo-slider-caption-item.pxp-active');
        var nextSlide = jQuery(this).parent().find('.pxp-promo-slider-caption-item[data-index=' + carousel.to + ']');
        var currentDot = jQuery(this).parent().find('.pxp-promo-slider-caption-dots li.active');
        var nextDot = jQuery(this).parent().find('.pxp-promo-slider-caption-dots li[data-slide-to=' + carousel.to + ']');

        currentSlide.removeClass('pxp-active');
        nextSlide.css({
            'opacity': '0',
            'top': '20px',
            'position': 'relative'
        }).addClass('pxp-active').animate({ 'opacity': '1',  'top': '0' }, 600);

        currentDot.removeClass('active');
        nextDot.addClass('active');
    });
    var span = document.querySelector(".typewriter span");
            var textArr = span.getAttribute("data-text").split(", "); 
            var maxTextIndex = textArr.length; 

            var sPerChar = 0.15; 
            var sBetweenWord = 1.5;
            var textIndex = 0; 

            typing(textIndex, textArr[textIndex]); 

            function typing(textIndex, text) {
                var charIndex = 0; 
                var maxCharIndex = text.length - 1; 

                var typeInterval = setInterval(function () {
                    span.innerHTML += text[charIndex]; 
                    if (charIndex == maxCharIndex) {
                        clearInterval(typeInterval);
                        setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 

                    } else {
                        charIndex += 1; 
                    }
                }, sPerChar * 1000); 
            }

            function deleting(textIndex, text) {
                var minCharIndex = 0; 
                var charIndex = text.length - 1; 

                var typeInterval = setInterval(function () {
                    span.innerHTML = text.substr(0, charIndex); 
                    if (charIndex == minCharIndex) {
                        clearInterval(typeInterval);
                        textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
                        setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
                    } else {
                        charIndex -= 1; 
                    }
                }, sPerChar * 1000); 
            }
})(jQuery);