/**
 * 东方财富App热榜
 * 获取东方财富App热榜数据，包括A股市场、ETF基金、港股市场、美股市场等等，每日盘中提取4次，收盘后4次，最晚22点提取一次。限量：单次最大2000条，可根据日期等参数循环获取全部数据积分：用户积8000积分可调取使用，积分获取办法请参阅积分获取办法注意：本接口只限个人学习和研究使用，如需商业用途，请自行联系东方财富解决数据采购问题。
 */
export const DcHotApi = "dc_hot"

export interface DcHotItem {
  /** 交易日期 */
  trade_date: string;
  /** 数据类型 */
  data_type: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  ts_name: string;
  /** 排行或者热度 */
  rank: number;
  /** 涨跌幅% */
  pct_change: number;
  /** 当前价 */
  current_price: number;
  /** 排行榜获取时间 */
  rank_time: string;
}

export interface DcHotParams {
  /** 交易日期 */
  trade_date?: string;
  /** TS代码 */
  ts_code?: string;
  /** 类型(A股市场、ETF基金、港股市场、美股市场) */
  market?: string;
  /** 热点类型(人气榜、飙升榜) */
  hot_type?: string;
  /** 是否最新（默认Y，如果为N则为盘中和盘后阶段采集，具体时间可参考rank_time字段，状态N每小时更新一次，状态Y更新时间为22：30） */
  is_new?: string;
}
