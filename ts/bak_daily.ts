/**
 * 备用行情
 * 获取备用行情，包括特定的行情指标(数据从2017年中左右开始，早期有几天数据缺失，近期正常)限量：单次最大7000行数据，可以根据日期参数循环获取，正式权限需要5000积分。
 */
export const BakDailyApi = "bak_daily"

export interface BakDailyItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 股票名称 */
  name: string;
  /** 涨跌幅 */
  pct_change: number;
  /** 收盘价 */
  close: number;
  /** 涨跌额 */
  change: number;
  /** 开盘价 */
  open: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 昨收价 */
  pre_close: number;
  /** 量比 */
  vol_ratio: number;
  /** 换手率 */
  turn_over: number;
  /** 振幅 */
  swing: number;
  /** 成交量 */
  vol: number;
  /** 成交额 */
  amount: number;
  /** 内盘（主动卖，手） */
  selling: number;
  /** 外盘（主动买， 手） */
  buying: number;
  /** 总股本(亿) */
  total_share: number;
  /** 流通股本(亿) */
  float_share: number;
  /** 市盈(动) */
  pe: number;
  /** 所属行业 */
  industry: string;
  /** 所属地域 */
  area: string;
  /** 流通市值 */
  float_mv: number;
  /** 总市值 */
  total_mv: number;
  /** 平均价 */
  avg_price: number;
  /** 强弱度(%) */
  strength: number;
  /** 活跃度(%) */
  activity: number;
  /** 笔换手 */
  avg_turnover: number;
  /** 攻击波(%) */
  attack: number;
  /** 近3月涨幅 */
  interval_3: number;
  /** 近6月涨幅 */
  interval_6: number;
}

export interface BakDailyParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 开始行数 */
  offset?: string;
  /** 最大行数 */
  limit?: string;
}
