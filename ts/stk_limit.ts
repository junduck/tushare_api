/**
 * 每日涨跌停价格
 * 获取全市场（包含A/B股和基金）每日涨跌停价格，包括涨停价格，跌停价格等，每个交易日8点40左右更新当日股票涨跌停价格。限量：单次最多提取5800条记录，可循环调取，总量不限制积分：用户积2000积分可调取，单位分钟有流控，积分越高流量越大，请自行提高积分，具体请参阅积分获取办法
 */
export const StkLimitApi = "stk_limit"

export interface StkLimitItem {
  /** 交易日期 */
  trade_date: string;
  /** TS股票代码 */
  ts_code: string;
  /** 昨日收盘价 */
  pre_close?: number;
  /** 涨停价 */
  up_limit: number;
  /** 跌停价 */
  down_limit: number;
}

export interface StkLimitParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
