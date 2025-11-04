/**
 * 指数基本信息
 * 获取指数基础信息。
 */
export const IndexBasicApi = "index_basic"

export interface IndexBasicItem {
  /** TS代码 */
  ts_code: string;
  /** 简称 */
  name: string;
  /** 指数全称 */
  fullname: string;
  /** 市场 */
  market: string;
  /** 发布方 */
  publisher: string;
  /** 指数风格 */
  index_type: string;
  /** 指数类别 */
  category: string;
  /** 基期 */
  base_date: string;
  /** 基点 */
  base_point: number;
  /** 发布日期 */
  list_date: string;
  /** 加权方式 */
  weight_rule: string;
  /** 描述 */
  desc: string;
  /** 终止日期 */
  exp_date: string;
}

export interface IndexBasicParams {
  /** 指数代码 */
  ts_code?: string;
  /** 指数简称 */
  name?: string;
  /** 交易所或服务商(默认SSE) */
  market?: string;
  /** 发布商 */
  publisher?: string;
  /** 指数类别 */
  category?: string;
}
