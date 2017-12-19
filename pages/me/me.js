// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    var that = this;
    app.getUserInfo(function(userInfo){
        that.setData({
          info:userInfo
        })
    })
  },

  saoyisao:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  location:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }
})