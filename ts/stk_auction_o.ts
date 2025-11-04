/**
 * 股票开盘集合竞价数据
 * 股票开盘9:30集合竞价数据，每天盘后更新限量：单次请求最大返回10000行数据，可根据日期循环权限：开通了股票分钟权限后可获得本接口权限，具体参考权限说明
 */
export const StkAuctionOApi = "stk_auction_o"

export interface StkAuctionOItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 开盘集合竞价收盘价 */
  close: number;
  /** 开盘集合竞价开盘价 */
  open: number;
  /** 开盘集合竞价最高价 */
  high: number;
  /** 开盘集合竞价最低价 */
  low: number;
  /** 开盘集合竞价成交量 */
  vol: number;
  /** 开盘集合竞价成交额 */
  amount: number;
  /** 开盘集合竞价均价 */
  vwap: number;
}

export interface StkAuctionOParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD) */
  trade_date?: string;
  /** 开始日期(YYYYMMDD) */
  start_date?: string;
  /** 结束日期(YYYYMMDD) */
  end_date?: string;
}
