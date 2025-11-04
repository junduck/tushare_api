/**
 * 复权因子
 * 本接口由Tushare自行生产，获取股票复权因子，可提取单只股票全部历史复权因子，也可以提取单日全部股票的复权因子。积分要求：2000积分起，5000以上可高频调取
 */
export const AdjFactorApi = "adj_factor"

export interface AdjFactorItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 复权因子 */
  adj_factor: number;
}

export interface AdjFactorParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
