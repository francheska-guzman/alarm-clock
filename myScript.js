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

/* Function that compares the current time with the alarm. */
function alarmSet() {
	var t = new Date (); // t = time
	var h = t.getHours(); // h = hour
	var m = t.getMinutes(); // m = minute
	var sHour = document.AlarmClock.hourOption[document.AlarmClock.hourOption.selectedIndex].value;
	var sMinute = document.AlarmClock.minuteOption[document.AlarmClock.minuteOption.selectedIndex].value;
		if(sHour == h && sMinute == m) {
			var sound = new Audio('audio/HappyDespicableMe.mp3');
			sound.play();
		};
};

/* Alarm */
function alarmOn() {
	alarmSet(); //Call the function above.
};

function alarmOff() {
	sound.pause();
};
