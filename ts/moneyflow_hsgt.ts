/**
 * 沪深港通资金流向
 * 获取沪股通、深股通、港股通每日资金流向数据，每次最多返回300条记录，总量不限制。每天18~20点之间完成当日更新积分要求：2000积分起，5000积分每分钟可提取500次
 */
export const MoneyflowHsgtApi = "moneyflow_hsgt"

export interface MoneyflowHsgtItem {
  /** 交易日期 */
  trade_date: string;
  /** 港股通（上海） */
  ggt_ss: number;
  /** 港股通（深圳） */
  ggt_sz: number;
  /** 沪股通（百万元） */
  hgt: number;
  /** 深股通（百万元） */
  sgt: number;
  /** 北向资金（百万元） */
  north_money: number;
  /** 南向资金（百万元） */
  south_money: number;
}

export interface MoneyflowHsgtParams {
  /** 交易日期 (二选一) */
  trade_date?: string;
  /** 开始日期 (二选一) */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
