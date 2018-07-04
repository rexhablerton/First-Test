app.controller('editController', function($state, $stateParams) {

    var vm = this;

    vm.globalKey = "Users";

    vm.Users = [];
    vm.activate = function() {
        vm.Userat = JSON.parse(window.localStorage.getItem(vm.globalKey));
        vm.Users = vm.Userat;
        var indeksi = $stateParams.indeksi;
        vm.Userat = $stateParams.objekti;
        console.log(vm.Userat);
    }
    vm.activate();
    console.log(vm.Userat);

    vm.editData = function(Data) {

        var indeksi = $stateParams.indeksi;
        vm.Useri = $stateParams.objekti;
        console.log("Indexi", vm.Useri);


        vm.Users[indeksi] = Data;
        localStorage.setItem(vm.globalKey, JSON.stringify(vm.Users));
        $state.go('list');

    }
});