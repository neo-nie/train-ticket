avalon.ready(function () {

//TicketsVM
avalon.define('tickets', function (vm) {
	vm.$title = '余票信息';

	vm.Tickets = [];

	/**
	 * 进入抢票页面
	*/
	vm.GrabTicket = function(ticket){

	}

	/**
	 * 进入预定页面
	*/
	vm.BookTicket = function(ticket){

	}
});
avalon.scan();

});