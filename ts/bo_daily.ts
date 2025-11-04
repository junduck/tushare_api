/**
 * 电影日度票房
 * 获取电影日度票房数据更新：当日更新上一日数据数据历史： 数据从2018年9月开始，更多历史数据正在补充数据权限：用户需要至少500积分才可以调取，具体请参阅积分获取办法
 */
export const BoDailyApi = "bo_daily"

export interface BoDailyItem {
  /** 日期 */
  date: string;
  /** 影片名称 */
  name: string;
  /** 平均票价 */
  avg_price: number;
  /** 当日票房（万） */
  day_amount: number;
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

export interface BoDailyParams {
  /** 日期 （格式YYYYMMDD） */
  date?: string;
}
