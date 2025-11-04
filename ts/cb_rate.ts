/**
 * 可转债票面利率
 * 获取可转债票面利率限量：单次最大2000，总量不限制权限：用户需要至少5000积分才可以调取，具体请参阅积分获取办法
 */
export const CbRateApi = "cb_rate"

export interface CbRateItem {
  /** 转债代码 */
  ts_code: string;
  /** 付息频率(次/年) */
  rate_freq?: number;
  /** 付息开始日期 */
  rate_start_date?: string;
  /** 付息结束日期 */
  rate_end_date?: string;
  /** 票面利率(%) */
  coupon_rate?: number;
}

export interface CbRateParams {
  /** 转债代码，支持多值输入 */
  ts_code?: string;
}
