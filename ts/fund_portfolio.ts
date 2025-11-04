/**
 * 基金持仓
 * 获取公募基金持仓数据，季度更新积分：5000积分以上每分钟请求200次，8000积分以上每分钟请求500次，具体请参阅积分获取办法
 */
export const FundPortfolioApi = "fund_portfolio"

export interface FundPortfolioItem {
  /** TS基金代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 截止日期 */
  end_date: string;
  /** 股票代码 */
  symbol: string;
  /** 持有股票市值(元) */
  mkv: number;
  /** 持有股票数量（股） */
  amount: number;
  /** 占股票市值比 */
  stk_mkv_ratio: number;
  /** 占流通股本比例 */
  stk_float_ratio: number;
}

export interface FundPortfolioParams {
  /** 基金代码 (ts_code,ann_date,period至少输入一个参数) */
  ts_code?: string;
  /** 股票代码 */
  symbol?: string;
  /** 公告日期（YYYYMMDD格式） */
  ann_date?: string;
  /** 季度（每个季度最后一天的日期，比如20131231表示2013年年报） */
  period?: string;
  /** 报告期开始日期（YYYYMMDD格式） */
  start_date?: string;
  /** 报告期结束日期（YYYYMMDD格式） */
  end_date?: string;
}
