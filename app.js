// randomise link position on screen
// stop link on edge of screen

var positionOnScreenLink = 500;
var positionOnScreenRupee = 400;
var imgLink = document.querySelector(".link");
var imgRupee = document.querySelector(".rupee-wrapper");
var rupeeCounter = document.querySelector(".grabbed-count");
var rupeeWin = document.querySelector(".grabbed-win");
var rupeeSeconds = document.querySelector(".rupee-timer span");
var rupeeTimer = document.querySelector(".rupee-timer")
var startButton = document.querySelector(".start-button")
var winScreen = document.querySelector(".win-screen")

var rupeesGrabbed = 0;
var seconds = 25;

function placeLink () {
	imgLink.style.left = positionOnScreenLink + 'px';
}

function placeRupee () {
	imgRupee.style.left = positionOnScreenRupee + 'px';
}

function showScore () {
	rupeeCounter.textContent = rupeesGrabbed;
}

function startTime () {
	startButton.classList.add('hidden')
	rupeeTimer.classList.remove('hidden')
	rupeeSeconds.textContent = seconds;
	timerId = setInterval(updateTime, 1000);	
}

function stopTime() {
    clearInterval(timerId);
    rupeeTimer.textContent = 'Time\'s up!';
}

var updateTime = function () {
	seconds = seconds - 1;
	rupeeSeconds.textContent = seconds;
	if (seconds === 0) {
		stopTime();
		rupeeWin.textContent = rupeesGrabbed
		setTimeout(function() { 
			winScreen.classList.remove('hidden') 
		}, 1000);
	}
};


placeLink();
placeRupee();
showScore();

function randomPosition(element) {
	var x = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	return randomX;
}

window.onload = function() {
	var x = randomPosition(imgRupee);
	imgRupee.style.left = x + 'px';
}

function moveRupee () {
	var x = randomPosition(imgRupee);
	imgRupee.style.left = x + 'px';
}

function grabRupee () {
	rupeesGrabbed++;
	showScore();
	moveRupee();
}

function checkForGrab () {
	var link = getPositionLink();
	var rupee = getPositionRupee();
	if (link > rupee - 11 && link < rupee) {
		grabRupee();
	}
}

function leftArrowPressed() {
	imgLink.style.transform = 'scaleX(1)';
    imgLink.style.left = (positionOnScreenLink - 15) + 'px';
    positionOnScreenLink = positionOnScreenLink - 15;
    checkForGrab();
}

function rightArrowPressed() {
	imgLink.style.transform = 'scaleX(-1)';
	imgLink.style.left = (positionOnScreenLink + 15) + 'px';
	positionOnScreenLink = positionOnScreenLink + 15;
	checkForGrab();
}

function moveLink(event) {
	if (seconds > 0 && seconds < 25) {

		switch (event.keyCode) {
	        case 37:
	        leftArrowPressed();
	        break;
	        case 39:
	        rightArrowPressed();
	        break;
	    }

	}
    
};
 
window.addEventListener('keydown', moveLink);

function getPositionLink () {
	var location = imgLink.getBoundingClientRect();
	return location.left;
}

function getPositionRupee () {
	var location = imgRupee.getBoundingClientRect();
	return location.left;
}

startButton.addEventListener('click', startTime)