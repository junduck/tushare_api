/**
 * 国债长期利率
 * 国债长期利率限量：单次最大可获取2000行数据，可循环获取权限：用户积累120积分可以使用，积分越高频次越高。具体请参阅积分获取办法
 */
export const UsTltrApi = "us_tltr"

export interface UsTltrItem {
  /** 日期 */
  date: string;
  /** 收益率 LT COMPOSITE (>10 Yrs) */
  ltc: number;
  /** 20年期CMT利率(TREASURY 20-Yr CMT) */
  cmt: number;
  /** 外推因子EXTRAPOLATION FACTOR */
  e_factor: number;
}

export interface UsTltrParams {
  /** 日期 */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 指定字段 */
  fields?: string;
}
