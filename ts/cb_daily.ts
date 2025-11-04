/**
 * 可转债行情
 * 获取可转债行情限量：单次最大2000条，可多次提取，总量不限制积分：用户需要至少2000积分才可以调取，5000积分以上频次相对较高，积分越多权限越大，具体请参阅积分获取办法
 */
export const CbDailyApi = "cb_daily"

export interface CbDailyItem {
  /** 转债代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 昨收盘价(元) */
  pre_close: number;
  /** 开盘价(元) */
  open: number;
  /** 最高价(元) */
  high: number;
  /** 最低价(元) */
  low: number;
  /** 收盘价(元) */
  close: number;
  /** 涨跌(元) */
  change: number;
  /** 涨跌幅(%) */
  pct_chg: number;
  /** 成交量(手) */
  vol: number;
  /** 成交金额(万元) */
  amount: number;
  /** 纯债价值 */
  bond_value?: number;
  /** 纯债溢价率(%) */
  bond_over_rate?: number;
  /** 转股价值 */
  cb_value?: number;
  /** 转股溢价率(%) */
  cb_over_rate?: number;
}

export interface CbDailyParams {
  /** TS代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
