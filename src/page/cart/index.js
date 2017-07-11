/*
* @Author: Administrator
* @Date:   2017-07-11 18:15:41
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-07-11 22:29:41
*/

'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm             = require('util/mm.js');
var _cart           = require('service/cart-service.js');
var templateIndex   = require('./index.string');

var page = {
    data : {
        
    },
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
       
        this.loadCart();
    },
    bindEvent : function(){
        var _this = this;
        // 图片预览
    //     $(document).on('mouseenter', '.p-img-item', function(){
    //         var imageUrl   = $(this).find('.p-img').attr('src');
    //         $('.main-img').attr('src', imageUrl);
    //     });
    },
    // 加载购物车信息
    loadCart : function(){
        var _this       = this;
        // 获取购物车列表
        _cart.getCartList(function(){
        	_this.renderCart(res);
        },function(errMsg){
        	$('page-wrap').html('<p class="err-tip">哪里不对了，刷新下试试吧</p>')
        })
    },
    // 数据匹配
    filter : function(data){
      
    }
};
$(function(){
    page.init();
})