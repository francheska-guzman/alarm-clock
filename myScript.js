function startTime() {
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	// Calling the checkTime function to add a 0 before numbers of one digit.
	hour = checkTime(hour);
	minute = checkTime(minute);
	second = checkTime(second);

	var meridiem = "AM"; // By default is AM.
	if (hour > 12) {
		hour = hour - 12;
		meridiem = "PM";
	};
	if (hour === 0) {
		hour = 12;    
	};
	// Display current time:
	document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second + " " + meridiem;
	setTimeout(startTime, 500);
};

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	};
    return i;
};

/* Alarm effect */

var sound = new Audio(".mp3");
	sound.loop = true;

function alarmOn() {
	sound.play();
};

function alarmOff() {
	sound.pause();
};
