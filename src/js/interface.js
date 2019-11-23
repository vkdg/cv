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
	getTimeOfSeconds(ms) {
		if(isNaN(ms)) { return { days: '0', hours: '0', minutes: '0', seconds: '0' }; }
		let days, hours, minutes, seconds;
		days = ms / (1000 * 60 * 60 * 24);
		if(days < 0) { days = 0; }
		hours = (days - ~~days) * 24;
		if(hours < 0) { hours = 0; }
		minutes = (hours - ~~hours) * 60;
		if(minutes < 0) { minutes = 0; }
		seconds = (minutes - ~~minutes) * 60;
		if(seconds < 0) { seconds = 0; }
		return { days: ~~days, hours: ~~hours, minutes: ~~minutes, seconds: ~~seconds }
	}
	test_countdown(date, timezone) {
		let now = new Date().toLocaleString("ru-RU", {timeZone: "Asia/Yekaterinburg"}).split(','),
			finish = new Date(...date).toLocaleString("ru-RU", {timeZone: timezone}).split(','),
			thisDate = now[0].split('.'),
			thisTime = now[1].trim().split(':'),
			finishDate = finish[0].split('.'),
			finishTime = finish[1].trim().split(':'),
			delta;

		now = new Date(+thisDate[2], +thisDate[1]-1, +thisDate[0], +thisTime[0], +thisTime[1], +thisTime[2]);
		finish = new Date(+finishDate[2], +finishDate[1]-1, +finishDate[0], +finishTime[0], +finishTime[1], +finishTime[2]);
		delta = this.getTimeOfSeconds(finish - now);
		console.log("Remaining %s days, %s hours, %s minutes", delta.days, delta.hours, delta.minutes);
	}	
	init() {
		this.corners();
		this.gridInit();
		this.setSeasonLogo();
	}
}