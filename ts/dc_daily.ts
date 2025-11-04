/**
 * 东财概念和行业指数行情
 * 获取东财概念板块、行业指数板块、地域板块行情数据，历史数据开始于2020年限量：单次最大2000条数据，可根据日期参数循环获取权限：用户积累6000积分可调取，具体请参阅积分获取办法注意：本接口只限个人学习和研究使用，如需商业用途，请自行联系东方财富解决数据采购问题。
 */
export const DcDailyApi = "dc_daily"

export interface DcDailyItem {
  /** 板块代码 */
  ts_code: string;
  /** 交易日 */
  trade_date: string;
  /** 收盘点位 */
  close: number;
  /** 开盘点位 */
  open: number;
  /** 最高点位 */
  high: number;
  /** 最低点位 */
  low: number;
  /** 涨跌点位 */
  change: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量 */
  vol: number;
  /** 成交额 */
  amount: number;
  /** 振幅 */
  swing: number;
  /** 换手率 */
  turnover_rate: number;
}

export interface DcDailyParams {
  /** 板块代码（格式：xxxxx.DC) */
  ts_code?: string;
  /** 交易日期(格式：YYYYMMDD下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 板块类型： 概念板块、行业板块、地域板块 */
  idx_type?: string;
}
