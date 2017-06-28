/*
* @Author: sxwk92
* @Date:   2017-06-24 02:09:55
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-06-28 10:41:34
*/
'use strict';
var _mm = require('util/mm.js');

var html ='<div>{{data}}</div>';
var data = {
	data:'test'
}
console.log(_mm.renderHtml(html,data));