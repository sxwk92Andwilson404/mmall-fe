/*
* @Author: Administrator
* @Date:   2017-06-28 23:58:03
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-06-29 09:17:05
*/

'use strict';


var _mm = require('util/mm.js');

var _cart = {
	
	// 获取购物车数量
	getCartCount : function (resolve,reject){
		_mm.request({
			url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success : resolve,
			error   : reject  
		});
	},
} 

module.exports = _cart;