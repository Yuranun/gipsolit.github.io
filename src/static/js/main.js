$(document).ready(function () {
	$('.popup__btn').on('click', function(event) {
			event.preventDefault();
			$('.popup').fadeIn();			
	});
	$('.popup__close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});
	$('.features__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		}
		]
	});
});
