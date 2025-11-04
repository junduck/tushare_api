/**
 * 外汇日线行情
 * 获取外汇日线行情限量：单次最大提取1000行记录，可多次提取，总量不限制积分：用户需要至少2000积分才可以调取，但有流量控制，5000积分以上频次相对较高，积分越多权限越大，具体请参阅积分获取办法
 */
export const FxDailyApi = "fx_daily"

export interface FxDailyItem {
  /** 外汇代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 买入开盘价 */
  bid_open: number;
  /** 买入收盘价 */
  bid_close: number;
  /** 买入最高价 */
  bid_high: number;
  /** 买入最低价 */
  bid_low: number;
  /** 卖出开盘价 */
  ask_open: number;
  /** 卖出收盘价 */
  ask_close: number;
  /** 卖出最高价 */
  ask_high: number;
  /** 卖出最低价 */
  ask_low: number;
  /** 报价笔数 */
  tick_qty: number;
  /** 交易商 */
  exchange?: string;
}

export interface FxDailyParams {
  /** TS代码 */
  ts_code?: string;
  /** 交易日期（GMT，日期是格林尼治时间，比北京时间晚一天） */
  trade_date?: string;
  /** 开始日期（GMT） */
  start_date?: string;
  /** 结束日期（GMT） */
  end_date?: string;
  /** 交易商，目前只有FXCM */
  exchange?: string;
}
