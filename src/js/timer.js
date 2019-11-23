export class Timer {
	constructor(finishDate, timezone = false, timerDescription = false, refreshInterval = 60) {
		this.finishDate = finishDate;
		this.timezone = timezone;
		this.timerDescription = timerDescription;
		this.start();
		this.startInterval(refreshInterval);
	}
	getTimeNow() {
		let now, nowDate, nowTime;
		if(this.timezone) {
			now = new Date().toLocaleString("ru-RU", {timeZone: this.timezone}).split(',');
		} else {
			now =  new Date().toLocaleString("ru-RU");
		}
		nowDate = now[0].split('.');
		nowTime = now[1].trim().split(':');
		now = new Date(+nowDate[2], +nowDate[1]-1, +nowDate[0], +nowTime[0], +nowTime[1], +nowTime[2]);
		return now;
	}
	getTimeFinish(date) {
		let finish, finishDate, finishTime;
		if(this.timezone) {
			finish = new Date(...date).toLocaleString("ru-RU", {timeZone: this.timezone}).split(',');
		} else {
			finish = new Date(...date).toLocaleString("ru-RU");
		}
		finishDate = finish[0].split('.');
		finishTime = finish[1].trim().split(':');
		finish = new Date(+finishDate[2], +finishDate[1]-1, +finishDate[0], +finishTime[0], +finishTime[1], +finishTime[2]);
		return finish;
	}
	getTimeOfSeconds(finish, now) {
		let ms = finish - now,
			days, hours, minutes, seconds;
		if(isNaN(ms)) { return { days: '0', hours: '0', minutes: '0', seconds: '0' }; }

		days = ms / (1000 * 60 * 60 * 24);
		hours = (days - ~~days) * 24;
		minutes = (hours - ~~hours) * 60;
		seconds = (minutes - ~~minutes) * 60;

		if(days < 0) { days = 0; }
		if(hours < 0) { hours = 0; }
		if(minutes < 0) { minutes = 0; }
		if(seconds < 0) { seconds = 0; }

		return { days: ~~days, hours: ~~hours, minutes: ~~minutes, seconds: ~~seconds }
	}
	getConsoleResponse(delta) {
		if (!this.timerDescription) { 
			console.log("Time remaining: %s days, %s hours, %s minutes", delta.days, delta.hours, delta.minutes); 
		} else {
			console.log("[%s] Time remaining: %s days, %s hours, %s minutes", this.timerDescription, delta.days, delta.hours, delta.minutes); 
		}
	}
	startInterval(refreshRate) {
		return setInterval(() => this.start(), refreshRate*1000);
	}
	start() {
		let now = this.getTimeNow(),
			finish = this.getTimeFinish(this.finishDate),
			delta = this.getTimeOfSeconds(finish, now);
		
		// console.log('Time remaining: %s days, %s hours, %s minutes, %s seconds', delta.days, delta.hours, delta.minutes, delta.seconds);
		this.getConsoleResponse(delta);
	}
}