/**
 * 深圳市场每日交易情况
 * 获取深圳市场每日交易概况限量：单次最大2000，可循环获取，总量不限制权限：用户积2000积分可调取， 频次有限制，积分越高每分钟调取频次越高，5000积分以上频次相对较高，积分获取方法请参阅积分获取办法
 */
export const SzDailyInfoApi = "sz_daily_info"

export interface SzDailyInfoItem {
  trade_date: string;
  /** 市场类型 */
  ts_code: string;
  /** 股票个数 */
  count: number;
  /** 成交金额 */
  amount: number;
  /** 成交量 */
  vol: string;
  /** 总股本 */
  total_share: number;
  /** 总市值 */
  total_mv: number;
  /** 流通股票 */
  float_share: number;
  /** 流通市值 */
  float_mv: number;
}

export interface SzDailyInfoParams {
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 板块代码 */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
