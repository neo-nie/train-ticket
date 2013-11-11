avalon.ready(function () {

//RegisterVM
avalon.define('register', function (vm) {
	vm.$title = '12306用户注册';

	vm.User = 'user';
	vm.Password = 'password';
	vm.Password2 = 'password2';
	vm.Captcha = '***';

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