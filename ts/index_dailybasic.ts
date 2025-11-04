/**
 * 大盘指数每日指标
 * 目前只提供上证综指，深证成指，上证50，中证500，中小板指，创业板指的每日指标数据数据来源：Tushare社区统计计算数据历史：从2004年1月开始提供数据权限：用户需要至少400积分才可以调取，具体请参阅积分获取办法
 */
export const IndexDailybasicApi = "index_dailybasic"

export interface IndexDailybasicItem {
  /** TS代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 当日总市值（元） */
  total_mv: number;
  /** 当日流通市值（元） */
  float_mv: number;
  /** 当日总股本（股） */
  total_share: number;
  /** 当日流通股本（股） */
  float_share: number;
  /** 当日自由流通股本（股） */
  free_share: number;
  /** 换手率 */
  turnover_rate: number;
  /** 换手率(基于自由流通股本) */
  turnover_rate_f: number;
  /** 市盈率 */
  pe: number;
  /** 市盈率TTM */
  pe_ttm: number;
  /** 市净率 */
  pb: number;
}

export interface IndexDailybasicParams {
  /** 交易日期 （格式：YYYYMMDD，比如20181018，下同） */
  trade_date?: string;
  /** TS代码 */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
