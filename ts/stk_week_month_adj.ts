/**
 * 周/月线复权行情(每日更新)
 * 股票周/月线行情(复权--每日更新)限量：单次最大6000,可使用交易日期循环提取，总量不限制积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const StkWeekMonthAdjApi = "stk_week_month_adj"

export interface StkWeekMonthAdjParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（每周五或者月末日期） */
  trade_date?: string;
  /** 计算截至日期 */
  end_date?: string;
  /** 频率(周week,月month) */
  freq?: string;
  /** (周/月)开盘价 */
  open?: number;
  /** (周/月)最高价 */
  high?: number;
  /** (周/月)最低价 */
  low?: number;
  /** (周/月)收盘价 */
  close?: number;
  /** 上一(周/月)收盘价【除权价，前复权】 */
  pre_close?: number;
  /** 前复权(周/月)开盘价 */
  open_qfq?: number;
  /** 前复权(周/月)最高价 */
  high_qfq?: number;
  /** 前复权(周/月)最低价 */
  low_qfq?: number;
  /** 前复权(周/月)收盘价 */
  close_qfq?: number;
  /** 后复权(周/月)开盘价 */
  open_hfq?: number;
  /** 后复权(周/月)最高价 */
  high_hfq?: number;
  /** 后复权(周/月)最低价 */
  low_hfq?: number;
  /** 后复权(周/月)收盘价 */
  close_hfq?: number;
  /** (周/月)成交量 */
  vol?: number;
  /** (周/月)成交额 */
  amount?: number;
  /** (周/月)涨跌额 */
  change?: number;
  /** (周/月)涨跌幅 【基于除权后的昨收计算的涨跌幅：（今收-除权昨收）/除权昨收 】 */
  pct_chg?: number;
}
