// 定义有关API调用的信息
import {
  mergeObjectDeep,
} from '../utils/index'

/**
 *  后端服务地址
 */
export const SERVER_PATH = 'http://localhost:3001'

/**
 *  获取openid接口路径
 */
export const GET_OPEN_ID = `${SERVER_PATH}/getOpenID`

/**
 *  request封装，集中处理
 */
export function request (options: wx.RequestOption) {
  // 公共处理配置
  const publicOptions = {}
  wx.request(mergeObjectDeep(publicOptions, options))
}
