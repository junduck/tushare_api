/**
 * ETF基准指数
 * 获取ETF基准指数列表信息限量：单次请求最大返回5000行数据（当前未超过2000个）权限：用户积累8000积分可调取，具体请参阅积分获取办法
 */
export const EtfIndexApi = "etf_index"

export interface EtfIndexItem {
  /** 指数代码 */
  ts_code: string;
  /** 指数全称 */
  indx_name: string;
  /** 指数简称 */
  indx_csname: string;
  /** 指数发布机构 */
  pub_party_name: string;
  /** 指数发布日期 */
  pub_date: string;
  /** 指数基日 */
  base_date: string;
  /** 指数基点(点) */
  bp: number;
  /** 指数成份证券调整周期 */
  adj_circle: string;
}

export interface EtfIndexParams {
  /** 指数代码 */
  ts_code?: string;
  /** 发布日期（格式：YYYYMMDD） */
  pub_date?: string;
  /** 指数基期（格式：YYYYMMDD） */
  base_date?: string;
}
