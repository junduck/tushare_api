/**
 * 期货周/月线行情(每日更新)
 * 期货周/月线行情(每日更新)限量：单次最大6000
 */
export const FutWeeklyMonthlyApi = "fut_weekly_monthly"

export interface FutWeeklyMonthlyItem {
  /** 期货代码 */
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
  /** 前一(周/月)收盘价 */
  pre_close: number;
  /** (周/月)结算价 */
  settle: number;
  /** 前一(周/月)结算价 */
  pre_settle: number;
  /** (周/月)成交量(手) */
  vol: number;
  /** (周/月)成交金额(万元) */
  amount: number;
  /** (周/月)持仓量(手) */
  oi: number;
  /** (周/月)持仓量变化 */
  oi_chg: number;
  /** 交易所 */
  exchange: string;
  /** (周/月)涨跌1 收盘价-昨结算价 */
  change1: number;
  /** (周/月)涨跌2 结算价-昨结算价 */
  change2: number;
}

export interface FutWeeklyMonthlyParams {
  /** TS代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始交易日期 */
  start_date?: string;
  /** 结束交易日期 */
  end_date?: string;
  /** 频率week周，month月 */
  freq?: string;
  /** 交易所 */
  exchange?: string;
}
