
function buttonClick(id) {
	var butt = document.getElementById(id);
	
	if (butt.className === 'fa fa-circle-thin fa-1x') {
		butt.className = 'fa fa-dot-circle-o fa-1x';
	} else if (butt.className === 'fa fa-dot-circle-o fa-1x') {
		butt.className = 'fa fa-circle-thin fa-1x';
	}
}

document.addEventListener('DOMContentLoaded', function() {
	
	document.getElementById('img1').addEventListener('click', function() {
		var url = document.getElementById('img1').src;
		var hTwo = document.getElementById('h2').innerHTML = 'The SpongeBob Movie';
		document.getElementById('movies').style.backgroundImage = 'url(' + url + ')';
	}, false);
	
	document.getElementById('img2').addEventListener('click', function() {
		var url = document.getElementById('img2').src;
		var hTwo = document.getElementById('h2').innerHTML = 'Mad Max';
		document.getElementById('movies').style.backgroundImage = 'url(' + url + ')';
	}, false);
	
	document.getElementById('img3').addEventListener('click', function() {
		var url = document.getElementById('img3').src;
		var hTwo = document.getElementById('h2').innerHTML = 'Ex Machina';
		document.getElementById('movies').style.backgroundImage = 'url(' + url + ')';
	}, false);
	
	var elem = document.getElementById('genre');
    var allLi = elem.querySelectorAll('li');
    
    for (var i = 0; i < allLi.length; i++) {
		var content = allLi[i].innerHTML; 
		allLi[i].innerHTML = '<button id="' + i +
		'" class="fa fa-circle-thin fa-1x" onclick="buttonClick(' + i + ')"></button>' + content;
	}
	
	var pop = document.getElementById('popular');
	var star = pop.querySelectorAll('p');
	
	for (var i = 0; i < star.length; i++) {
		for (var j = 0; j < 5; j++) {
			star[i].innerHTML += '<span class="fa fa-star"><span>';
		}
	}
}, false);