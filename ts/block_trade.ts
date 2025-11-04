/**
 * 大宗交易
 * 大宗交易限量：单次最大1000条，总量不限制积分：300积分可调取，每分钟内限制次数，超过5000积分频次相对较高，具体请参阅积分获取办法
 */
export const BlockTradeApi = "block_trade"

export interface BlockTradeItem {
  /** TS代码 */
  ts_code: string;
  /** 交易日历 */
  trade_date: string;
  /** 成交价 */
  price: number;
  /** 成交量（万股） */
  vol: number;
  /** 成交金额 */
  amount: number;
  /** 买方营业部 */
  buyer: string;
  /** 卖方营业部 */
  seller: string;
}

export interface BlockTradeParams {
  /** TS代码（股票代码和日期至少输入一个参数） */
  ts_code?: string;
  /** 交易日期（格式：YYYYMMDD，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
