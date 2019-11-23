// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

require('jquery');
import { Interface } from './interface.js';

const ui = new Interface();

$(document).ready(function(){
	window.$ = jQuery;
	window.ui = ui;
	ui.init();

	// Timer
	ui.test_countdown([2019, 11, 31, 23, 59, 59], "Asia/Yekaterinburg");
	const countdownTick = setInterval(() => ui.test_countdown([2019, 11, 31, 23, 59, 59], "Asia/Yekaterinburg"), 60000);
});