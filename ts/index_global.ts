/**
 * 国际主要指数
 * 获取国际主要指数日线行情限量：单次最大提取4000行情数据，可循环获取，总量不限制积分：用户积6000积分可调取，积分越高频次越高，请自行提高积分，具体请参阅积分获取办法
 */
export const IndexGlobalApi = "index_global"

export interface IndexGlobalItem {
  /** TS指数代码 */
  ts_code: string;
  /** 交易日 */
  trade_date: string;
  /** 开盘点位 */
  open: number;
  /** 收盘点位 */
  close: number;
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
  /** 振幅 */
  swing: number;
  /** 成交量 （大部分无此项数据） */
  vol: number;
  /** 成交额 （大部分无此项数据） */
  amount?: number;
}
