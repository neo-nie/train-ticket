avalon.ready(function () {

//IndexVM
avalon.define("index", function (vm) {
	vm.$title = "首页";
	vm.$back = function(){
		window.history.back();
	}

	function init(){
		//router.redirect("tpl/login.html")
	}
	init();
});
avalon.scan();

});