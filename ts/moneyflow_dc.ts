/**
 * 个股资金流向（DC）
 * 获取东方财富个股资金流向数据，每日盘后更新，数据开始于20230911限量：单次最大获取6000条数据，可根据日期或股票代码循环提取数据积分：用户需要至少5000积分才可以调取，具体请参阅积分获取办法
 */
export const MoneyflowDcApi = "moneyflow_dc"

export interface MoneyflowDcItem {
  /** 交易日期 */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 涨跌幅 */
  pct_change: number;
  /** 最新价 */
  close: number;
  /** 今日主力净流入额（万元） */
  net_amount: number;
  /** 今日主力净流入净占比（%） */
  net_amount_rate: number;
  /** 今日超大单净流入额（万元） */
  buy_elg_amount: number;
  /** 今日超大单净流入占比（%） */
  buy_elg_amount_rate: number;
  /** 今日大单净流入额（万元） */
  buy_lg_amount: number;
  /** 今日大单净流入占比（%） */
  buy_lg_amount_rate: number;
  /** 今日中单净流入额（万元） */
  buy_md_amount: number;
  /** 今日中单净流入占比（%） */
  buy_md_amount_rate: number;
  /** 今日小单净流入额（万元） */
  buy_sm_amount: number;
  /** 今日小单净流入占比（%） */
  buy_sm_amount_rate: number;
}

export interface MoneyflowDcParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
