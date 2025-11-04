/**
 * 板块资金流向（THS)
 * 获取同花顺概念板块每日资金流向限量：单次最大可调取5000条数据，可以根据日期和代码循环提取全部数据积分：5000积分可以调取，具体请参阅积分获取办法
 */
export const MoneyflowCntThsApi = "moneyflow_cnt_ths"

export interface MoneyflowCntThsItem {
  /** 交易日期 */
  trade_date: string;
  /** 板块代码 */
  ts_code: string;
  /** 板块名称 */
  name: string;
  /** 领涨股票名称 */
  lead_stock: string;
  /** 最新价 */
  close_price: number;
  /** 行业涨跌幅 */
  pct_change: number;
  /** 板块指数 */
  industry_index: number;
  /** 公司数量 */
  company_num: number;
  /** 领涨股涨跌幅 */
  pct_change_stock: number;
  /** 流入资金(亿元) */
  net_buy_amount: number;
  /** 流出资金(亿元) */
  net_sell_amount: number;
  /** 净额(亿元) */
  net_amount: number;
}

export interface MoneyflowCntThsParams {
  /** 代码 */
  ts_code?: string;
  /** 交易日期(格式：YYYYMMDD，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
