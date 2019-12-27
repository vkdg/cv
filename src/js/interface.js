export class Interface {
	constructor() {}
	// gridHeightCalculator(elementsCount) {
	// 	let containerWidth = document.getElementsByClassName('container')[1].offsetWidth;
	// 	return (containerWidth / elementsCount).toFixed(0);
	// }
	// gridInit() {
	// 	let containerWidth = document.getElementsByClassName('container')[1].offsetWidth;

	// 	if(containerWidth > 425) {
	// 		let gridBlockHeight = this.gridHeightCalculator(6);
	// 		$('.timeline__year__content').css('grid-template-rows', 'repeat(6, '+gridBlockHeight+'px)');
	// 	} else {
	// 		let gridBlockHeight = this.gridHeightCalculator(1);
	// 		$('.timeline__year__content').css('grid-template-rows', 'repeat(5, '+gridBlockHeight+'px)');
	// 	}
	// } //
	setYearInFooter() {
		const year = new Date().getFullYear();
		document.getElementById('footer__year').append(year);
	}
	corners() {
		$('a[href^="#"]').bind('click', function(){
			var el = $(this).attr('href');
			$('html').animate({ scrollTop: $(el).offset().top-110}, 500);
			return false;
		});
	}
	getSeasonLogo(date) {
		const month = date.getMonth() + 1;
		switch(month) {
			case 1:
			case 2:
			case 3:
				return 'cv/assets/img/logo-v2-black.svg';
			break;
			case 4:
			case 5:
			case 6:
				return 'cv/assets/img/logo-v2-mesh1.svg';
			break;
			case 7:
			case 8:
			case 9:
				return 'cv/assets/img/logo-v2-black.svg';
			break;
			case 10:
			case 11:
			case 12:
				return 'cv/assets/img/logo-v2-mesh2.svg';
			break;
			default: return "cv/assets/img/logo-v2-black.svg";
		}
	}
	setSeasonLogo() {
		const logoUrl = this.getSeasonLogo(new Date());
		const headerLogoElement = document.getElementsByClassName('header__left__logo__img')[0];
		return document.getElementsByClassName('header__left__logo__img')[0].style.backgroundImage = 'url('+logoUrl+')';
	}
	init() {
		this.corners();					// Link animation
		// this.gridInit();				// Mainpage grids
		this.setSeasonLogo();			// Set season logo for header
		this.setYearInFooter(); 		// Set current value for footer copyright
	}
}
