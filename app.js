//randomise link position on screen
//randomise rupee position on screen
// stop link on edge of screen

var positionOnScreenLink = 500;
var positionOnScreenRupee = 400;
var imgLink = document.querySelector(".link");
var imgRupee = document.querySelector(".rupee-wrapper");
var rupeeCounter = document.querySelector(".score-counter span");
var rupeeTimer = document.querySelector(".rupee-timer span");

var rupeesGrabbed = 0;
var seconds = 30;

rupeeTimer.textContent = seconds;

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
	timerId = setInterval(updateTime, 1000);	
}

var updateTime = function () {
	seconds = seconds - 1;
	rupeeTimer.textContent = seconds;
};


placeLink();
placeRupee();
showScore();
startTime();

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
    switch (event.keyCode) {
        case 37:
        leftArrowPressed();
        break;
        case 39:
        rightArrowPressed();
        break;
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

// var myRupees = document.querySelectorAll('.rupee');
// var myLinks = document.querySelectorAll('.link');
// var myDivs = document.querySelectorAll('.trees');

// function getRupee (event) {
// 	var target = event.target
// 	target.classList.add('hidden');
// 	var linkLocation = target.parentElement;
// 	console.log(linkLocation);
// 	myLinks[1].classList.remove('hidden');
// 	myLinks[7].classList.add('hidden');
// 	console.log(myDivs[1] === linkLocation);
// 	//locate linkLocation in myDivs - indexOf
// 	//then that index for myLinks
// }

// function showLink (event) {
// 	event.target.classList.add('hidden');
// }

// myRupees.forEach(function(rupeeItem) {
// 	rupeeItem.addEventListener('click', getRupee);
// });

// myLinks.forEach(function(linkItem) {
// 	linkItem.addEventListener('click', showLink);
// });

// random add class to rupee

