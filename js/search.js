avalon.ready(function () {

//SearchVM
avalon.define("search", function (vm) {
	vm.$title = "余票查询"
	vm.$back = function(){
		window.history.back();
	}

	vm.FromCity = "广州";
	vm.ToCity = "重庆";
	vm.FromDate = "2013-10-10";
	vm.IsKuaiChe = false;
	vm.IsTeKuai = true;
	vm.IsZhiDa = true;
	vm.IsDongChe = true;
	vm.IsGaoTie = true;

	/**
	 * 校验查询条件
	*/
	vm.Verify = function(){

	}

	/**
	 * 使用查询条件搜索车票，并跳转到车票查询结果页
	*/
	vm.Search = function(){

	}

	/**
	 * 加载页面时执行
	*/
	function init() {
		var config = getConfig();
		//vm.extend(config);
	}

	/**
	 * 从url或hash中获取预定义参数
	*/
	function getConfig() {
		// body...
	}

	init();
});
avalon.scan();

});