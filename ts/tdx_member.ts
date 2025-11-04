/**
 * 通达信板块成分
 * 获取通达信各板块成分股信息限量：单次最大3000条数据，可以根据日期和板块代码循环提取权限：用户积累6000积分可调取，具体请参阅积分获取办法
 */
export const TdxMemberApi = "tdx_member"

export interface TdxMemberItem {
  /** 板块代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 成分股票代码 */
  con_code: string;
  /** 成分股票名称 */
  con_name: string;
}

export interface TdxMemberParams {
  /** 板块代码：xxxxxx.TDX */
  ts_code?: string;
  /** 交易日期：格式YYYYMMDD */
  trade_date?: string;
}
