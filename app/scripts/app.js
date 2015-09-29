'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ui.router','ui.bootstrap','ngStorage']);

app.config(function($stateProvider, $urlRouterProvider) { 

	$urlRouterProvider.otherwise('/main');

	$stateProvider
	    .state('main', {
	      url: '/main',
	      templateUrl: 'views/main.html',
				controller: 'MainController'
	})
	.state('list2', {
            url:'/list2',
            templateUrl: 'views/list2.html',
            controller: 'List2Controller'
        })
	.state('list3', {
            url:'/list3',
            templateUrl: 'views/list3.html',
            controller: 'List3Controller'
        })

});