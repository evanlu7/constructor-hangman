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



}