// pages/designList.js

const request = require('../../common/utils/request');
const api = require('../../common/config/api');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultList: wx.getStorageSync('resultList')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 跳转到详情页面
   */
  goDetailPage: function(e){
    let data = {designInfoId: this.data.resultList[e.currentTarget.dataset.index].id};
    request.get(api.queryDesignComment, data).then((res) => {
      var list = wx.getStorageSync('resultList')
      list[e.currentTarget.dataset.index].comment = res
      wx.setStorageSync('resultList', list)
      wx.navigateTo({
        url: '../detail/detail?select='+e.currentTarget.dataset.index
      });
    });
  }
})