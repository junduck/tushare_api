/**
 * LPR贷款基础利率
 * LPR贷款基础利率限量：单次最大4000(相当于单次可提取18年历史)，总量不限制，可通过设置开始和结束日期分段获取积分：用户积累120积分可以调取，具体请参阅积分获取办法
 */
export const ShiborLprApi = "shibor_lpr"

export interface ShiborLprItem {
  /** 日期 */
  date: string;
  /** 1年贷款利率 */
  p1y: number;
  /** 5年贷款利率 */
  p5y: number;
}

export interface ShiborLprParams {
  /** 日期  (日期输入格式：YYYYMMDD，下同) */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
