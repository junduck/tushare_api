/**
 * 电影周度票房
 * 获取周度票房数据数据更新：本周更新上一周数据数据历史： 数据从2008年第一周开始，超过10年历史数据。数据权限：用户需要至少500积分才可以调取，具体请参阅积分获取办法
 */
export const BoWeeklyApi = "bo_weekly"

export interface BoWeeklyItem {
  /** 日期 */
  date: string;
  /** 影片名称 */
  name: string;
  /** 平均票价 */
  avg_price: number;
  /** 当周票房（万） */
  week_amount: number;
  /** 累计票房（万） */
  total: number;
  /** 上映天数 */
  list_day: number;
  /** 场均人次 */
  p_pc: number;
  /** 口碑指数 */
  wom_index: number;
  /** 环比变化 （%） */
  up_ratio: number;
  /** 排名 */
  rank: number;
}

export interface BoWeeklyParams {
  /** 日期（每周一日期，格式YYYYMMDD） */
  date?: string;
}
