var Letter = require ("./Letter");

function Word (word) {
	this.letters = word.split ("").map(function(char) {
	return new Letter(char);
});
}

Word.getSolution = function () {
	return this.letters.map(function(letter) {
		return letter.getSolution();
	}),join('');
}

Word.toString = function () {
	return this.letters.join("");
};

Word.guessLetter = function (char) {
	var foundLetter = false;
	this.letters.forEach(function(letter){
		if (letter.guess(char)) {
			foundLetter = true;
		}
	});

	console.log (this);
	return foundLetter;
};

Word.guessedCorrectly = function () {
	return this.letters.every (function (letter){
		return letter.visible;
	});
};
module.exports = Word;




