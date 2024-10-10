/**
 * 用户信息
 */
export interface BubbleItem {
  // id
  id: number
  // 推荐内容
  content: string
}

/**
 * 上下布局
 */

export interface BubbleList {
  // id
  id: number
  // 图标
  icon: string
  // 标签名
  title: string
}

/**
 * 推荐项目
 */

export interface BubbleRecommen {
  // id
  id: number
  // 图片
  Image: string
  // 标题
  title: string
  // 内容
  content: string
  // 捐赠人数
  netizen: string
  // 添加一个判断是否显示文本的属性
  isVisible: boolean

}
