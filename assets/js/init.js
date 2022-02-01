var lazyLoadInstance = new LazyLoad({ });

new WOW().init();


$(document).ready(function () {

	/* MOBILE MNEU OPEN */
	$('.burger').click(function () {
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
	});
	
	$('.mobile-link').click(function () {
		$('.burder').removeClass('active');
		$('.mobile-menu').removeClass('active');
	});

	/* MAIN MENU */
	$('.menu a').click(function () {
		$('.menu a').removeClass('active');
		$(this).toggleClass('active');
	});

   
  $(".slider-one").owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 1300,
		dots: false,
		items: 1
    });

    $(".slider-two").owlCarousel({
        margin: 10,
        nav: false,
		dots: true,
        autoplay: false,
        smartSpeed: 1300,
        autoplayTimeout: 4000,
        responsive:{ 
            0:{
                items:2
            },
            768:{
                items:2
            },
            1000:{
                items:3
            },
			1200:{
                items:4
            }
        }
    });
	
	lightGallery(document.getElementById('details-gallery'), {
		thumbnail: false,
	});
	/*
	$(".scroll-up").click(function() {
		$('html, body').animate({
			scrollTop: 0
			}, 800);
		return false;
	});
	*/
	
	$(".anchor-link").click(function(e){
		var data_scroll = $($(this).data("scroll"));
			$("html, body").animate({scrollTop: data_scroll.offset().top},"slow","swing",function(){});
		return false;
	});

	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, 100);
		return false;
	});
	
	/* MODALS */	
	$(".open-window-modal").click(function(e) {
		var item_id = $(this).data("item-id");
		$(".modal[data-item-id="+item_id+"]").toggleClass('visible').fadeIn();
	});
	
	/* ignorowanie zdarzenia HREF po kliknięciu */
	$(".ignore-click").click(function(){
        return false;
    })
	
	/* zamykanie modala po kliknięciu - CLOSE */
	$(".btn-close").click(function(e) {
		$(".modal").removeClass('visible').fadeOut();
		console.log('close');
		e.preventDefault();
	});
	
	/* zamykanie modala po kliknięciu w dowolnym miejscu */
	var $window_body = $(".modal");
	$("html").on("click.Bst", function(event){
		if ($window_body.has(event.target).length == 0 && !$window_body.is(event.target)) {
			$(".modal").removeClass("visible");
		}
	});
	
	
});