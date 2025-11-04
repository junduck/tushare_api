/**
 * 中信行业指数日行情
 * 获取中信行业指数日线行情限量：单次最大4000条，可循环提取积分：5000积分可调取，可通过指数代码和日期参数循环获取所有数据
 */
export const CiDailyApi = "ci_daily"

export interface CiDailyItem {
  /** 指数代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 开盘点位 */
  open: number;
  /** 最低点位 */
  low: number;
  /** 最高点位 */
  high: number;
  /** 收盘点位 */
  close: number;
  /** 昨日收盘点位 */
  pre_close: number;
  /** 涨跌点位 */
  change: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量（万股） */
  vol: number;
  /** 成交额（万元） */
  amount: number;
}

export interface CiDailyParams {
  /** 行业代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
