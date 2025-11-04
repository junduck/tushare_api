/**
 * 港股基础信息
 * 获取港股列表信息数量：单次可提取全部在交易的港股列表数据积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const HkBasicApi = "hk_basic"

export interface HkBasicItem {
  ts_code: string;
  /** 股票简称 */
  name: string;
  /** 公司全称 */
  fullname: string;
  /** 英文名称 */
  enname: string;
  /** 拼音 */
  cn_spell: string;
  /** 市场类别 */
  market: string;
  /** 上市状态 */
  list_status: string;
  /** 上市日期 */
  list_date: string;
  /** 退市日期 */
  delist_date: string;
  /** 交易单位 */
  trade_unit: number;
  /** ISIN代码 */
  isin: string;
  /** 货币代码 */
  curr_type: string;
}

export interface HkBasicParams {
  /** TS代码 */
  ts_code?: string;
  /** 上市状态 L上市 D退市 P暂停上市 ，默认L */
  list_status?: string;
}
