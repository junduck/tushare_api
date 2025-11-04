/**
 * 新闻通讯（长篇）
 * 获取长篇通讯信息，覆盖主要新闻资讯网站，提供超过8年历史新闻。限量：单次最大400行记录，可循环提取保存到本地。积分：本接口需单独开权限（跟积分没关系），具体请参阅权限说明
 */
export const MajorNewsApi = "major_news"

export interface MajorNewsItem {
  /** 标题 */
  title: string;
  /** 内容 (默认不显示，需要在fields里指定) */
  content?: string;
  /** 发布时间 */
  pub_time: string;
  /** 来源网站 */
  src: string;
}

export interface MajorNewsParams {
  /** 新闻来源（新华网、凤凰财经、同花顺、新浪财经、华尔街见闻、中证网、财新网、第一财经、财联社） */
  src?: string;
  /** 新闻发布开始时间，e.g. 2018-11-21 00:00:00 */
  start_date?: string;
  /** 新闻发布结束时间，e.g. 2018-11-22 00:00:00 */
  end_date?: string;
}
