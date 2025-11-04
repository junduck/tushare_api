/**
 * 开盘竞价成交（当日）
 * 获取当日个股和ETF的集合竞价成交情况，每天9点25~29分之间可以获取当日的集合竞价成交数据限量：单次最大返回8000行数据，可根据日期或代码循环获取历史积分：本接口是单独开权限的数据，已经开通了股票分钟权限的用户可自动获得本接口权限，单独申请权限请参考权限列表。
 */
export const StkAuctionApi = "stk_auction"

export interface StkAuctionItem {
  /** 股票代码 */
  ts_code: string;
  /** 数据日期 */
  trade_date: string;
  /** 成交量（股） */
  vol: number;
  /** 成交均价（元） */
  price: number;
  /** 成交金额（元） */
  amount: number;
  /** 昨收价（元） */
  pre_close: number;
  /** 换手率（%） */
  turnover_rate: number;
  /** 量比 */
  volume_ratio: number;
  /** 流通股本（万股） */
  float_share: number;
}

export interface StkAuctionParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
