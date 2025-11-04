/**
 * 期权日线行情
 * 获取期权日线行情限量：单次最大15000条数据，可跟进日线或者代码循环，总量不限制积分：用户需要至少2000积分才可以调取，但有流量控制，请自行提高积分，积分越多权限越大，具体请参阅积分获取办法
 */
export const OptDailyApi = "opt_daily"

export interface OptDailyItem {
  /** TS代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 交易市场 */
  exchange: string;
  /** 昨结算价 */
  pre_settle: number;
  /** 前收盘价 */
  pre_close: number;
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
  /** 成交量(手) */
  vol: number;
  /** 成交金额(万元) */
  amount: number;
  /** 持仓量(手) */
  oi: number;
}

export interface OptDailyParams {
  /** TS合约代码（输入代码或时间至少任意一个参数） */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 交易所(SSE/SZSE/CFFEX/DCE/SHFE/CZCE） */
  exchange?: string;
}
