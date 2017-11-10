//create the object containing all guess words and their corresponding clues

var guessWords = [
	{name: "RICHMOND",
	cont: "North America",
	pop: 0.22,
	company: "CarMax",
	fact: "Home to the first electric streetcar"},

	{name: "BOGOTA",
	cont: "South America",
	pop: 8.081,
	company: "Avianca",
	fact: "Located at an elevation of 8660 feet"},

	{name: "TURIN",
	cont: "Europe",
	pop: 1.7,
	company: "Fiat",
	fact: "Known for its Gianduiotto chocolate and bicerin"},

	{name: "FRANKFURT",
	cont: "Europe",
	pop: 2.32,
	company: "European Central Bank",
	fact: "The financial center of Europe"},

	{name: "DOHA",
	cont: "Asia",
	pop: 1.35,
	company: "Al-Jazeera Media",
	fact: "Contains Education City"},

	{name: "MUMBAI",
	cont: "Asia",
	pop: 21.3,
	company: "Reliance Industries",
	fact: "Famous for its cinema industry"},

	{name: "SHANGHAI",
	cont: "Asia",
	pop: 24.3,
	company: "Baosteel Group",
	fact: "Contains the world's busiest container port"},

	{name: "MUNICH",
	cont: "Europe",
	pop: 2.61,
	company: "BMW",
	fact: "Annually celebrates Oktoberfest"},
];

//pressing the button will run a function to select one of the words defined above and initialize

document.getElementById("button").onclick = function(){initialize(rdm);}

rdm=0;
var arr;
var currentWord = guessWords[rdm].name;


function initialize(rdm) {
	arr = [];
	currentWord = guessWords[rdm].name;
	var clues = document.getElementById("clues");
	clues.innerHTML = (
		"<li>Located in: " + guessWords[rdm].cont + "</li>" +
		"<li>Population: " + guessWords[rdm].pop + " million</li>" +
		"<li>A company based there: " + guessWords[rdm].company + "</li>" +
		"<li>A fact about it: " + guessWords[rdm].fact + "</li>"
	);
	document.getElementById("image").innerHTML = '<img src="assets/images/' + guessWords[rdm].name + '.jpg">';
	
	for (var i = 0; i < currentWord.length; i++) {
		arr[i] = "_";
	}
		document.getElementById("word").innerHTML = arr.join(" ");
		guesses = 0;
		document.getElementById("guesses").innerHTML = 6 - guesses;
	
}



console.log(guessWords);
console.log(arr);
console.log(guessWords[rdm].name);
console.log(currentWord.charAt(0));
																						var usedLetters = []
																						var j=0
																					
																						var test

document.onkeyup = function(){inputLetter(arr, currentWord);}


function inputLetter(arr, currentWord) {
	if (j < 5) {
    letter = String.fromCharCode(event.keyCode)
    console.log('Event Char Code ' + event.keyCode );
    console.log('Letter from Char code ' + letter);
    for (var i = 0; i < arr.length; i++) {
        if (currentWord.charAt(i) == letter && (usedLetters.indexOf(letter) == -1)) {
        	arr[i] = currentWord.charAt(i);
        }
    }
    if (currentWord.split("").indexOf(letter) == -1 && (usedLetters.indexOf(letter) == -1)) {
    	guesses++;
    	usedLetters[j] = letter;
    	j = j + 1;
    }
	document.getElementById("word").innerHTML = arr.join(" ");
	document.getElementById("guesses").innerHTML = 6 - guesses;
	document.getElementById("usedLetters").innerHTML = usedLetters;
	

	console.log("J" + j)
	console.log(arr.join("") + " " + currentWord)
	if (arr.join("") == currentWord) {
		test = confirm("YOU WIN! New try?");
		if (test == true) {
			rdm++;
			console.log(test + " " + rdm + " " + currentWord);
			j = 0;
			initialize(rdm);
			usedLetters = [];
			document.getElementById("usedLetters").innerHTML = usedLetters;
		} else {
			alert("Quit")
		}
	}
}
	




	if (j > 4) {
		test = confirm("YOU LOST! New try?");
		if (test == true) {
			rdm++;
			console.log(test + " " + rdm + " " + currentWord);
			j = 0;
			initialize(rdm);
			usedLetters = [];
			document.getElementById("usedLetters").innerHTML = usedLetters;
		} else {
			alert("Quit")
		}
	}

	
}









//function pickWord(rdm) {
//	var currentWord = guessWords[rdm].name;
	var clues = document.getElementById("clues");
//	clues.innerHTML = (
		"<li>Located in: " + guessWords[rdm].cont + "</li>" +
		"<li>Population: " + guessWords[rdm].pop + " million</li>" +
		"<li>A company based there: " + guessWords[rdm].company + "</li>" +
		"<li>A fact about it: " + guessWords[rdm].fact + "</li>"
//	);
	document.getElementById("image").innerHTML = '<img src="assets/images/' + guessWords[rdm].name + '.jpg">'
//}

//pickWord(2);