/**
 * 同花顺涨跌停榜单
 * 获取同花顺每日涨跌停榜单数据，历史数据从20231101开始提供，增量每天16点左右更新限量：单次最大4000条，可根据日期或股票代码循环提取积分：8000积分以上每分钟500次，每天总量不限制，具体请参阅积分获取办法注意：本接口只限个人学习和研究使用，如需商业用途，请自行联系同花顺解决数据采购问题。
 */
export const LimitListThsApi = "limit_list_ths"

export interface LimitListThsItem {
  /** 交易日期 */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 收盘价(元) */
  price: number;
  /** 涨跌幅% */
  pct_chg: number;
  /** 打开次数 */
  open_num: number;
  /** 涨停原因 */
  lu_desc: string;
  /** 板单类别 */
  limit_type: string;
  /** 涨停标签 */
  tag: string;
  /** 涨停状态（N连板、一字板） */
  status: string;
  /** 首次涨停时间 */
  first_lu_time?: string;
  /** 最后涨停时间 */
  last_lu_time?: string;
  /** 首次跌停时间 */
  first_ld_time?: string;
  /** 最后跌停时间 */
  last_ld_time?: string;
  /** 封单量(元 */
  limit_order: number;
  /** 封单额(元 */
  limit_amount: number;
  /** 换手率% */
  turnover_rate: number;
  /** 实际流通(元 */
  free_float: number;
  /** 最大封单(元 */
  lu_limit_order: number;
  /** 近一年涨停封板率 */
  limit_up_suc_rate: number;
  /** 成交额 */
  turnover: number;
  /** 涨速 */
  rise_rate?: number;
  /** 总市值（亿元） */
  sum_float?: number;
  /** 股票类型：HS沪深主板、GEM创业板、STAR科创板 */
  market_type: string;
}

export interface LimitListThsParams {
  /** 交易日期 */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
  /** 涨停池、连扳池、冲刺涨停、炸板池、跌停池，默认：涨停池 */
  limit_type?: string;
  /** HS-沪深主板 GEM-创业板 STAR-科创板 */
  market?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
