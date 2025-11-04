/**
 * Shibor报价数据
 * Shibor报价数据限量：单次最大4000行数据，总量不限制，可通过设置开始和结束日期分段获取积分：用户积累120积分可以调取，具体请参阅积分获取办法
 */
export const ShiborQuoteApi = "shibor_quote"

export interface ShiborQuoteItem {
  /** 日期 */
  date: string;
  /** 报价银行 */
  bank: string;
  /** 隔夜_Bid */
  on_b: number;
  /** 隔夜_Ask */
  on_a: number;
  /** 1周_Bid */
  p1w_b: number;
  /** 1周_Ask */
  p1w_a: number;
  /** 2周_Bid */
  p2w_b: number;
  /** 2周_Ask */
  p2w_a: number;
  /** 1月_Bid */
  p1m_b: number;
  /** 1月_Ask */
  p1m_a: number;
  /** 3月_Bid */
  p3m_b: number;
  /** 3月_Ask */
  p3m_a: number;
  /** 6月_Bid */
  p6m_b: number;
  /** 6月_Ask */
  p6m_a: number;
  /** 9月_Bid */
  p9m_b: number;
  /** 9月_Ask */
  p9m_a: number;
  /** 1年_Bid */
  p1y_b: number;
  /** 1年_Ask */
  p1y_a: number;
}

export interface ShiborQuoteParams {
  /** 日期 (日期输入格式：YYYYMMDD，下同) */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 银行名称 （中文名称，例如 农业银行） */
  bank?: string;
}
