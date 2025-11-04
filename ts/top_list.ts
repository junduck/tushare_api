/**
 * 龙虎榜每日统计单
 * 龙虎榜每日交易明细数据历史： 2005年至今限量：单次请求返回最大10000行数据，可通过参数循环获取全部历史积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const TopListApi = "top_list"

export interface TopListItem {
  /** 交易日期 */
  trade_date: string;
  /** TS代码 */
  ts_code: string;
  /** 名称 */
  name: string;
  /** 收盘价 */
  close: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 换手率 */
  turnover_rate: number;
  /** 总成交额 */
  amount: number;
  /** 龙虎榜卖出额 */
  l_sell: number;
  /** 龙虎榜买入额 */
  l_buy: number;
  /** 龙虎榜成交额 */
  l_amount: number;
  /** 龙虎榜净买入额 */
  net_amount: number;
  /** 龙虎榜净买额占比 */
  net_rate: number;
  /** 龙虎榜成交额占比 */
  amount_rate: number;
  /** 当日流通市值 */
  float_values: number;
  /** 上榜理由 */
  reason: string;
}

export interface TopListParams {
  /** 交易日期 */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
}
