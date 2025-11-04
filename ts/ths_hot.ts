/**
 * 同花顺App热榜数
 * 获取同花顺App热榜数据，包括热股、概念板块、ETF、可转债、港美股等等，每日盘中提取4次，收盘后4次，最晚22点提取一次。限量：单次最大2000条，可根据日期等参数循环获取全部数据积分：用户积5000积分可调取使用，积分获取办法请参阅积分获取办法注意：本接口只限个人学习和研究使用，如需商业用途，请自行联系同花顺解决数据采购问题。
 */
export const ThsHotApi = "ths_hot"

export interface ThsHotItem {
  /** 交易日期 */
  trade_date: string;
  /** 数据类型 */
  data_type: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  ts_name: string;
  /** 排行 */
  rank: number;
  /** 涨跌幅% */
  pct_change: number;
  /** 当前价格 */
  current_price: number;
  /** 标签 */
  concept: string;
  /** 上榜解读 */
  rank_reason: string;
  /** 热度值 */
  hot: number;
  /** 排行榜获取时间 */
  rank_time: string;
}

export interface ThsHotParams {
  /** 交易日期 */
  trade_date?: string;
  /** TS代码 */
  ts_code?: string;
  /** 热榜类型(热股、ETF、可转债、行业板块、概念板块、期货、港股、热基、美股) */
  market?: string;
  /** 是否最新（默认Y，如果为N则为盘中和盘后阶段采集，具体时间可参考rank_time字段，状态N每小时更新一次，状态Y更新时间为22：30） */
  is_new?: string;
}
