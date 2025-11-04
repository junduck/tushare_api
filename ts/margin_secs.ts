/**
 * 融资融券标的（盘前）
 * 获取沪深京三大交易所融资融券标的（包括ETF），每天盘前更新限量：单次最大6000行数据，可根据股票代码、交易日期、交易所代码循环提取积分：2000积分可调取，5000积分无总量限制，积分越高权限越大，具体参考权限说明
 */
export const MarginSecsApi = "margin_secs"

export interface MarginSecsItem {
  /** 交易日期 */
  trade_date: string;
  /** 标的代码 */
  ts_code: string;
  /** 标的名称 */
  name: string;
  /** 交易所 */
  exchange: string;
}

export interface MarginSecsParams {
  /** 标的代码 */
  ts_code?: string;
  /** 交易日 */
  trade_date?: string;
  /** 交易所（SSE上交所 SZSE深交所 BSE北交所） */
  exchange?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
