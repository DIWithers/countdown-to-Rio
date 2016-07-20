

function updateCounter() {
	// Get the current time in milliseconds since 1970(UNIX epoch)
	var now = Date.now();

	// Various time unit elements
	var secondsInAMinute = 60;
	var secondsInAnHour = 60 * 60; //secondsInAMinute * 60
	var secondsInADay = 60 * 60 * 24; //secondsInAnHour * 24
	var secondsInAWeek = secondsInADay * 7; //secondsInADay * 7

	// Get various time elements in various



	// var rioStart = Date.parse("August 5, 2016 19:00");
	var rioStart = new Date("August 5, 2016 19:00").getTime();
	// console.log(rioStart);
	// Time is seconds between the current moment and the start of Rio 2016
	var getTimeTillRio = (rioStart - now) / 1000;
	// console.log(getTimeTillRio);


	// Get various units of time till event
	var seconds = Math.floor(getTimeTillRio % 60);
	var minutes = Math.floor((getTimeTillRio / secondsInAMinute) % 60);
	var hours = Math.floor((getTimeTillRio / secondsInAnHour) % 24);
	var days = Math.floor((getTimeTillRio / secondsInADay) % 7);
	var weeks = Math.floor((getTimeTillRio / secondsInAWeek) % 52);


//Function also optional
	var secondsDigit = (document.getElementsByClassName("seconds-number")[0]);
	var minutesDigit = (document.getElementsByClassName("minutes-number")[0]);
	var hoursDigit = (document.getElementsByClassName("hours-number")[0]);
	var daysDigit = (document.getElementsByClassName("days-number")[0]);
	var weeksDigit = (document.getElementsByClassName("weeks-number")[0]);

	var secondsDigit2 = (document.getElementsByClassName("seconds-number")[1]);
	var minutesDigit2 = (document.getElementsByClassName("minutes-number")[1]);
	var hoursDigit2 = (document.getElementsByClassName("hours-number")[1]);
	var daysDigit2 = (document.getElementsByClassName("days-number")[1]);
	var weeksDigit2 = (document.getElementsByClassName("weeks-number")[1]);

	// Set the HTML of the given unit with the new amount
	secondsDigit.innerHTML = seconds;
	minutesDigit.innerHTML = minutes;
	hoursDigit.innerHTML = hours;
	daysDigit.innerHTML = days;
	weeksDigit.innerHTML = weeks;

	secondsDigit2.innerHTML = seconds;
	minutesDigit2.innerHTML = minutes;
	hoursDigit2.innerHTML = hours;
	daysDigit2.innerHTML = days;
	weeksDigit2.innerHTML = weeks;


}

function hideEng() {
	var eng = document.getElementById("eng-wrapper");
	eng.style.display = "none";
	var port = document.getElementById("port-wrapper");
	port.style.display = "block";
}
function hidePort() {
	var port = document.getElementById("port-wrapper");
	port.style.display = "none";
	var eng = document.getElementById("eng-wrapper");
	eng.style.display = "block";
}
setInterval(updateCounter, 1000);

//***FOUR WAYS TO TARGET AN ELEMENT IN THE DOM***
// var countdownTimer = document.getElementById("countdown-timer"); //fetch whole page and give it the name countdownTimer

// console.log(countdownTimer.querySelector(".weeks-number")); //returns first element in whole page(countdownTimer) that matches specification
// console.log(document.querySelector(".weeks-number")); //powerfull option
// console.log(document.getElementsByClassName("weeks-number")[0]); //specify array index otherwise you get a whole array 
// console.log(document.getElementsByTagName("span")[0]);

// Call the setInterval function which will run our method/function every 1 seconds/1000 ms




