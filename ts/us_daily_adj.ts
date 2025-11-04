/**
 * 美股复权行情
 * 获取美股复权行情，支持美股全市场股票，提供股本、市值、复权因子和成交信息等多个数据指标限量：单次最大可以提取8000条数据，可循环获取全部，支持分页提取要求：120积分可以试用查看数据，开通正式权限请参考权限说明文档
 */
export const UsDailyAdjApi = "us_daily_adj"

export interface UsDailyAdjItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 收盘价 */
  close: number;
  /** 开盘价 */
  open: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 昨收价 */
  pre_close: number;
  /** 涨跌额 */
  change: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量 */
  vol: number;
  /** 成交额 */
  amount: number;
  /** 平均价 */
  vwap: number;
  /** 复权因子 */
  adj_factor: number;
  /** 换手率 */
  turnover_ratio: number;
  /** 流通股本 */
  free_share: number;
  /** 总股本 */
  total_share: number;
  /** 流通市值 */
  free_mv: number;
  /** 总市值 */
  total_mv: number;
  /** 交易所代码 */
  exchange: string;
}

export interface UsDailyAdjParams {
  /** 股票代码（e.g. AAPL） */
  ts_code?: string;
  /** 交易日期（YYYYMMDD） */
  trade_date?: string;
  /** 开始日期（YYYYMMDD） */
  start_date?: string;
  /** 结束日期（YYYYMMDD） */
  end_date?: string;
  /** 交易所（NAS/NYS/OTC) */
  exchange?: string;
  /** 开始行数 */
  offset?: number;
  /** 每页行数行数 */
  limit?: number;
}
