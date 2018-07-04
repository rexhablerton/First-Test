app.controller('navController', ['$state', function($state) {
    var vm = this;

    vm.goHome = function() {
        $state.go('home');
    }

    vm.goAbout = function() {
        $state.go('about');
    }

    vm.goList = function() {
        $state.go('list');
    }

    vm.goNew = function() {
        $state.go('new');
    }
}]);