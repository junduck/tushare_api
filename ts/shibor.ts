/**
 * Shibor利率
 * shibor利率限量：单次最大2000，总量不限制，可通过设置开始和结束日期分段获取积分：用户积累120积分可以调取，具体请参阅积分获取办法
 */
export const ShiborApi = "shibor"

export interface ShiborItem {
  /** 日期 */
  date: string;
  /** 隔夜 */
  on: number;
  /** 1周 */
  p1w: number;
  /** 2周 */
  p2w: number;
  /** 1个月 */
  p1m: number;
  /** 3个月 */
  p3m: number;
  /** 6个月 */
  p6m: number;
  /** 9个月 */
  p9m: number;
  /** 1年 */
  p1y: number;
}

export interface ShiborParams {
  /** 日期 (日期输入格式：YYYYMMDD，下同) */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
