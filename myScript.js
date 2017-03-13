/* Francheska Guzman 
CodeBridge Cycle 2 Cohort 4
March 13, 2017
*/

// Function to display the current time, and convert 24-hour clock in a 12-hour clock.
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
		if (hour == 0) {
			hour = 12;    
		};

	// Display current time:
	document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second + " " + meridiem;
	setTimeout(startTime, 500);
};

// Adding a 0.
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	};
    return i;
};

/* Function that compares the alarm setting with the current time. */
function alarmSet() {
	var t = new Date (); // t = time
	var h = t.getHours(); // h = hour
	var m = t.getMinutes(); // m = minute
	var sHour = document.getElementById("h")[document.getElementById("h").selectedIndex].value;
	var sMinute = document.getElementById("m")[document.getElementById("m").selectedIndex].value;
	// If hour, minute and meridiem are equals, then pause the tick tock effect and play the alarm.
		if(h == sHour && m == sMinute) {
			ticktockEffect.pause();
			var alarmEffect = new Audio('audio/alarmeffect.mp3');
			alarmEffect.play();
		};
};

/* Alarm */
function alarmOn() {
	alarmSet(); //Call the function above.
};

function alarmOff() {
	alarmEffect.pause();
	ticktockEffect.play();
};

/* Tik tok sound effect in a loop. */
var ticktockEffect = new Audio ('audio/ticktock.mp3');
ticktockEffect.loop = true;
ticktockEffect.play();