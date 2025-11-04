/**
 * 全球财经事件
 * 获取全球财经日历、包括经济事件数据更新限量：单次最大获取100行数据积分：2000积分可调取
 */
export const EcoCalApi = "eco_cal"

export interface EcoCalItem {
  /** 日期 */
  date: string;
  /** 时间 */
  time: string;
  /** 货币代码 */
  currency: string;
  /** 国家 */
  country: string;
  /** 经济事件 */
  event: string;
  /** 今值 */
  value: string;
  /** 前值 */
  pre_value: string;
  /** 预测值 */
  fore_value: string;
}

export interface EcoCalParams {
  /** 日期（YYYYMMDD格式） */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 货币代码 */
  currency?: string;
  /** 国家（比如：中国、美国） */
  country?: string;
  /** 事件 （支持模糊匹配： *非农*） */
  event?: string;
}
