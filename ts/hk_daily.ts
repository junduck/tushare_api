/**
 * 港股日线行情
 * 获取港股每日增量和历史行情，每日18点左右更新当日数据限量：单次最大提取5000行记录，可多次提取，总量不限制积分：本接口单独开权限，具体请参阅权限说明
 */
export const HkDailyApi = "hk_daily"

export interface HkDailyItem {
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
  /** 昨收价 */
  pre_close: number;
  /** 涨跌额 */
  change: number;
  /** 涨跌幅(%) */
  pct_chg: number;
  /** 成交量(股) */
  vol: number;
  /** 成交额(元) */
  amount: number;
}

export interface HkDailyParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
