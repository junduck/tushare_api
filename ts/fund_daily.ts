/**
 * ETF日线行情
 * 获取ETF行情每日收盘后成交数据，历史超过10年限量：单次最大2000行记录，可以根据ETF代码和日期循环获取历史，总量不限制积分：需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const FundDailyApi = "fund_daily"

export interface FundDailyItem {
  /** TS代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 开盘价(元) */
  open: number;
  /** 最高价(元) */
  high: number;
  /** 最低价(元) */
  low: number;
  /** 收盘价(元) */
  close: number;
  /** 昨收盘价(元) */
  pre_close: number;
  /** 涨跌额(元) */
  change: number;
  /** 涨跌幅(%) */
  pct_chg: number;
  /** 成交量(手) */
  vol: number;
  /** 成交额(千元) */
  amount: number;
}

export interface FundDailyParams {
  /** 基金代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
