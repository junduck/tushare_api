/**
 * 历史日线
 * 获取股票行情数据，或通过通用行情接口获取数据，包含了前后复权数据
 */
export const DailyApi = "daily"

export interface DailyItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 开盘价 */
  open: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 收盘价 */
  close: number;
  /** 昨收价【除权价，前复权】 */
  pre_close: number;
  /** 涨跌额 */
  change: number;
  /** 涨跌幅 【基于除权后的昨收计算的涨跌幅：（今收-除权昨收）/除权昨收 】 */
  pct_chg: number;
  /** 成交量 （手） */
  vol: number;
  /** 成交额 （千元） */
  amount: number;
}

export interface DailyParams {
  /** 股票代码（支持多个股票同时提取，逗号分隔） */
  ts_code?: string;
  /** 交易日期（YYYYMMDD） */
  trade_date?: string;
  /** 开始日期(YYYYMMDD) */
  start_date?: string;
  /** 结束日期(YYYYMMDD) */
  end_date?: string;
}
