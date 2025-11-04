/**
 * 周/月线行情(每日更新)
 * 股票周/月线行情(每日更新)限量：单次最大6000,可使用交易日期循环提取，总量不限制积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const StkWeeklyMonthlyApi = "stk_weekly_monthly"

export interface StkWeeklyMonthlyItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期（每周五或者月末日期） */
  trade_date: string;
  /** 计算截至日期 */
  end_date: string;
  /** 频率(周week,月month) */
  freq: string;
  /** (周/月)开盘价 */
  open: number;
  /** (周/月)最高价 */
  high: number;
  /** (周/月)最低价 */
  low: number;
  /** (周/月)收盘价 */
  close: number;
  /** 上一(周/月)收盘价 */
  pre_close: number;
  /** (周/月)成交量 */
  vol: number;
  /** (周/月)成交额 */
  amount: number;
  /** (周/月)涨跌额 */
  change: number;
  /** (周/月)涨跌幅(未复权,如果是复权请用 通用行情接口) */
  pct_chg: number;
}

export interface StkWeeklyMonthlyParams {
  /** TS代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD，下同) */
  trade_date?: string;
  /** 开始交易日期 */
  start_date?: string;
  /** 结束交易日期 */
  end_date?: string;
  /** 频率week周，month月 */
  freq?: string;
}
