avalon.ready(function () {

//SearchVM
avalon.define("search", function (vm) {
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
	vm.Verify = funtion(){

	}

	/**
	 * 使用查询条件搜索车票，并跳转到车票查询结果页
	*/
	vm.Search = function(){

	}
});
avalon.scan();

});