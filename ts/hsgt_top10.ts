/**
 * 沪深股通十大成交股
 * 获取沪股通、深股通每日前十大成交详细数据，每天18~20点之间完成当日更新
 */
export const HsgtTop10Api = "hsgt_top10"

export interface HsgtTop10Item {
  /** 交易日期 */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 收盘价 */
  close: number;
  /** 涨跌额 */
  change: number;
  /** 资金排名 */
  rank: number;
  /** 市场类型（1：沪市 3：深市） */
  market_type: string;
  /** 成交金额（元） */
  amount: number;
  /** 净成交金额（元） */
  net_amount: number;
  /** 买入金额（元） */
  buy: number;
  /** 卖出金额（元） */
  sell: number;
}

export interface HsgtTop10Params {
  /** 股票代码（二选一） */
  ts_code?: string;
  /** 交易日期（二选一） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 市场类型（1：沪市 3：深市） */
  market_type?: string;
}
