/*
[MAIN.js]

[0] Google map init
[1] Declaration of functions
    1   Counters
    1.1 Accordion
    1.2 Tabs
    1.3 Progress bars
    1.4 Isotope grid
    1.5 Map toggle
    1.6 Gallery
    1.7 Parallax
    1.8 Image modal
    1.9 Video modal
    2   Sizes for flip cards
    2.1 Swiper
    2.2 Ajax Contact Form
    2.3 Form Focus

[2] Declaration of variables
[3] Hero header general
    1   Constructor
    1.1 Background gradient
    1.2 Arrow down link
    1.3 Hero header waves background
    1.4 Hero header 3d-lines background
    1.5 Hero header snow-particles
    1.6 Hero header gravity-particles
    1.7 Hero header color-particles
    1.8 Hero header default-particles
    1.9 Hero header circle-particles
    2   Hero header connect-particles
    2.1 Hero header moving-particles
    2.2 Hero header confetti-particles
    2.3 Hero header youtube background
    2.4 Hero header swiper default
    2.5 Hero header swiper vertical
    2.6 Hero header swiper cube
    2.7 Hero header swiper fade
    2.8 Hero header swiper coverflow
    2.9 Hero header swiper flip
    3   Hero header swiper parallax
    3.1 Hero header init

[4] Navbar general
    1   Constructor
    1.1 Mobile test
    1.2 Mobile menu
    1.3 Sub menus
    1.4 Navbar search
    1.5 Navbar type

[5] Declaration of constants for main classes
[6] Init main classes
[7] Images Loaded
[8] Sizes flip cards init
[9] Sizes flip cards reinit
[10] Tabs init
[11] Accordions init
[12] Counters init
[13] Progress bars iInit
[14] Color scheme
[15] Map toggle init
[16] Parallax init
[17] Gallery init
[18] Image modal init
[19] Video modal init
[20] Swiper init
[21] 3d-hover for elements init
[22] Ajax contact form init
[23] Form focus init
*/

/* [0] Google map init */
function initMap() {
    let lat_lng = {
        lat: 40.746912,
        lng: -73.984404
    };
    let map = new google.maps.Map(document.getElementById('map'), {
        center: lat_lng,
        zoom: 14,
    });
    let marker = new google.maps.Marker({
        position: lat_lng,
        map: map,
        title: 'Hello!'
    });
}

(function () {
    'use strict';

    $(document).ready(function ($) {
        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || window.oRequestAnimationFrame
                || window.msRequestAnimationFrame
                || function (callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
        })();

        let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

        /* [1] Declaration of functions */

        /* (1) Counters */
        function counters_init(element, count) {
            $(element).waypoint(function () {
                if (!$(element).hasClass("finished_counters")) {
                    let propertiesObj = {};
                    let param = {
                        targets: propertiesObj,
                        easing: 'easeInQuad',
                        round: 1,
                        duration: function (el, i, l) {
                            return 4000 + (i * 300);
                        },
                        update: function () {
                            let el = $(element).find(".prop-obj");
                            let i = 0;
                            for (const prop in propertiesObj) {
                                el[i].innerHTML = JSON.stringify(propertiesObj[prop]);
                                i++;
                            }
                        }
                    }
                    for (let i = 1; i < count + 1; i++) {
                        propertiesObj['prop' + i] = 0;
                        param['prop' + i] = $(element).find(".prop-obj" + i).data("count");
                    }
                    anime(param);
                    $(element).addClass("finished_counters");
                }
            }, {
                offset: '100%'
            });
        }

        /* (1.1) Accordion */
        function accordion_init(element, speed) {
            let accordion = $(element).find('.accordion');
            let accordion_header = accordion.find('.accordion-header');
            let accordion_body = accordion.find('.accordion-body');
            $(element).find('.active-accordion').find('.accordion-body').slideDown(speed);
            accordion_header.on('click', function () {
                let body = $(this).parent().find('.accordion-body');
                let parent = $(this).parent();
                if (!parent.hasClass('active-accordion')) {
                    accordion.removeClass('active-accordion');
                    accordion_body.slideUp(speed);
                }
                parent.toggleClass('active-accordion');
                body.slideToggle(speed);
            });
        }

        /* (1.2) Tabs */
        function tabs_init(element) {
            let tab_header = $(element).find('.tabs-header');
            let tab_trigger = tab_header.find('.tab-trigger');
            let tab_body_wrapper = $(element).find('.tabs-body-wrapper');
            let tab_body = tab_body_wrapper.find('.tab-body');
            tab_trigger.on('click', function () {
                let tab_body_data = $(this).data('tab');
                tab_body.removeClass('active-body');
                tab_trigger.removeClass('active');
                $(tab_body_data).addClass('active-body');
                $(this).addClass('active');
            });
        }

        /* (1.3) Progress bars */
        function progress_bars_init(element, progress) {
            let bar = new ProgressBar.Line(element, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: color_scheme_color,
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: {width: '100%', height: '3px'},
                text: {
                    style: {},
                    autoStyleContainer: false
                },
                from: {color: '#FFEA82'},
                to: {color: '#ED6A5A'},
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + ' %');
                }
            });
            bar.animate(progress);
        }

        /* (1.4) Isotope grid */
        function isotope_grid_init(handler, button_group) {
            let grid = handler.isotope({
                transitionDuration: '0.7s',
                stagger: 50
            });
            let buttons = $(button_group).find('button');
            button_group.on('click', 'button', function () {
                $(buttons).removeClass('active-button');
                $(this).addClass('active-button');
                let filter_value = $(this).attr('data-filter');
                grid.isotope({
                    filter: filter_value
                });
            });
        }

        /* (1.5) Map toggle */
        function map_toggle_init(map, btn, speed) {
            map.slideUp('fast');
            btn.on('click', function () {
                map.slideToggle(speed);
                btn.find('.hide').toggleClass('active');
                btn.find('.show').toggleClass('active');
            });
        }

        /* (1.6) Gallery */
        function gallery_init(gallery) {
            gallery.magnificPopup({
                delegate: '.image-item',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                removalDelay: 300,
                mainClass: 'mfp-fade',
                fixedContentPos: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title');
                    }
                },
            });
        }

        /* (1.7) Parallax */
        function parallax_init(container) {
            for (let i = 0; i < container.length; i++) {
                let data = $(container[i]).data('src');
                let speed = $(container[i]).data('speed');
                $(container[i]).parallax({
                    imageSrc: data,
                    speed: speed
                });
            }
        }

        /* (1.8) Image modal */
        function image_modal_init(modal) {
            modal.magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-fade',
                image: {
                    verticalFit: true
                },
            });
        }

        /* (1.9) Video modal */
        function video_modal_init(modal) {
            modal.magnificPopup({
                type: 'inline',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                modal: true,
                closeBtnInside: true,
            });
            $('.modal-video-box').on('click', function (e) {
                $.magnificPopup.close();
            });
        }

        /* (2) Sizes for flip cards */
        function sizes_flip_cards(section) {
            let flip_container = section.find('.flip-container');
            let flip_card_img = flip_container.find('img');
            let flip_front = flip_container.find('.front');
            let flip_back = flip_container.find('.back');
            for (let i = 0; i < flip_container.length; i++) {
                let height_img = $(flip_card_img[i]).innerHeight();
                $(flip_container[i]).css('height', height_img);
                $(flip_front[i]).css('height', height_img);
                $(flip_back[i]).css('height', height_img);
            }
        }

        /* (2.1) Swiper */
        function swiper_init() {
            // Swiper team
            let swiper_team = new Swiper('.swiper-team', {
                loop: true,
                speed: 500,
                spaceBetween: 8,
                slidesPerView: 3,
                pagination: {
                    el: '.swiper-pagination-bullets-common',
                    type: 'bullets',
                    clickable: true,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true
                },
                breakpoints: {
                    767: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    0: {
                        spaceBetween: 0
                    }
                }
            });

            // Swiper testimonials
            let swiper_testimonials = new Swiper('.swiper-testimonials', {
                speed: 600,
                loop: true,
                effect: 'flip',
                flipEffect: {
                    rotate: 30,
                    slideShadows: false,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true
                },
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination-bullets-default',
                    type: 'bullets',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next-testimonials',
                    prevEl: '.swiper-button-prev-testimonials',
                }
            });

            // Swiper portfolio
            let swiper_portfolio = new Swiper('.swiper-portfolio', {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next-portfolio',
                    prevEl: '.swiper-button-prev-portfolio',
                }
            });

            // Swiper clients
            let swiper_clients = new Swiper('.swiper-clients', {
                slidesPerView: 4,
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    }
                }
            });

            // Swiper default
            let swiper_default = new Swiper('.swiper-default', {
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: '.swiper-button-next-portfolio',
                    prevEl: '.swiper-button-prev-portfolio',
                },
                pagination: {
                    el: '.swiper-pagination-bullets-common',
                    type: 'bullets',
                    clickable: true,
                },
            });

            // Swiper post
            let swiper_post = new Swiper('.swiper-post', {
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                pagination: {
                    el: '.swiper-pagination-bullets-default',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }

        /* (2.2) Ajax Contact Form */
        function ajax_contact_init() {
            $(form).submit(function (e) {
                e.preventDefault();
                let form_data = $(this).serialize();
                $.ajax({
                    type: "POST",
                    url: "mailer.php",
                    data: form_data,
                    success: function () {
                        alert("Your message send");
                    }
                });
            });
        }

        /* (2.3) Form Focus */
        function form_focus() {
            let form_div = $('.form-div');
            form_div.on('click', function () {
                form_div.removeClass('form-div-focus');
                $(this).addClass('form-div-focus');
            });
        }

        /* [2] Declaration of variables */
        // Common constants
        const COMMON = {
            win: window,
            doc: document,
            body: $('body')
        };

        // Viewport sizes
        const VIEWPORT = {
            w: COMMON.win.innerWidth,
            h: COMMON.win.innerHeight
        };

        // ROOT
        let root = COMMON.doc.querySelector(':root');

        // Page width
        let page_width = VIEWPORT.w;

        // Hero header
        let hero_header = $('.hero-header');

        // Main wrapper
        let wrapper = $('#main-wrapper');

        // Page loader
        let loader = $('.loader');

        // Mobile breakpoint
        let mobile_point = 992;

        // Start for mobile version template
        let mobile_start = 991;

        // Color scheme
        let color_scheme_color = '#ee3158';

        // Logo light
        let logo_light = $('.logo-light');

        // Logo dark
        let logo_dark = $('.logo-dark');

        // Navbar type
        let navbar_type = 'navbar-fill';

        // Logo position
        let logo_position = 'logo-right';

        // Counters wrapper
        let counters_wrapper = $('.counters-wrapper');

        // Tabs wrapper
        let tabs_wrapper = $('.tabs-wrapper');

        // Accordions wrapper
        let accordions_wrapper = $('.accordion-wrapper');

        // Flip cards section
        let flip_section = $('.flip-section');

        // Parallax background
        let parallax_background = $('.parallax-window');

        // Image modal
        let image_modal = $('.image-popup');

        // Video modal
        let video_modal = $('.video-popup');

        // Google map wrapper
        let map = $('#map');

        // Google map toggle
        let map_toggle = $('.toggle-map');

        // Progress bar
        let progress_bar = '.progress-bar-line';

        // Progress bar test variable
        let progress_check = true;

        // Progress bars count
        let progress_bar_count = $(progress_bar).length;

        // Contact form
        let form = $('#ajax-contact');

        // Wrapper for 3d-hover elements
        let hover3d = $('.hover3d-wrapper');

        // Isotope grid
        let isotope_grid = $('.grid');

        // Gallery
        let gallery = $('.popup-gallery');

        // Isotope button group
        let button_group = $('.button-group-default');

        // Hero header type
        let hero_type = hero_header.data('section-type');

        // Background gradient
        let bg_gradient = $('.gradient-background');

        // Viewport sizes reinit
        $(COMMON.win).resize(function () {
            VIEWPORT.w = COMMON.win.innerWidth;
            VIEWPORT.h = COMMON.win.innerHeight;
            if ((page_width >= mobile_point && VIEWPORT.w <= mobile_start) || (page_width <= mobile_start && VIEWPORT.w >= mobile_point)) {
                location.reload();
            }
        });

        /* [3] Hero header general */
        class HERO {
            /* (1) Constructor */
            constructor() {
                this.canvas = COMMON.doc.getElementById('canvas-hero');
                this.canvas_header = $('#canvas-parent');
                this.canvas_width = COMMON.win.innerWidth;
                this.canvas_height = this.canvas_header.height();
                this.particles_wrapper = 'canvas-parent';
                this.angle_down = $('.angle-down');
                this.hero_header = $('.hero-header');
                this.youtube_wrapper = this.hero_header.find('.hero-video');
                this.wrapper_slider = '.swiper-hero';
            }

             _arrow_down() {
                $(this.angle_down).on("click", () => {
                    let top = this.hero_header.height();
                    $('body,html').animate({scrollTop: top}, 1500);
                });
            }

            /* (1.8) Hero header default-particles */
            _particles_default_header() {
                const json = {
                    "particles": {
                        "number": {
                            "value": 190,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": ['#00bcd4', '#00bcd4', '#00bcd4']
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 2
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 1,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 5,
                                "opacity_min": 0.5,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3.5,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 10,
                                "size_min": 0.2,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 110.48,
                            "color": "#00bcd4",
                            "opacity": 0.3,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 3,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "bounce",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 150,
                                "duration": 0.1
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }
                particlesJS(this.particles_wrapper, json);
            }

            /* (2.5) Hero header swiper vertical */
            _swiper_vertical_header() {
                let swiper = new Swiper(this.wrapper_slider, {
                    direction: 'vertical',
                    loop: true,
                    speed: 600,
                    pagination: {
                        el: '.swiper-pagination-bullets-vertical',
                        type: 'bullets',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next-vertical',
                        prevEl: '.swiper-button-prev-vertical',
                    }
                });
            }

            /* (3.1) Hero header init */
            INIT(hero_type) {
                switch (hero_type) {
                    case 'canvas_default_particles' :
                        this._particles_default_header();
                        break;
                    case 'slider_vertical' :
                        this._swiper_vertical_header();
                        break;
                }
                this._arrow_down();
            }
        }

        /* [4] Navbar general */
        class NAV {
            /* (1) Constructor */
            constructor() {
                this.root = COMMON.doc.querySelector(':root');
                this.navbar = $('.navbar');
                this.navbar_toggle = this.navbar.find('.hamburger');
                this.menu = this.navbar.find('.navbar-menu');
                this.menu_list = this.menu.find('.navbar-menu-list');
                this.navbar_search = $('.navbar-search');
                this.navbar_search_form = $('.search-form');
                this.navbar_search_button = $('.search-input');
                this.social_side = $('.navbar-additional');
                /* OPTIONAL(DEMO ONLY) START */
                this.toolbar = $('.toolbar');
                this.toolbar_toggle = $('.toolbar-toggle');
                this.navbar_type = $('.header-type');
                this.hamburger_type = $('.hamburger__type');
                this.logo_position = $('.logo-position');
                this.color_theme_option = $('.color_scheme');
                this.jscolorbutton = $('.jscolor');
                /* OPTIONAL(DEMO ONLY) END */
            }

            /* (1.1) Mobile test */
            _mobile_check() {
                if (VIEWPORT.w < mobile_point) {
                    this.navbar.addClass('mobile-menu');
                    this.navbar.removeClass('desktop-menu');
                } else if (VIEWPORT.w >= mobile_point) {
                    this.navbar.removeClass('mobile-menu');
                    this.navbar.addClass('desktop-menu');
                }
            }

            /* (1.2) Mobile menu */
            _mobile_menu() {
                let primary_items = this.menu.find('.menu-primary-item');
                let mobile_items = this.menu.find('.mobile-menu-toggle');
                let item_count = primary_items.length;
                this._mobile_check();
                $(COMMON.win).resize(() => {
                    this._mobile_check();
                });
                this.navbar_toggle.on('click', () => {
                    this.menu.slideToggle(250);
                    let sub_menus = this.menu.find('.sub-menu');
                    let megamenu = this.menu.find('.megamenu');
                    this.navbar_toggle.toggleClass('is-active');
                    if (!this.navbar_toggle.hasClass('is-active')) {
                        sub_menus.slideUp('fast');
                        megamenu.slideUp('fast');
                        sub_menus.removeClass('active-sub-menu-toggle');
                        megamenu.removeClass('active-sub-menu-toggle');
                        mobile_items.removeClass('active-mobile-menu-toggle');
                    } else {
                        let item_height = $('.menu-primary-item').height();
                        let menu_height = item_height * item_count + item_count;
                        this.menu.css({
                            'max-height': menu_height
                        });
                    }
                    /* OPTIONAL(DEMO ONLY) START */
                    this.toolbar.removeClass('active_toolbar');
                    this.toolbar_toggle.removeClass('active_toolbar_toggle');
                    /* OPTIONAL(DEMO ONLY) END */
                });
            }

            /* (1.3) Sub menus */
            _sub_menus() {
                let items_has_children = this.menu.find('.menu-item-has-children');
                let mobile_items = this.menu.find('.mobile-menu-toggle');
                if ($(COMMON.win).innerWidth() > 992) {
                    items_has_children.hover(function () {
                        let sub_menus = $(this).find('.sub-menu');
                        $(sub_menus[0]).toggleClass('active-sub-menu');
                    }, function () {
                        let sub_menus = $(this).find('.sub-menu');
                        $(sub_menus[0]).toggleClass('active-sub-menu');
                    });
                } else {
                    mobile_items.on('click', function () {
                        let sub_menus = $(this).parent().find('.sub-menu');
                        let mega_menus = $(this).parent().find('.megamenu');
                        let inside_items = $(this).parent().parent().find('.mobile-menu-toggle');
                        if (!$(this).hasClass('active-mobile-menu-toggle')) {
                            let active_sub_menus = $(this).parent().parent().find('.active-sub-menu-toggle');
                            $(inside_items).removeClass('active-mobile-menu-toggle');
                            $(active_sub_menus).slideUp('fast');
                            $(this).addClass('active-mobile-menu-toggle');
                            $(sub_menus[0]).slideDown('fast');
                            $(sub_menus[0]).addClass('active-sub-menu-toggle');
                            $(mega_menus[0]).slideDown('fast');
                            $(mega_menus[0]).addClass('active-sub-menu-toggle');
                        } else {
                            $(this).parent().find('.sub-menu').slideUp('fast');
                            $(this).parent().find('.megamenu').slideUp('fast');
                            $(this).removeClass('active-mobile-menu-toggle');
                            $(sub_menus).removeClass('active-sub-menu-toggle');
                            $(mega_menus).removeClass('active-sub-menu-toggle');
                        }
                    });
                }
            }

            /* (1.4) Navbar search */
            _navbar_search() {
                let input = this.navbar_search_form.find('input');
                let icon_on = this.navbar_search_button.find('.search-icon');
                let icon_off = this.navbar_search_button.find('.search-times');
                let social_width;
                let width;
                if (this.social_side.length) {
                    social_width = this.social_side.outerWidth(true);
                }

                this.navbar_search_button.on('click', () => {

                    /* OPTIONAL(DEMO ONLY) START */
                    this.social_side.css({
                        'transition': 'all .3s ease-in-out'
                    });
                    this.navbar_search.css({
                        'transition': 'all .3s ease-in-out'
                    });
                    /* OPTIONAL(DEMO ONLY) END */

                    input.toggleClass('active-form');
                    icon_on.toggleClass('icon-off');
                    icon_off.toggleClass('times-active');
                    this.navbar.toggleClass('navbar-additional-disable');
                    width = social_width || 180;
                    if (input.hasClass('active-form')) {
                        if (logo_position === 'logo-left') {
                            input.css({
                                'width': width + 'px',
                                'margin-right': '-' + width + 'px'
                            });
                            this.navbar_search.css({
                                'transform': 'translateX(-' + width + 'px)'
                            });
                            if (!this.social_side.length) {
                                this.menu_list.css({
                                    'margin-right': '200px'
                                });
                            }
                        } else if (logo_position === 'logo-right') {
                            input.css({
                                'width': width + 'px',
                                'margin-left': '-' + (width + 50) + 'px'
                            });
                            this.navbar_search.css({
                                'transform': 'translateX(' + width + 'px)'
                            });
                            if (!this.social_side.length) {
                                this.menu_list.css({
                                    'margin-left': '200px'
                                });
                            }
                        }
                    } else if (!input.hasClass('active-form')) {
                        if (logo_position === 'logo-left') {
                            input.css({
                                'width': '0',
                                'margin-right': '0'
                            });
                            this.navbar_search.css({
                                'transform': 'translateX(0px)'
                            });
                            if (!this.social_side.length) {
                                this.menu_list.css({
                                    'margin-right': '20px'
                                });
                            }
                        } else if (logo_position === 'logo-right') {
                            input.css({
                                'width': '0',
                                'margin-left': '0'
                            });
                            this.navbar_search.css({
                                'transform': 'translateX(0px)'
                            });
                            if (!this.social_side.length) {
                                this.menu_list.css({
                                    'margin-left': '20px'
                                });
                            }
                        }
                    }
                });
            }

            /* (1.5) Navbar type */
            _navbar_type() {
                if (VIEWPORT.w >= mobile_point) {
                    if ($(COMMON.win).scrollTop() >= 100) {
                        this.navbar.addClass(navbar_type);
                        logo_light.css({
                            'display': 'none'
                        });
                        logo_dark.css({
                            'display': 'block'
                        });
                    } else if ($(COMMON.win).scrollTop() < 100) {
                        this.navbar.removeClass(navbar_type);
                        logo_light.css({
                            'display': 'block'
                        });
                        logo_dark.css({
                            'display': 'none'
                        });
                    }
                }
            }
            /* Navbar init */
            INIT() {
                this.navbar.addClass(logo_position);
                this._navbar_type();
                $(COMMON.win).scroll(() => {
                    this._navbar_type();
                });
                this._mobile_check();
                this._mobile_menu();
                this._sub_menus();
                this._navbar_search();
            }
        }

        /* [5] Declaration of constants for main classes */
        const HERO_HEADER = new HERO();
        const NAVIGATION = new NAV();

        /* [6] Init main classes */
        HERO_HEADER.INIT(hero_type);
        NAVIGATION.INIT();

        /* [7] Images Loaded */
        $(COMMON.body).imagesLoaded({background: '.bg_img'}, function () {
            isotope_grid_init(isotope_grid, button_group);
            loader.addClass('off_loader');
            wrapper.addClass('on_wrapper');
            AOS.init();
            /* [8] Sizes flip cards init */
            sizes_flip_cards(flip_section);

            /* [9] Sizes flip cards reinit */
            $(COMMON.win).resize(function () {
                sizes_flip_cards(flip_section);
            });
        });

        /* [10] Tabs init */
        if (tabs_wrapper.length) {
            for (let i = 0; i < tabs_wrapper.length; i++) {
                tabs_init(tabs_wrapper[i]);
            }
        }

        /* [11] Accordions init */
        if (accordions_wrapper.length) {
            for (let i = 0; i < accordions_wrapper.length; i++) {
                accordion_init(accordions_wrapper[i], 'fast');
            }
        }

        /* [12] Counters init */
        if (counters_wrapper.length) {
            for (let i = 0; i < counters_wrapper.length; i++) {
                let count = $(counters_wrapper[i]).find('.counter-box').length;
                counters_init(counters_wrapper[i], count);
            }
        }

        /* [13] Progress bars init */
        $(progress_bar).waypoint(() => {
            if (progress_check) {
                progress_check = false;
                if (progress_bar_count > 0) {
                    for (let i = 1; i < progress_bar_count + 1; i++) {
                        let progress = $(progress_bar + i).data('progress');
                        progress_bars_init(progress_bar + i, progress);
                    }
                }
            }
        }, {offset: '100%'});

        /* [14] Color scheme */
        root.style.setProperty('--primary-color', color_scheme_color);

        /* [15] Map toggle init */
        map_toggle_init(map, map_toggle, 400);

        /* [16] Parallax init */
        parallax_init(parallax_background);

        /* [17] Gallery init */
        gallery_init(gallery);

        /* [18] Image modal init */
        image_modal_init(image_modal);

        /* [19] Video modal init */
        video_modal_init(video_modal);

        /* [20] Swiper init */
        swiper_init();

        /* [21] 3d-hover for elements init */
        if ((VIEWPORT.w >= mobile_point) && (!isFirefox)) {
            if (hover3d.length) {
                $(hover3d).hover3d({
                    selector: ".hover3d-child"
                });
            }
        }

        /* [22] Ajax contact form init */
        ajax_contact_init();

        /* [23] Form focus init */
        form_focus();

        //DEMO
        $(".anchor-link").on("click", function (event) {
            event.preventDefault();

            let id = $(this).attr('href'),

                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });

    });

})();
