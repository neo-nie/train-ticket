avalon.ready(function () {

//PassengerVM
avalon.define('passenger', function (vm) {
	vm.$title = '常用旅客';
	vm.Passengers = []; //常用旅客列表

	/**
	 * 增加常用旅客
	 * 成功返回true，失败返回false
	*/
	vm.AddPassenger = function () {

	};

	/**
	 * 删除指定的常用旅客
	 * 成功返回true，失败返回false
	*/
	vm.DeletePassenger = function (passenger) {

	};
});
avalon.scan();

});