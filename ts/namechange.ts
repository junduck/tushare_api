/**
 * 股票曾用名
 * 历史名称变更记录
 */
export const NamechangeApi = "namechange"

export interface NamechangeItem {
  /** TS代码 */
  ts_code: string;
  /** 证券名称 */
  name: string;
  /** 开始日期 */
  start_date: string;
  /** 结束日期 */
  end_date: string;
  /** 公告日期 */
  ann_date: string;
  /** 变更原因 */
  change_reason: string;
}

export interface NamechangeParams {
  /** TS代码 */
  ts_code?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
