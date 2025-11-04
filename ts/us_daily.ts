/**
 * 美股日线行情
 * 获取美股行情（未复权），包括全部股票全历史行情，以及重要的市场和估值指标限量：单次最大6000行数据，可根据日期参数循环提取，开通正式权限后也可支持分页提取全部历史要求：120积分可以试用查看数据，开通正式权限请参考权限说明文档。
 */
export const UsDailyApi = "us_daily"

export interface UsDailyItem {
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
  change?: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量 */
  vol: number;
  /** 成交额 */
  amount: number;
  /** 平均价 */
  vwap: number;
  /** 换手率 */
  turnover_ratio?: number;
  /** 总市值 */
  total_mv?: number;
  /** PE */
  pe?: number;
  /** PB */
  pb?: number;
}

export interface UsDailyParams {
  /** 股票代码（e.g. AAPL） */
  ts_code?: string;
  /** 交易日期（YYYYMMDD） */
  trade_date?: string;
  /** 开始日期（YYYYMMDD） */
  start_date?: string;
  /** 结束日期（YYYYMMDD） */
  end_date?: string;
}
