/**
 * 国债收益率曲线利率
 * 获取美国每日国债收益率曲线利率限量：单次最大可获取2000条数据权限：用户积累120积分可以使用，积分越高频次越高。具体请参阅积分获取办法
 */
export const UsTycrApi = "us_tycr"

export interface UsTycrItem {
  /** 日期 */
  date: string;
  /** 1月期 */
  m1: number;
  /** 2月期 */
  m2: number;
  /** 3月期 */
  m3: number;
  /** 4月期（数据从20221019开始） */
  m4: number;
  /** 6月期 */
  m6: number;
  /** 1年期 */
  y1: number;
  /** 2年期 */
  y2: number;
  /** 3年期 */
  y3: number;
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

export interface UsTycrParams {
  /** 日期 （YYYYMMDD格式，下同） */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 指定输出字段（e.g. fields='m1,y1'） */
  fields?: string;
}
