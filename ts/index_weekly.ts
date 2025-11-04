/**
 * 指数周线行情
 * 获取指数周线行情限量：单次最大1000行记录，可分批获取，总量不限制积分：用户需要至少600积分才可以调取，积分越多频次越高，具体请参阅积分获取办法
 */
export const IndexWeeklyApi = "index_weekly"

export interface IndexWeeklyItem {
  /** TS指数代码 */
  ts_code: string;
  /** 交易日 */
  trade_date: string;
  /** 收盘点位 */
  close: number;
  /** 开盘点位 */
  open: number;
  /** 最高点位 */
  high: number;
  /** 最低点位 */
  low: number;
  /** 昨日收盘点 */
  pre_close: number;
  /** 涨跌点位 */
  change: number;
  /** 涨跌幅 */
  pct_chg: number;
  /** 成交量（手） */
  vol: number;
  /** 成交额（千元） */
  amount: number;
}

export interface IndexWeeklyParams {
  /** TS代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
