/**
 * 广州民间借贷利率
 * 广州民间借贷利率限量：不限量，一次可取全部指标全部历史数据积分：用户需要积攒2000积分可调取，具体请参阅积分获取办法数据来源：广州民间金融街
 */
export const GzIndexApi = "gz_index"

export interface GzIndexItem {
  /** 日期 */
  date: string;
  /** 小额贷市场平均利率（十天） （单位：%，下同） */
  d10_rate: number;
  /** 小额贷市场平均利率（一月期） */
  m1_rate: number;
  /** 小额贷市场平均利率（三月期） */
  m3_rate: number;
  /** 小额贷市场平均利率（六月期） */
  m6_rate: number;
  /** 小额贷市场平均利率（一年期） */
  m12_rate: number;
  /** 小额贷市场平均利率（长期） */
  long_rate: number;
}

export interface GzIndexParams {
  /** 日期 */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
