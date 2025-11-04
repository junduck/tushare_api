/**
 * 交易日历
 * 获取各大期货交易所交易日历数据积分：需2000积分才可以提取数据
 */
export const TradeCalApi = "trade_cal"

export interface TradeCalItem {
  /** 交易所 同参数部分描述 */
  exchange: string;
  /** 日历日期 */
  cal_date: string;
  /** 是否交易 0休市 1交易 */
  is_open: number;
  /** 上一个交易日 */
  pretrade_date?: string;
}

export interface TradeCalParams {
  /** 交易所 SHFE 上期所 DCE 大商所 CFFEX中金所  CZCE郑商所 INE上海国际能源交易所 */
  exchange?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 是否交易 0休市 1交易 */
  is_open?: number;
}
