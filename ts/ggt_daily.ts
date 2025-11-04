/**
 * 港股通每日成交统计
 * 获取港股通每日成交信息，数据从2014年开始限量：单次最大1000，总量数据不限制积分：用户积2000积分可调取，5000积分以上频次相对较高，请自行提高积分，具体请参阅积分获取办法
 */
export const GgtDailyApi = "ggt_daily"

export interface GgtDailyItem {
  /** 交易日期 */
  trade_date: string;
  /** 买入成交金额（亿元） */
  buy_amount: number;
  /** 买入成交笔数（万笔） */
  buy_volume: number;
  /** 卖出成交金额（亿元） */
  sell_amount: number;
  /** 卖出成交笔数（万笔） */
  sell_volume: number;
}

export interface GgtDailyParams {
  /** 交易日期 （格式YYYYMMDD，下同。支持单日和多日输入） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
