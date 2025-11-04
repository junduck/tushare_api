/**
 * 美股交易日历
 * 获取美股交易日历信息限量：单次最大6000，可根据日期阶段获取
 */
export const UsTradecalApi = "us_tradecal"

export interface UsTradecalItem {
  /** 日历日期 */
  cal_date: string;
  /** 是否交易 '0'休市 '1'交易 */
  is_open: number;
  /** 上一个交易日 */
  pretrade_date: string;
}

export interface UsTradecalParams {
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 是否交易 */
  is_open?: string;
}
