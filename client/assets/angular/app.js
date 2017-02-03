var app = angular.module('app', ['ngRoute']);

//ROUTES
app.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when("/", {
			templateUrl: "./partials/landing.html",
		})
		.when("/dashboard", {
			templateUrl: "./partials/dashboard.html",
			controller: "QuestionsController"
		})
		.when("/new_question", {
			templateUrl: "./partials/newQuestion.html",
			controller: "QuestionsController"
		})
		.when("/question/:id", {
			templateUrl: "./partials/showQuestion.html",
			controller: "QuestionsController"
		})
		.when("/question/:id/new_answer", {
			templateUrl: "./partials/newAnswer.html",
			controller: "QuestionsController"
		})
		.when("/marketing", {
			templateUrl: "./partials/marketing.html"
		})
		.when("/developers", {
			templateUrl: "./partials/developers.html"
		})
		.when("/loginreg", {
			templateUrl: "./partials/loginreg.html"
		})


})
