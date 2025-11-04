/**
 * 期货主要品种交易周报
 * 获取期货交易所主要品种每周交易统计信息，数据从2010年3月开始权限：600积分可调取，单次最大获取4000行数据，积分越高频次越高，5000积分以上正常调取不受限制数据来源：中国证监会，本数据由Tushare社区成员CE完成规划和采集
 */
export const FutWeeklyDetailApi = "fut_weekly_detail"

export interface FutWeeklyDetailItem {
  /** 交易所代码 */
  exchange: string;
  /** 期货品种代码 */
  prd: string;
  /** 品种名称 */
  name: string;
  /** 成交量（手） */
  vol: number;
  /** 同比增减（%） */
  vol_yoy: number;
  /** 成交金额（亿元） */
  amount: number;
  /** 同比增减（%） */
  amout_yoy: number;
  /** 年累计成交总量（手） */
  cumvol: number;
  /** 同比增减（%） */
  cumvol_yoy: number;
  /** 年累计成交金额（亿元） */
  cumamt: number;
  /** 同比增减（%） */
  cumamt_yoy: number;
  /** 持仓量（手） */
  open_interest: number;
  /** 环比增减（%） */
  interest_wow: number;
  /** 本周主力合约收盘价 */
  mc_close: number;
  /** 环比涨跌（%） */
  close_wow: number;
  /** 周期 */
  week: string;
  /** 周日期 */
  week_date: string;
}

export interface FutWeeklyDetailParams {
  /** 周期（每年第几周，e.g. 202001 表示2020第1周） */
  week?: string;
  /** 期货品种（支持多品种输入，逗号分隔） */
  prd?: string;
  /** 开始周期 */
  start_week?: string;
  /** 结束周期 */
  end_week?: string;
  /** 交易所（请参考交易所说明） */
  exchange?: string;
  /** 提取的字段，e.g. fields='prd,name,vol' */
  fields?: string;
}
