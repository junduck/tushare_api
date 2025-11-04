/**
 * 港股通每月成交统计
 * 港股通每月成交信息，数据从2014年开始限量：单次最大1000积分：用户积5000积分可调取，请自行提高积分，具体请参阅积分获取办法
 */
export const GgtMonthlyApi = "ggt_monthly"

export interface GgtMonthlyItem {
  /** 交易日期 */
  month: string;
  /** 当月日均买入成交金额（亿元） */
  day_buy_amt: number;
  /** 当月日均买入成交笔数（万笔） */
  day_buy_vol: number;
  /** 当月日均卖出成交金额（亿元） */
  day_sell_amt: number;
  /** 当月日均卖出成交笔数（万笔） */
  day_sell_vol: number;
  /** 总买入成交金额（亿元） */
  total_buy_amt: number;
  /** 总买入成交笔数（万笔） */
  total_buy_vol: number;
  /** 总卖出成交金额（亿元） */
  total_sell_amt: number;
  /** 总卖出成交笔数（万笔） */
  total_sell_vol: number;
}

export interface GgtMonthlyParams {
  /** 月度（格式YYYYMM，下同，支持多个输入） */
  month?: string;
  /** 开始月度 */
  start_month?: string;
  /** 结束月度 */
  end_month?: string;
}
