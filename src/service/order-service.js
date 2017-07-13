/*
* @Author: Administrator
* @Date:   2017-07-13 14:15:46
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-07-13 18:36:16
*/

'use strict';

var _mm = require('util/mm.js');

var _order = {
	// 获取商品列表
	getProductList: function (resolve,reject){
		_mm.request({
			url     : _mm.getServerUrl('/order/get_order_cart_product.do'),
			success : resolve,
			error   : reject  
		});
	}
	
} 

module.exports = _order;