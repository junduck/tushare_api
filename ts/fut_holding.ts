/**
 * 每日持仓排名
 * 获取每日成交持仓排名数据限量：单次最大2000，总量不限制积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const FutHoldingApi = "fut_holding"

export interface FutHoldingItem {
  /** 交易日期 */
  trade_date: string;
  /** 合约代码或类型 */
  symbol: string;
  /** 期货公司会员简称 */
  broker: string;
  /** 成交量 */
  vol: number;
  /** 成交量变化 */
  vol_chg: number;
  /** 持买仓量 */
  long_hld: number;
  /** 持买仓量变化 */
  long_chg: number;
  /** 持卖仓量 */
  short_hld: number;
  /** 持卖仓量变化 */
  short_chg: number;
  /** 交易所 */
  exchange?: string;
}

export interface FutHoldingParams {
  /** 交易日期 （trade_date/symbol至少输入一个参数） */
  trade_date?: string;
  /** 合约或产品代码 */
  symbol?: string;
  /** 开始日期(YYYYMMDD格式，下同) */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 交易所代码 */
  exchange?: string;
}
