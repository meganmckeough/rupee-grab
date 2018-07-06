//randomise link position on screen
//randomise rupee position on screen
// stop link on edge of screen

var positionOnScreenLink = 300;
var positionOnScreenRupee = 400;
var imgLink = document.querySelector(".link");
var imgRupee = document.querySelector(".rupee");

function placeLink () {
	imgLink.style.left = positionOnScreenLink + 'px';
}

function placeRupee () {
	imgRupee.style.left = positionOnScreenRupee + 'px';
}

placeLink();
placeRupee();

function checkForGrab () {
	var link = getPositionLink();
	var rupee = getPositionRupee();
	console.log(link, rupee);
	if (link === rupee) {
		alert("you got it!");
	}
}

function leftArrowPressed() {
	imgLink.style.transform = 'scaleX(1)';
    imgLink.style.left = (positionOnScreenLink - 10) + 'px';
    positionOnScreenLink = positionOnScreenLink - 10;
    checkForGrab();
}

function rightArrowPressed() {
	imgLink.style.transform = 'scaleX(-1)';
	imgLink.style.left = (positionOnScreenLink + 10) + 'px';
	positionOnScreenLink = positionOnScreenLink + 10;
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

// console.log(getPositionRupee());
// console.log(getPositionLink());

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

