/**
 * 转融券交易明细(停）
 * 转融券交易明细限量：单次最大可以提取5000行数据，可循环获取所有历史积分：2000积分每分钟请求200次，5000积分500次请求
 */
export const SlbSecDetailApi = "slb_sec_detail"

export interface SlbSecDetailItem {
  /** 交易日期（YYYYMMDD） */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 期 限(天) */
  tenor: string;
  /** 融出费率(%) */
  fee_rate: number;
  /** 转融券融出数量(万股) */
  lent_qnt: number;
}

export interface SlbSecDetailParams {
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
