//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    fucShow: false,
    commentShow: false,
    fontSize: 16,
    color: 1,
    book: ''
  },
  onLoad: function (option) {
    let book = option.book
    this.setData({
      book: book
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.book
    })
  },
  bookFuc: function () {
    this.setData({
      fucShow: true
    })
  },
  fucClose: function () {
    this.setData({
      fucShow: false
    })
  },
  showComment: function () {
    this.setData({
      commentShow: true
    })
  },
  commentHide: function () {
    this.setData({
      commentShow: false
    })
  },
  onFontChange: function (e) {
    // 字体大小改变
    this.setData({
      fontSize: e.detail
    })
  },
  touchColor: function (e) {
    // 页面背景色改变
    let color = e.target.dataset.color
    this.setData({
      color: color
    })
    // 导航栏颜色也改变
    wx.setNavigationBarColor({
      backgroundColor: this.switchColor(color),
      frontColor: '#000000'
    })
  },
  switchColor: function (color) {
    switch (color) {
      case '2':
        return '#FAF9DE'
        break;
      case '3':
        return '#E3EDCD'
        break;
      case '4':
        return '#EAEAEF'
        break;
      case '5':
        return '#DCE2F1'
        break;
    }

  }
})