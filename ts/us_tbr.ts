/**
 * 短期国债利率
 * 获取美国短期国债利率数据限量：单次最大可获取2000行数据，可循环获取权限：用户积累120积分可以使用，积分越高频次越高。具体请参阅积分获取办法
 */
export const UsTbrApi = "us_tbr"

export interface UsTbrItem {
  /** 日期 */
  date: string;
  /** 4周银行折现收益率 */
  w4_bd: number;
  /** 4周票面利率 */
  w4_ce: number;
  /** 8周银行折现收益率 */
  w8_bd: number;
  /** 8周票面利率 */
  w8_ce: number;
  /** 13周银行折现收益率 */
  w13_bd: number;
  /** 13周票面利率 */
  w13_ce: number;
  /** 17周银行折现收益率（数据从20221019开始） */
  w17_bd: number;
  /** 17周票面利率（数据从20221019开始） */
  w17_ce: number;
  /** 26周银行折现收益率 */
  w26_bd: number;
  /** 26周票面利率 */
  w26_ce: number;
  /** 52周银行折现收益率 */
  w52_bd: number;
  /** 52周票面利率 */
  w52_ce: number;
}

export interface UsTbrParams {
  /** 日期 */
  date?: string;
  /** 开始日期(YYYYMMDD格式) */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 指定输出字段(e.g. fields='w4_bd,w52_ce') */
  fields?: string;
}
