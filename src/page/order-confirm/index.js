/*
* @Author: Administrator
* @Date:   2017-07-13 13:58:08
* @Last Modified by:   sxwk92
* @Last Modified time: 2017-07-13 21:20:44
*/

'use strict';

require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var _mm              = require('util/mm.js');
var _order           = require('service/order-service.js');
var _address         = require('service/address-service.js');
var templateAddress  = require('./address-list.string');
var templateProduct  = require('./product-list.string');


var page = {
    data : {
        selectedAddressId : null
    },
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        this.loadAddressList();
        this.loadProductList();
    },
    bindEvent : function(){
        var _this = this;
        // 商品的选择 / 取消选择
        // $(document).on('click','.cart-select',function(){
        
        // });
    },
    // 加载购物车信息
    loadAddressList : function(){
        var _this       = this;
        // 获取地址列表
        
        _address.getAddressList(function(res){
        	var addressListHtml = _mm.renderHtml(templateAddress,res);
        	$('.address-con').html(addressListHtml);
        },function(errMsg){
        	$('.address-con').html('<p class="err-tip">地址加载失败，请刷新后重试</p>');
        })
    },
    // 加载商品清单
    loadProductList : function(){
        var _this       = this;
        // 获取地址列表
        _order.getProductList(function(res){
        	var productListHtml = _mm.renderHtml(templateProduct,res);
        	$('.product-con').html(productListHtml);
        },function(errMsg){
        	$('.product-con').html('<p class="err-tip">商品信息加载失败，请刷新后重试</p>');
        })
    },
};
$(function(){
    page.init();
})