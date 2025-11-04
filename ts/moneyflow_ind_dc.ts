/**
 * 板块资金流向（DC）
 * 获取东方财富板块资金流向，每天盘后更新限量：单次最大可调取5000条数据，可以根据日期和代码循环提取全部数据积分：5000积分可以调取，具体请参阅积分获取办法
 */
export const MoneyflowIndDcApi = "moneyflow_ind_dc"

export interface MoneyflowIndDcItem {
  /** 交易日期 */
  trade_date: string;
  /** 数据类型 */
  content_type: string;
  /** DC板块代码（行业、概念、地域） */
  ts_code: string;
  /** 板块名称 */
  name: string;
  /** 板块涨跌幅（%） */
  pct_change: number;
  /** 板块最新指数 */
  close: number;
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
  /** 今日主力净流入最大股 */
  buy_sm_amount_stock: string;
  /** 序号 */
  rank: number;
}

export interface MoneyflowIndDcParams {
  /** 代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 资金类型(行业、概念、地域) */
  content_type?: string;
}
