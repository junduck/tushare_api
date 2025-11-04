/**
 * 大盘资金流向（DC）
 * 获取东方财富大盘资金流向数据，每日盘后更新限量：单次最大3000条，可根据日期或日期区间循环获取积分：120积分可试用，5000积分可正式调取，具体请参阅积分获取办法
 */
export const MoneyflowMktDcApi = "moneyflow_mkt_dc"

export interface MoneyflowMktDcItem {
  /** 交易日期 */
  trade_date: string;
  /** 上证收盘价（点） */
  close_sh: number;
  /** 上证涨跌幅(%) */
  pct_change_sh: number;
  /** 深证收盘价（点） */
  close_sz: number;
  /** 深证涨跌幅(%) */
  pct_change_sz: number;
  /** 今日主力净流入 净额（元） */
  net_amount: number;
  /** 今日主力净流入净占比% */
  net_amount_rate: number;
  /** 今日超大单净流入 净额（元） */
  buy_elg_amount: number;
  /** 今日超大单净流入 净占比% */
  buy_elg_amount_rate: number;
  /** 今日大单净流入 净额（元） */
  buy_lg_amount: number;
  /** 今日大单净流入 净占比% */
  buy_lg_amount_rate: number;
  /** 今日中单净流入 净额（元） */
  buy_md_amount: number;
  /** 今日中单净流入 净占比% */
  buy_md_amount_rate: number;
  /** 今日小单净流入 净额（元） */
  buy_sm_amount: number;
  /** 今日小单净流入 净占比% */
  buy_sm_amount_rate: number;
}

export interface MoneyflowMktDcParams {
  /** 交易日期(YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
