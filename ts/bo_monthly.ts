/**
 * 电影月度票房
 * 获取电影月度票房数据数据更新：本月更新上一月数据数据历史： 数据从2008年1月1日开始，超过10年历史数据。数据权限：用户需要至少500积分才可以调取，具体请参阅积分获取办法
 */
export const BoMonthlyApi = "bo_monthly"

export interface BoMonthlyItem {
  /** 日期 */
  date: string;
  /** 影片名称 */
  name: string;
  /** 上映日期 */
  list_date: string;
  /** 平均票价 */
  avg_price: number;
  /** 当月票房（万） */
  month_amount: number;
  /** 月内天数 */
  list_day: number;
  /** 场均人次 */
  p_pc: number;
  /** 口碑指数 */
  wom_index: number;
  /** 月度占比（%） */
  m_ratio: number;
  /** 排名 */
  rank: number;
}

export interface BoMonthlyParams {
  /** 日期（每月1号，格式YYYYMMDD） */
  date?: string;
}
