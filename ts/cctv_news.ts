/**
 * 新闻联播文字稿
 * 获取新闻联播文字稿数据，数据开始于2006年6月，超过12年历史限量：可根据日期参数循环提取，总量不限制积分：本接口需单独开权限（跟积分没关系），具体请参阅权限说明
 */
export const CctvNewsApi = "cctv_news"

export interface CctvNewsItem {
  /** 日期 */
  date: string;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
}

export interface CctvNewsParams {
  /** 日期（输入格式：YYYYMMDD 比如：20181211） */
  date?: string;
}
