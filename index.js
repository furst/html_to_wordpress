#!/usr/bin/env node
var inquirer = require('inquirer');
var generate = require('./generator')

var questions = [
	{
		type: 'list',
		name: 'menu',
		message: 'Select an option',
		choices: ['Generate'],
	},
];

inquirer.prompt(questions).then(function (answers) {
	generate(answers);
});






