/**
 * 转融资交易汇总
 * 转融通融资汇总限量：单次最大可以提取5000行数据，可循环获取所有历史积分：2000积分每分钟请求200次，5000积分500次请求
 */
export const SlbLenApi = "slb_len"

export interface SlbLenItem {
  /** 交易日期 */
  trade_date: string;
  /** 期初余额(亿元) */
  ob: number;
  /** 竞价成交金额(亿元) */
  auc_amount: number;
  /** 再借成交金额(亿元) */
  repo_amount: number;
  /** 偿还金额(亿元) */
  repay_amount: number;
  /** 期末余额(亿元) */
  cb: number;
}

export interface SlbLenParams {
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
