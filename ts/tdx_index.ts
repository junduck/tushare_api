/**
 * 通达信板块信息
 * 获取通达信板块基础信息，包括概念板块、行业、风格、地域等限量：单次最大1000条数据，可根据日期参数循环提取权限：用户积累6000积分可调取，具体请参阅积分获取办法
 */
export const TdxIndexApi = "tdx_index"

export interface TdxIndexItem {
  /** 板块代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 板块名称 */
  name: string;
  /** 板块类型 */
  idx_type: string;
  /** 成分个数 */
  idx_count: number;
  /** 总股本(亿) */
  total_share: number;
  /** 流通股(亿) */
  float_share: number;
  /** 总市值(亿) */
  total_mv: number;
  /** 流通市值(亿) */
  float_mv: number;
}

export interface TdxIndexParams {
  /** 板块代码：xxxxxx.TDX */
  ts_code?: string;
  /** 交易日期(格式：YYYYMMDD） */
  trade_date?: string;
  /** 板块类型：概念板块、行业板块、风格板块、地区板块 */
  idx_type?: string;
}
