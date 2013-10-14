avalon.ready(function () {

//RegisterVM
avalon.define("register", function (vm) {
	vm.User = "user";
	vm.Password = "password";
	vm.Password2 = "password2";
	vm.Captcha = "***";

	/**
	 * 校验用户名和密码
	 * 成功返回true，失败返回false
	*/
	vm.Verify = function(){
	
	};

	/**
	 * 注册
	 * 成功返回true，失败返回false
	*/
	vm.Register = function(){

	}
});
avalon.scan();

});