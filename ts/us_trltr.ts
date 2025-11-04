/**
 * 国债长期利率平均值
 * 国债实际长期利率平均值限量：单次最大可获取2000行数据，可循环获取权限：用户积累120积分可以使用，积分越高频次越高。具体请参阅积分获取办法
 */
export const UsTrltrApi = "us_trltr"

export interface UsTrltrItem {
  /** 日期 */
  date: string;
  /** 实际平均利率LT Real Average (10> Yrs) */
  ltr_avg: number;
}

export interface UsTrltrParams {
  /** 日期 */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 指定字段 */
  fields?: string;
}
