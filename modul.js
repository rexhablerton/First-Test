var app = angular.module('appi', ['ngMessages', 'ui.router', 'pascalprecht.translate']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');


    $stateProvider
        .state("nav", {
            url: "/nav",
            templateUrl: "pages/nav.html",
            controller: "navController",
            controllerAs: "vm"
        })


        .state("home", {
            url: "/home",
            templateUrl: "pages/home.html",
            controller: "homeController",
            controllerAs: "vm"
        })

        .state("about", {
            url: "/about",
            templateUrl: "pages/about.html",
            controller: "aboutController",
            controllerAs: "vm"

        })
        .state("list", {
            url: "/list",
            templateUrl: "pages/list.html",
            controller: "listController",
            controllerAs: "vm"

        })

        .state("new", {
            url: "/new",
            templateUrl: "pages/new.html",
            controller: "newController",
            controllerAs: "vm"
        })

        .state("edit", {
            url: "/edit",
            templateUrl: "pages/edit.html",
            controller: "editController",
            controllerAs: "vm",
            params: {
                objekti: null,
                indeksi: null,
            }
        });
});

app.config(function($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
        'en_*': 'en',
        'es_*': 'es'
    })
    $translateProvider.translations('en', {
        BUTTON_LANG_EN: "English",
        BUTTON_LANG_ES: "Albanian",
        Home: "Home",
        Name: "Name",
        Surname: "Surname",
        Db: "Date of birth",
        Country: "Country",
        About: "About Page",
        List: "List",
        New: "New",
        Edit: "Edit",
        Remove: "Remove"


    });
    $translateProvider.translations('es', {
        BUTTON_LANG_EN: "Anglisht",
        BUTTON_LANG_ES: "Shqip",
        Home: "Ballina",
        Name: "Emri",
        Surname: "Mbiemri",
        Db: "Data e lindjes",
        Country: "Vendi",
        About: "Rreth nesh",
        List: "Lista",
        New: "Shto",
        Edit: "Ndrysho",
        Remove: "Fshij"
    });

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');

});