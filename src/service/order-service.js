/*
* @Author: Administrator
* @Date:   2017-07-13 14:15:46
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-07-13 14:24:58
*/

'use strict';

var _mm = require('util/mm.js');

var _order = {
	// 获取商品列表
	getProductList: function (listParam,resolve,reject){
		_mm.request({
			url     : _mm.getServerUrl('/product/list.do'),
			data    : listParam,
			success : resolve,
			error   : reject  
		});
	}
	
} 

module.exports = _product;