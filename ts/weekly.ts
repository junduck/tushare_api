/**
 * 周线行情
 * 获取A股周线行情，本接口每周最后一个交易日更新，如需要使用每天更新的周线数据，请使用日度更新的周线行情接口。限量：单次最大6000行，可使用交易日期循环提取，总量不限制积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const WeeklyApi = "weekly"

export interface WeeklyItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 周收盘价 */
  close: number;
  /** 周开盘价 */
  open: number;
  /** 周最高价 */
  high: number;
  /** 周最低价 */
  low: number;
  /** 上一周收盘价 */
  pre_close: number;
  /** 周涨跌额 */
  change: number;
  /** 周涨跌 （未复权，未100，如果是复权请用 通用行情接口，如需%单位请100 ） */
  pct_chg: number;
  /** 周成交量 */
  vol: number;
  /** 周成交额 */
  amount: number;
}

export interface WeeklyParams {
  /** TS代码 （ts_code,trade_date两个参数任选一） */
  ts_code?: string;
  /** 交易日期 （每周最后一个交易日期，YYYYMMDD格式） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
