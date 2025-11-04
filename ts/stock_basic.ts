/**
 * 股票列表
 * 获取基础信息数据，包括股票代码、名称、上市日期、退市日期等权限：2000积分起。此接口是基础信息，调取一次就可以拉取完，建议保存倒本地存储后使用
 */
export const StockBasicApi = "stock_basic"

export interface StockBasicItem {
  /** TS代码 */
  ts_code: string;
  /** 股票代码 */
  symbol: string;
  /** 股票名称 */
  name: string;
  /** 地域 */
  area: string;
  /** 所属行业 */
  industry: string;
  /** 股票全称 */
  fullname?: string;
  /** 英文全称 */
  enname?: string;
  /** 拼音缩写 */
  cnspell: string;
  /** 市场类型（主板/创业板/科创板/CDR） */
  market: string;
  /** 交易所代码 */
  exchange?: string;
  /** 交易货币 */
  curr_type?: string;
  /** 上市状态 L上市 D退市 P暂停上市 */
  list_status?: string;
  /** 上市日期 */
  list_date: string;
  /** 退市日期 */
  delist_date?: string;
  /** 是否沪深港通标的，N否 H沪股通 S深股通 */
  is_hs?: string;
  /** 实控人名称 */
  act_name: string;
  /** 实控人企业性质 */
  act_ent_type: string;
}

export interface StockBasicParams {
  /** TS股票代码 */
  ts_code?: string;
  /** 名称 */
  name?: string;
  /** 市场类别 （主板/创业板/科创板/CDR/北交所） */
  market?: string;
  /** 上市状态 L上市 D退市 P暂停上市，默认是L */
  list_status?: string;
  /** 交易所 SSE上交所 SZSE深交所 BSE北交所 */
  exchange?: string;
  /** 是否沪深港通标的，N否 H沪股通 S深股通 */
  is_hs?: string;
}
