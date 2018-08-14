//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    fucShow: false,
    fontSize: 16,
    color: 1
  },
  onLoad: function () {

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
  onFontChange: function (e) {
    this.setData({
      fontSize: e.detail
    })
  },
  touchColor: function (e) {
    let color = e.target.dataset.color
    console.log(color)
    this.setData({
      color: color
    })
  }
})