/**
 * 债券回购日行情
 * 债券回购日行情限量：单次最大2000条，可多次提取，总量不限制权限：用户需要累积2000积分才可以调取，具体请参阅积分获取办法
 */
export const RepoDailyApi = "repo_daily"

export interface RepoDailyItem {
  /** TS代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 期限品种 */
  repo_maturity: string;
  /** 前收盘(%) */
  pre_close: number;
  /** 开盘价(%) */
  open: number;
  /** 最高价(%) */
  high: number;
  /** 最低价(%) */
  low: number;
  /** 收盘价(%) */
  close: number;
  /** 加权价(%) */
  weight: number;
  /** 加权价(利率债)(%) */
  weight_r: number;
  /** 成交金额(万元) */
  amount: number;
  /** 成交笔数(笔) */
  num: number;
}

export interface RepoDailyParams {
  /** TS代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
