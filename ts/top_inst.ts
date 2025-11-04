/**
 * 龙虎榜机构交易单
 * 龙虎榜机构成交明细限量：单次请求最大返回10000行数据，可根据参数循环获取全部历史积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const TopInstApi = "top_inst"

export interface TopInstItem {
  /** 交易日期 */
  trade_date: string;
  /** TS代码 */
  ts_code: string;
  /** 营业部名称 */
  exalter: string;
  /** 买卖类型0：买入金额最大的前5名， 1：卖出金额最大的前5名 */
  side: string;
  /** 买入额（元） */
  buy: number;
  /** 买入占总成交比例 */
  buy_rate: number;
  /** 卖出额（元） */
  sell: number;
  /** 卖出占总成交比例 */
  sell_rate: number;
  /** 净成交额（元） */
  net_buy: number;
  /** 上榜理由 */
  reason: string;
}

export interface TopInstParams {
  /** 交易日期 */
  trade_date?: string;
  /** TS代码 */
  ts_code?: string;
}
