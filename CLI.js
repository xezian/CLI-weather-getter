var inquirer = require("inquirer");
var UserSearch = require("./user.js").UserSearch;
var adminSearch = require("./admin.js");


inquirer.prompt([
	{
		type: "input",
		name: "person",
		message: "What is your name?"
	},
	{
		type: "list",
		name: "userOrAdmin",
		message: "Are you a user or an admin?",
		choices: ["user", "admin"]
	},
	{
		type: "input",
		name: "location",
		message: "What city do you want to search the weather for?",
		when: function(answers) {
			return (answers.userOrAdmin === "user");
		}
	},
	{
		type: "confirm",
		name: "view",
		message: "Want to see the list of users who had used this app?",
		when: function(answers) {
			return (answers.userOrAdmin === "admin");
		}
	}
]).then(function(answers) {
	if (answers.userOrAdmin === "user")
	{
		UserSearch(answers.person, answers.location);
	}
	else if (answers.userOrAdmin === "admin")
	{
		adminSearch();
	}
});