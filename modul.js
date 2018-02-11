var app = angular.module('appi', ['ngMessages','ui.router','pascalprecht.translate']);

app.config(function($stateProvider , $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');


    $stateProvider
    	.state("nav",{
    		url:"/nav",
    		templateUrl:"pages/nav.html",
    		controller : "navController",
    		controllerAs : "vm"
    	})


        .state("home", {
            url: "/home",
            templateUrl: "pages/home.html",
            controller : "homeController",
            controllerAs : "vm"
        })

        .state("about", {
        	url:"/about",
        	templateUrl:"pages/about.html",
        	controller : "aboutController",
          controllerAs : "vm"
                 
        })
        .state("list", {
        	url:"/list",
        	templateUrl:"pages/list.html",
        	controller : "listController",
          controllerAs : "vm"
                 
        })

        .state("new", {
        	url:"/new",
        	templateUrl:"pages/new.html",
        	controller : "newController",
          controllerAs : "vm"
        })

        .state("edit",{
        	url:"/edit",
        	templateUrl:"pages/edit.html",
        	controller:"editController",
        	controllerAs:"vm",
        	params:{
        		objekti : null,
        		indeksi: null,
        	}
        });
});





// 'use strict';
// var app = angular.module('app', ['pascalprecht.translate']);
   app.config(function ($translateProvider) {
     $translateProvider.fallbackLanguage('en');
     $translateProvider.registerAvailableLanguageKeys(['en', 'es'],{
       'en_*':'en',
       'es_*':'es'
     })
    $translateProvider.translations('en', {
      BUTTON_LANG_EN:"English",
      BUTTON_LANG_ES:"Albanian",
      Home:"Home",
      Name:"Name",
      Surname:"Surname",
      Db:"Date of birth",
      Country:"Country",
      About:"About Page",
      List:"List",
      New:"New",
      Edit:"Edit",
      Remove:"Remove"


    });
    $translateProvider.translations('es', {
      BUTTON_LANG_EN:"Anglisht",
      BUTTON_LANG_ES:"Shqip",
      Home:"Ballina",
      Name:"Emri",
      Surname:"Mbiemri",
      Db:"Data e lindjes",
      Country:"Vendi",
      About:"Rreth nesh",
      List:"Lista",
      New:"Shto",
      Edit:"Ndrysho",
      Remove:"Fshij"
    });

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
    
  });
 




    // app.config(function($routeProvider, $locationProvider) {
    // 	$locationProvider.hashPrefix('');
    //     $routeProvider

    //         // route for the home page
    //         .when('/', {
    //             templateUrl : 'pages/home.html',
    //             controller  : 'mainController1'
    //         })

    //         .when('/new', {
    //             templateUrl : 'pages/new.html',
    //             controller  : 'newController'
    //         })

    //         // route for the about page
    //         .when('/about', {
    //             templateUrl : 'pages/about.html',
    //             controller  : 'aboutController'
    //         })

    //         // route for the contact page
    //         .when('/list', {
    //             templateUrl : 'pages/list.html',
    //             controller  : 'listController'
    //         });
    // });

    // app.controller('mainController1', function($scope) {
    //     // create a message to display in our view

    // });

    // app.controller('newController',function($scope){

    // })

    // app.controller('aboutController', function($scope) {
    //     $scope.message = 'Look! I am an about page.';
    // });

    // app.controller('listController', function($scope) {
    //     $scope.message = 'List us! JK. This is just a demo.';
    // });



