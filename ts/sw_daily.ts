/**
 * 申万行业指数日行情
 * 获取申万行业日线行情（默认是申万2021版行情）限量：单次最大4000行数据，可通过指数代码和日期参数循环提取，5000积分可调取
 */
export const SwDailyApi = "sw_daily"

export interface SwDailyItem {
  /** 指数代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 指数名称 */
  name: string;
  /** 开盘点位 */
  open: number;
  /** 最低点位 */
  low: number;
  /** 最高点位 */
  high: number;
  /** 收盘点位 */
  close: number;
  /** 涨跌点位 */
  change: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量（万股） */
  vol: number;
  /** 成交额（万元） */
  amount: number;
  /** 市盈率 */
  pe: number;
  /** 市净率 */
  pb: number;
  /** 流通市值（万元） */
  float_mv: number;
  /** 总市值（万元） */
  total_mv: number;
}

export interface SwDailyParams {
  /** 行业代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
