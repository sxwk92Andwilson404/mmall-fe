/*
* @Author: sxwk92
* @Date:   2017-06-24 02:14:53
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-06-24 20:01:14
*/
var config = {
	entry: {
		'index':['./src/page/index/index.js'],
		'login':['./src/page/login/index.js'],
	},
	output:{
		path:'./dist',
		filename:'js/[name].js'
	}
};

module.exports=config;