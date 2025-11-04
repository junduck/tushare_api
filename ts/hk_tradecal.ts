/**
 * 港股交易日历
 * 获取交易日历限量：单次最大2000权限：用户积累2000积分才可调取
 */
export const HkTradecalApi = "hk_tradecal"

export interface HkTradecalItem {
  /** 日历日期 */
  cal_date: string;
  /** 是否交易 '0'休市 '1'交易 */
  is_open: number;
  /** 上一个交易日 */
  pretrade_date: string;
}

export interface HkTradecalParams {
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 是否交易 '0'休市 '1'交易 */
  is_open?: string;
}
