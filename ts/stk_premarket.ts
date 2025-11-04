/**
 * 每日股本（盘前）
 * 每日开盘前获取当日股票的股本情况，包括总股本和流通股本，涨跌停价格等。限量：单次最大8000条数据，可循环提取权限：与积分无关，需单独开权限
 */
export const StkPremarketApi = "stk_premarket"

export interface StkPremarketItem {
  /** 交易日期 */
  trade_date: string;
  /** TS股票代码 */
  ts_code: string;
  /** 总股本（万股） */
  total_share: number;
  /** 流通股本（万股） */
  float_share: number;
  /** 昨日收盘价 */
  pre_close: number;
  /** 今日涨停价 */
  up_limit: number;
  /** 今日跌停价 */
  down_limit: number;
}

export interface StkPremarketParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
