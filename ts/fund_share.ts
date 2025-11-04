/**
 * 基金规模
 * 获取基金规模数据，包含上海和深圳ETF基金限量：单次最大提取2000行数据积分：用户需要至少2000积分可以调取，5000积分以上频次较高，具体请参阅积分获取办法
 */
export const FundShareApi = "fund_share"

export interface FundShareItem {
  /** 基金代码，支持多只基金同时提取，用逗号分隔 */
  ts_code: string;
  /** 交易（变动）日期，格式YYYYMMDD */
  trade_date: string;
  /** 基金份额（万） */
  fd_share: number;
}

export interface FundShareParams {
  /** TS基金代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 市场代码（SH上交所 ，SZ深交所） */
  market?: string;
}
