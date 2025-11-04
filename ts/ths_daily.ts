/**
 * 同花顺概念和行业指数行情
 * 获取同花顺板块指数行情。注：数据版权归属同花顺，如做商业用途，请主动联系同花顺，如需帮助请联系微信：waditu_a限量：单次最大3000行数据（需6000积分），可根据指数代码、日期参数循环提取。
 */
export const ThsDailyApi = "ths_daily"

export interface ThsDailyItem {
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
  /** 平均价 */
  avg_price: number;
  /** 涨跌点位 */
  change: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量 */
  vol: number;
  /** 换手率 */
  turnover_rate: number;
  /** 总市值 */
  total_mv?: number;
  /** 流通市值 */
  float_mv?: number;
}

export interface ThsDailyParams {
  /** 指数代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
