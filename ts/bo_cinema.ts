/**
 * 影院日度票房
 * 获取每日各影院的票房数据数据历史： 数据从2018年9月开始，更多历史数据正在补充数据权限：用户需要至少500积分才可以调取，具体请参阅积分获取办法
 */
export const BoCinemaApi = "bo_cinema"

export interface BoCinemaItem {
  /** 日期 */
  date: string;
  /** 影院名称 */
  c_name: string;
  /** 观众人数 */
  aud_count: number;
  /** 上座率 */
  att_ratio: number;
  /** 当日票房 */
  day_amount: number;
  /** 当日场次 */
  day_showcount: number;
  /** 场均票价（元） */
  avg_price: number;
  /** 场均人次 */
  p_pc: number;
  /** 排名 */
  rank: number;
}

export interface BoCinemaParams {
  /** 日期(格式:YYYYMMDD) */
  date?: string;
}
