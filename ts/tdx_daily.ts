/**
 * 通达信板块行情
 * 获取通达信各板块行情，包括成交和估值等数据限量：单次提取最大3000条数据，可根据板块代码和日期参数循环提取权限：用户积累6000积分可调取，具体请参阅积分获取办法
 */
export const TdxDailyApi = "tdx_daily"

export interface TdxDailyItem {
  /** 板块代码 */
  ts_code: string;
  /** 交易日期 */
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
  /** 涨跌点位 */
  change: number;
  /** 涨跌幅% */
  pct_change: number;
  /** 成交量 */
  vol: number;
  /** 成交额, 对于期货指数，该字段存储持仓量 */
  amount: number;
  /** 收盘涨速% */
  rise: string;
  /** 量比 */
  vol_ratio: number;
  /** 换手% */
  turnover_rate: number;
  /** 振幅% */
  swing: number;
  /** 上涨家数 */
  up_num: number;
  /** 下跌家数 */
  down_num: number;
  /** 涨停家数 */
  limit_up_num: number;
  /** 跌停家数 */
  limit_down_num: number;
  /** 连涨天数 */
  lu_days: number;
  /** 3日涨幅% */
  chg_3day: number;
  /** 5日涨幅% */
  chg_5day: number;
  /** 10日涨幅% */
  chg_10day: number;
  /** 20日涨幅% */
  chg_20day: number;
  /** 60日涨幅% */
  chg_60day: number;
  /** 月初至今% */
  mtd: number;
  /** 年初至今% */
  ytd: number;
  /** 一年涨幅% */
  chg_1year: number;
  /** 市盈率 */
  pe: string;
  /** 市净率 */
  pb: string;
  /** 流通市值(亿) */
  float_mv: number;
  /** AB股总市值（亿） */
  ab_total_mv: number;
  /** 流通股(亿) */
  float_share: number;
  /** 总股本(亿) */
  total_share: number;
  /** 主买净额(元) */
  bm_buy_net: number;
  /** 主买占比% */
  bm_buy_ratio: number;
  /** 主力净额 */
  bm_net: number;
  /** 主力占比% */
  bm_ratio: number;
}

export interface TdxDailyParams {
  /** 板块代码：xxxxxx.TDX */
  ts_code?: string;
  /** 交易日期，格式YYYYMMDD,下同 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
