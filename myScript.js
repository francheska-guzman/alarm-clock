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

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	};
    return i;
};

/* Function that compares the current time with the alarm. */
function alarmSet() {
	var d = new Date ();
	var h = d.getHours();
	var m = d.getMinutes();
	var Hours = document.getElementById("h").value;
	var Minutes = document.getElementById("m").value;

	if(Hours == h && Minutes == m){
		var sound = new Audio('audio/HappyDespicableMe.mp3');
		sound.play();
	}
}

/* Alarm effect */
var sound = new Audio("HappyDespicableMe.mp3");
	sound.loop = true;

function alarmOn() {
	alarmSet(); //Call the function.
};

function alarmOff() {
	sound.pause();
};
