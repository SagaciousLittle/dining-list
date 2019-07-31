import {
  BindGetUserInfoResult,
} from '../../types'
import {
  request,
  GET_OPEN_ID,
} from '../../api/index'

Page({
  data: {

  },
  onLoad () {
    wx.login({
      success (res) {
        const { code } = res
        request({
          url: GET_OPEN_ID,
          method: 'POST',
          data: {
            code,
          },
          success (res) {
            console.log(res.data)
          }
        })
      }
    })
  },
  getUserInfo (result: BindGetUserInfoResult) {
    const {
      userInfo,
    } = result.detail
    // 没有用户信息权限，友好提示
    if (!userInfo) return wx.showModal({
      title: '',
      content: '需要获取个人信息，请务必同意哟~',
      confirmText: '好的了解',
      showCancel: false,
    })
    console.log(result.detail.cloudID)
  }
})
