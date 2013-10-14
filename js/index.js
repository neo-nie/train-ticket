avalon.ready(function () {

//IndexVM
avalon.define("index", function (vm) {
	function init(){
		router.redirect("tpl/login.html")
	}
	init();
});
avalon.scan();

});