function Letter (char) {
	this.char = char;
}

Letter.toString = function () {
	if (this.visible === true) {
		return this.char;	}
}
return "_";
};

Letter.getSolution = function () {
	return this.char;
};

Letter.guess = function (charguess) {
	if (charGuess.toUpperCase () === this.char.toUpperCase()) {
		this.visible=true;
		return true;
	}
	return false;
};

module.exports = Letter;