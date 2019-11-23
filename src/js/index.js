// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

require('jquery');
import { Interface } from './interface.js';
import { Timer } from './timer.js';

const ui = new Interface();

$(document).ready(function(){
	window.$ = jQuery;
	window.ui = ui;
	ui.init();

	/* Timer */	
	const timer = new Timer([2019, 11, 31, 23, 59, 59], "Asia/Yekaterinburg", "The end", 30);
});