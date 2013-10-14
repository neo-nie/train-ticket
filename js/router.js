//router.js路由类，用于控制页面跳转，上下文状态传递

router = {}

//跳转到指定页
router.redirect = function(url){
	window.location = url;
}

//重写哈希改变事件，用于实现hashbang
window.onhashchange = function() {
}