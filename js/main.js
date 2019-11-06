let block = $('.block');

for (i = 0; i < block.length; i++) {
	block[i].onclick = function () {
		block[i].classList.remove('active')
		this.classList.add('active')
	}
}