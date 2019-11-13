$(document).ready(function() {


    $('.questions-list__item span').click(function () {
    	$('.questions-list__item span').removeClass('active')
    	$('.questions-list__item_text').hide()
    	$(this).addClass('active')
    	var text = $(this).attr('data')
    	$(text).fadeIn()
    	$('.close').click(function () {
				$('.questions-list__item_text').fadeOut()
				$('.questions-list__item span').removeClass('active')
			})
    })


    // slider
    $('.warehouse-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 993,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
    	]
    })


});

