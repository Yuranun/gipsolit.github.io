$(document).ready(function () {
	//	Accordion
	$('.accordion>ul').hide().not(':first-of-type');
	$('.accordion>h2').click(function() {
		var article = $(this).next('.accordion>ul');
		var accordion = $(this).closest('.accordion');

		if (article.is(':visible')) {
			article.slideUp('fast');
		}

		else {
			accordion.find('>ul').slideUp('fast');
			article.slideDown('fast');
		}
	});
	//	Pop-Up
	$('.popup__btn').on('click', function(event) {
			event.preventDefault();
			$('.popup').fadeIn();			
	});
	$('.popup__close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut();
	});
	//	Slick-slider
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
























