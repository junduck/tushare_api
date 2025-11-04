/**
 * ETF复权因子
 * 获取基金复权因子，用于计算基金复权行情限量：单次最大提取2000行记录，可循环提取，数据总量不限制积分：用户积600积分可调取，超过5000积分以上频次相对较高。具体请参阅积分获取办法
 */
export const FundAdjApi = "fund_adj"

export interface FundAdjItem {
  /** ts基金代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 复权因子 */
  adj_factor: number;
}

export interface FundAdjParams {
  /** TS基金代码（支持多只基金输入） */
  ts_code?: string;
  /** 交易日期（格式：yyyymmdd，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 开始行数 */
  offset?: string;
  /** 最大行数 */
  limit?: string;
}
