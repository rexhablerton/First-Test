app.controller('newController', ['$state',function($state){

	var vm= this;
	
	vm.myData = {
		   myEmri: null,
		   myMbiemri: null,
		   myDatlindja:null,
		   myVendi: null
		};

	vm.users=[];


	vm.globalKey = "Users";
	
		// get items from users
		vm.activate = function(){
			vm.users=JSON.parse(localStorage.getItem('Users')) || [];
		}
		vm.activate();


		vm.addData = function(item) {
			console.log('add works!');
			vm.users.push(item);

			localStorage.setItem(vm.globalKey,JSON.stringify(vm.users));

			vm.myData = {
			   	myEmri: null,
			   	myMbiemri: null,
			   	myDatlindja:null,
			   	myVendi: null
			};
			$state.go('list');
		}

		
}]);