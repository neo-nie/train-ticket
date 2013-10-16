avalon.ready(function () {

//LoginVM
avalon.define('login', function (vm) {
	vm.$title = '用户登录';
	vm.$back = function(){
		window.history.back();
	}

	//公共属性
	vm.User = 'user';
	vm.Password = 'password';
	vm.Captcha = '***';
	vm.SaveUser = false;
	vm.SavePassword = false;

	//公共方法

	/**
	 * 获取验证码
	 * 返回验证码图片url
	*/
	vm.FetchCaptcha = function(){

	};

	/**
	 * 检验校验码
	 * 成功返回true，失败返回false
	*/
	vm.VerifyCaptcha = function(){

	};

	/**
	 *使用User和Password属性进行登录，
	 *成功返回true，失败返回false
	*/
	vm.Login = function(){

	};

	/**
	 *对用户名密码进行校验
	 *成功返回true，失败返回false
	*/
	vm.Verify = function(){

	};

	/**
	 *注销用户
	*/
	vm.Logout = function(){

	};

});
avalon.scan();

});