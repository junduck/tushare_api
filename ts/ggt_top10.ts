/**
 * 港股通十大成交股
 * 获取港股通每日成交数据，其中包括沪市、深市详细数据，每天18~20点之间完成当日更新
 */
export const GgtTop10Api = "ggt_top10"

export interface GgtTop10Item {
  /** 交易日期 */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 收盘价 */
  close: number;
  /** 涨跌幅 */
  p_change: number;
  /** 资金排名 */
  rank: string;
  /** 市场类型 2：港股通（沪） 4：港股通（深） */
  market_type: string;
  /** 累计成交金额（元） */
  amount: number;
  /** 净买入金额（元） */
  net_amount: number;
  /** 沪市成交金额（元） */
  sh_amount: number;
  /** 沪市净买入金额（元） */
  sh_net_amount: number;
  /** 沪市买入金额（元） */
  sh_buy: number;
  /** 沪市卖出金额 */
  sh_sell: number;
  /** 深市成交金额（元） */
  sz_amount: number;
  /** 深市净买入金额（元） */
  sz_net_amount: number;
  /** 深市买入金额（元） */
  sz_buy: number;
  /** 深市卖出金额（元） */
  sz_sell: number;
}

export interface GgtTop10Params {
  /** 股票代码（二选一） */
  ts_code?: string;
  /** 交易日期（二选一） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 市场类型 2：港股通（沪） 4：港股通（深） */
  market_type?: string;
}
