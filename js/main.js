$(document).ready(function() {
    $('.questions-list__item span').click(function () {
    	$('.questions-list__item_text').hide()
    	$(this).addClass('active')
    	var text = $(this).attr('data')
    	$(text).fadeIn()
    	$('.close').click(function () {
				$('.questions-list__item_text').fadeOut()
				$('.questions-list__item span').removeClass('active')
			})
    })
});

