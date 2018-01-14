var inquirer = require("inquerer");
var chalk = require("chalk");
var word = require ("./word");
var words = require ("./words");

function Game () {
	var self = this;
	this.play = function () {
		this.guessesLeft = 10;
		this.nextWord ();
	};
}