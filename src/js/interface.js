export class Interface {
	constructor() {}
	gridHeightCalculator(elementsCount) {
		let containerWidth = document.getElementsByClassName('container')[1].offsetWidth;
		return (containerWidth / elementsCount).toFixed(0);
	}
	gridInit() {
		let containerWidth = document.getElementsByClassName('container')[1].offsetWidth;

		if(containerWidth > 425) {
			let gridBlockHeight = this.gridHeightCalculator(6);
			$('.timeline__year__content').css('grid-template-rows', 'repeat(6, '+gridBlockHeight+'px)');
		} else {
			let gridBlockHeight = this.gridHeightCalculator(1);
			$('.timeline__year__content').css('grid-template-rows', 'repeat(5, '+gridBlockHeight+'px)');
		}
	}
	corners() {
		$('a[href^="#"]').bind('click', function(){
			var el = $(this).attr('href');
			$('html').animate({ scrollTop: $(el).offset().top-110}, 500);
			return false;
		});
	}
	// gcd(a, b) {
	// 	return (b == 0) ? a : this.gcd(b, a%b);
	// }
	// test() {
	// 	let w = screen.width,
	// 		h = screen.height,
	// 		r = this.gcd(w, h),
	// 		a = w / r + ":" + h / r;

	// 	console.log('Screen Width:', w);
	// 	console.log('Screen Height:', h);
	// 	console.log('Screen GCD:', r);
	// 	console.log('Screen Aspect Ratio:', a);
	// }
	init() {
		// this.test();
		this.corners();
		this.gridInit();
	}
}