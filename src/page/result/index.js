/*
* @Author: Administrator
* @Date:   2017-06-29 20:56:06
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-06-29 22:23:29
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success');
		// 显示对应的提示元素
		$element.show();
})