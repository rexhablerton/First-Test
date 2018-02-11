app.controller('listController',function ($state) {
	var vm = this;

	vm.Userat = [];

	vm.globalKey = "Users";

	vm.activate = function(){
		vm.Userat = JSON.parse(window.localStorage.getItem(vm.globalKey)) || [];
	}
	vm.activate();


	vm.goEdit = function(item){

	let indeksi = vm.Userat.indexOf(item);
	$state.go('edit',{objekti:item, indeksi:indeksi})
	}

	vm.removeData = function(Data) {
			console.log('remove works!');
			vm.data = vm.Userat.indexOf(Data);
			console.log(vm.data);
			vm.Userat.splice(vm.data,1);
			window.localStorage.setItem(vm.globalKey, JSON.stringify(vm.Userat));

}});