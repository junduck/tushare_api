/**
 * 新闻快讯（短讯）
 * 获取主流新闻网站的快讯新闻数据,提供超过6年以上历史新闻。限量：单次最大1500条新闻，可根据时间参数循环提取历史积分：本接口需单独开权限（跟积分没关系），具体请参阅权限说明
 */
export const NewsApi = "news"

export interface NewsItem {
  /** 新闻时间 */
  datetime: string;
  /** 内容 */
  content: string;
  /** 标题 */
  title: string;
  /** 分类 */
  channels?: string;
}

export interface NewsParams {
  /** 开始日期(格式：2018-11-20 09:00:00） */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 新闻来源 见下表 */
  src?: string;
}
