// 接收数据
var postData = require('../../data/post-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*服务器的数据会传输到这里 */
    // 小程序总是会读取data对象来做数据绑定，这个动作称为动作A
    // 而这个动作A的执行，是在onLoad事件执行之后发生的

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*数据绑定*/

    this.setData({
      posts_key: postData.postList
    });
  },
  onPostTap: function (event){
    // event事件对象，currentTarget鼠标点击的主键，dataset所有自定义数据的集合，这自定义只有一个postId。
    var postId = event.currentTarget.dataset.postid;
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url:"post-detail/post-detail?id="+postId
    })
  }

})