/**
 * 合约信息
 * 获取期货合约列表数据限量：单次最大10000积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const FutBasicApi = "fut_basic"

export interface FutBasicItem {
  /** 合约代码 */
  ts_code: string;
  /** 交易标识 */
  symbol: string;
  /** 交易市场 */
  exchange: string;
  /** 中文简称 */
  name: string;
  /** 合约产品代码 */
  fut_code: string;
  /** 合约乘数(只适用于国债期货、指数期货) */
  multiplier: number;
  /** 交易计量单位 */
  trade_unit: string;
  /** 交易单位(每手) */
  per_unit: number;
  /** 报价单位 */
  quote_unit: string;
  /** 最小报价单位说明 */
  quote_unit_desc: string;
  /** 交割方式说明 */
  d_mode_desc: string;
  /** 上市日期 */
  list_date: string;
  /** 最后交易日期 */
  delist_date: string;
  /** 交割月份 */
  d_month: string;
  /** 最后交割日 */
  last_ddate: string;
  /** 交易时间说明 */
  trade_time_desc?: string;
}

export interface FutBasicParams {
  /** 交易所代码 CFFEX-中金所 DCE-大商所 CZCE-郑商所 SHFE-上期所 INE-上海国际能源交易中心 GFEX-广州期货交易所 */
  exchange?: string;
  /** 合约类型 (1 普通合约 2主力与连续合约 默认取全部) */
  fut_type?: string;
  /** 标准合约代码，如白银AG、AP鲜苹果等 */
  fut_code?: string;
  /** 上市开始日期(格式YYYYMMDD，从某日开始以来所有合约） */
  list_date?: string;
}
