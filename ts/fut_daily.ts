/**
 * 日线行情
 * 期货日线行情数据限量：单次最大2000条，总量不限制积分：用户需要至少2000积分才可以调取，未来可能调整积分，请尽量多的积累积分。具体请参阅积分获取办法
 */
export const FutDailyApi = "fut_daily"

export interface FutDailyItem {
  /** TS合约代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 昨收盘价 */
  pre_close: number;
  /** 昨结算价 */
  pre_settle: number;
  /** 开盘价 */
  open: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 收盘价 */
  close: number;
  /** 结算价 */
  settle: number;
  /** 涨跌1 收盘价-昨结算价 */
  change1: number;
  /** 涨跌2 结算价-昨结算价 */
  change2: number;
  /** 成交量(手) */
  vol: number;
  /** 成交金额(万元) */
  amount: number;
  /** 持仓量(手) */
  oi: number;
  /** 持仓量变化 */
  oi_chg: number;
  /** 交割结算价 */
  delv_settle?: number;
}

export interface FutDailyParams {
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 合约代码 */
  ts_code?: string;
  /** 交易所代码 */
  exchange?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
