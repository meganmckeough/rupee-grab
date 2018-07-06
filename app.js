var myRupees = document.querySelectorAll('.rupee');
var myLinks = document.querySelectorAll('.link');
var myDivs = document.querySelectorAll('.trees');

function getRupee (event) {
	var target = event.target
	target.classList.add('hidden');
	var linkLocation = target.parentElement;
	console.log(linkLocation);
	myLinks[1].classList.remove('hidden');
	myLinks[7].classList.add('hidden');
	console.log(myDivs[1] === linkLocation);
	//locate linkLocation in myDivs - indexOf
	//then that index for myLinks
}

function showLink (event) {
	event.target.classList.add('hidden');
}

myRupees.forEach(function(rupeeItem) {
	rupeeItem.addEventListener('click', getRupee);
});

myLinks.forEach(function(linkItem) {
	linkItem.addEventListener('click', showLink);
});

// random add class to rupee