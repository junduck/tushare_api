/**
 * 财报披露日期表
 * 获取财报披露计划日期限量：单次最大3000，总量不限制积分：用户需要至少500积分才可以调取，积分越多权限越大，具体请参阅积分获取办法
 */
export const DisclosureDateApi = "disclosure_date"

export interface DisclosureDateItem {
  /** TS代码 */
  ts_code: string;
  /** 最新披露公告日 */
  ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 预计披露日期 */
  pre_date: string;
  /** 实际披露日期 */
  actual_date: string;
  /** 披露日期修正记录 */
  modify_date?: string;
}

export interface DisclosureDateParams {
  /** TS股票代码 */
  ts_code?: string;
  /** 财报周期（每个季度最后一天的日期，比如20181231表示2018年年报，20180630表示中报) */
  end_date?: string;
  /** 计划披露日期 */
  pre_date?: string;
  /** 最新披露公告日 */
  ann_date?: string;
  /** 实际披露日期 */
  actual_date?: string;
}
