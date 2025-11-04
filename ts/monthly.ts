/**
 * 月线行情
 * 获取A股月线数据限量：单次最大4500行，总量不限制积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const MonthlyApi = "monthly"

export interface MonthlyItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 月收盘价 */
  close: number;
  /** 月开盘价 */
  open: number;
  /** 月最高价 */
  high: number;
  /** 月最低价 */
  low: number;
  /** 上月收盘价 */
  pre_close: number;
  /** 月涨跌额 */
  change: number;
  /** 月涨跌幅 （未复权，如果是复权请用 通用行情接口 ） */
  pct_chg: number;
  /** 月成交量 */
  vol: number;
  /** 月成交额 */
  amount: number;
}

export interface MonthlyParams {
  /** TS代码 （ts_code,trade_date两个参数任选一） */
  ts_code?: string;
  /** 交易日期 （每月最后一个交易日日期，YYYYMMDD格式） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
