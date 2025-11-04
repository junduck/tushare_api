/**
 * 涨跌停和炸板数据
 * 获取A股每日涨跌停、炸板数据情况，数据从2020年开始（不提供ST股票的统计）限量：单次最大可以获取2500条数据，可通过日期或者股票循环提取积分：5000积分每分钟可以请求200次每天总量1万次，8000积分以上每分钟500次每天总量不限制，具体请参阅积分获取办法
 */
export const LimitListDApi = "limit_list_d"

export interface LimitListDItem {
  /** 交易日期 */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 所属行业 */
  industry: string;
  /** 股票名称 */
  name: string;
  /** 收盘价 */
  close: number;
  /** 涨跌幅 */
  pct_chg: number;
  /** 成交额 */
  amount: number;
  /** 板上成交金额(成交价格为该股票跌停价的所有成交额的总和，涨停无此数据) */
  limit_amount: number;
  /** 流通市值 */
  float_mv: number;
  /** 总市值 */
  total_mv: number;
  /** 换手率 */
  turnover_ratio: number;
  /** 封单金额（以涨停价买入挂单的资金总量） */
  fd_amount: number;
  /** 首次封板时间（跌停无此数据） */
  first_time: string;
  /** 最后封板时间 */
  last_time: string;
  /** 炸板次数(跌停为开板次数) */
  open_times: number;
  /** 涨停统计（N/T T天有N次涨停） */
  up_stat: string;
  /** 连板数（个股连续封板数量） */
  limit_times: number;
  /** D跌停U涨停Z炸板 */
  limit: string;
}

export interface LimitListDParams {
  /** 交易日期 */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
  /** 涨跌停类型（U涨停D跌停Z炸板） */
  limit_type?: string;
  /** 交易所（SH上交所SZ深交所BJ北交所） */
  exchange?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
