/**
 * 国债实际收益率曲线利率
 * 国债实际收益率曲线利率限量：单次最大可获取2000行数据，可循环获取权限：用户积累120积分可以使用，积分越高频次越高。具体请参阅积分获取办法
 */
export const UsTrycrApi = "us_trycr"

export interface UsTrycrItem {
  /** 日期 */
  date: string;
  /** 5年期 */
  y5: number;
  /** 7年期 */
  y7: number;
  /** 10年期 */
  y10: number;
  /** 20年期 */
  y20: number;
  /** 30年期 */
  y30: number;
}

export interface UsTrycrParams {
  /** 日期 （YYYYMMDD格式，下同） */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 指定输出字段 */
  fields?: string;
}
