var inquirer = require("inquerer");
var chalk = require("chalk");
var word = require("./word");
var words = require("./words");

function Game() {
    var self = this;
    this.play = function() {
        this.guessesLeft = 10;
        this.nextWord();
    };
    this.pickWord = function() {
        var chooseWord = words[Math.floor(Math.random() * words.length)];
        this.currentWord = new Word(randomWord);
        console.log(this.currentWord)
        this.makeGuess();

    };


this.userGuess = function () {
	this.userLetter().then(function() {
		if (self.guessesLeft<1){
			console.log(
				"Game over! The answer was" + self.currentWord.getSolution());
			self.askToPlayAgain();
		}

		else if (self.currentWord.guessedCorrectly()){
			console.log("Correct.  Starting new game.");
			self.guessesLeft = 10;
			self.nextWord();
		}
		else{
			self.makeGuess();
		}
	});
};

// play again function

this.newGame = function () {
	inquirer
	.prompt([
		{type:"confirm",
		name:"choice",
		message:"Would you like to play again?"
	}
	])
	.then(function(val) {
		if. (val.choice) {
			self.play();
		}
		else {
			self.quit ();
		}
	})
};


this.askForLetter = function () {
	return inquirer
	.prompt ([
	{
		type:"input",
		name:"choice",
		message:"Guess a letter",
		validate: function (val) {
			return /[a-z1-9]/g1.test(val);
		}
	}
	])
	.then (function(val){
		var didGuessCorrectly = self.currentWord.guessLetter(val.choice);
		if (didGuessCorrectly){
			console.log(chalk.green("correct"));
		}

		else {
			self.guessesLeft -1;
			console.log(chalk.red ("incorrect"));
			console.log(self.guessesLeft + "guesses remaining");
		}
	});
};

this.quit = function () {
	console.log ("peace out");
	process.exit(0);
};
}

module.exports = game;