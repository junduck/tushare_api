/**
 * 做市借券交易汇总(停）
 * 做市借券交易汇总限量：单次最大可以提取5000行数据，可循环获取所有历史积分：2000积分每分钟请求200次，5000积分500次请求
 */
export const SlbLenMmApi = "slb_len_mm"

export interface SlbLenMmItem {
  /** 交易日期（YYYYMMDD） */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 期初余量(万股) */
  ope_inv: number;
  /** 融出数量(万股) */
  lent_qnt: number;
  /** 期末余量(万股) */
  cls_inv: number;
  /** 期末余额(万元) */
  end_bal: number;
}

export interface SlbLenMmParams {
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
