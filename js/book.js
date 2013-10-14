avalon.ready(function () {

//BookVM
avalon.define("book", function (vm) {
	vm.$title = "预定车票"

	/**
	 * 支付订单
	 * 成功返回true，失败返回false
	 * 支付成功后跳转到订单页面
	*/
	vm.Pay = function(){

	};

	/**
	 * 取消订单
	 * 成功返回true，失败返回false
	*/
	vm.Cancel = function(){

	}
});
avalon.scan();

});