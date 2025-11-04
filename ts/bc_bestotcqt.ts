/**
 * 柜台流通式债券最优报价
 * 柜台流通式债券最优报价限量：单次最大2000，可多次提取，总量不限制积分：用户需要至少500积分可以试用调取，2000积分以上频次相对较高，积分越多权限越大，具体请参阅积分获取办法
 */
export const BcBestotcqtApi = "bc_bestotcqt"

export interface BcBestotcqtItem {
  /** 报价日期 */
  trade_date?: string;
  /** 债券编码 */
  ts_code?: string;
  /** 债券简称 */
  name?: string;
  /** 剩余期限 */
  remain_maturity?: string;
  /** 债券类型 */
  bond_type?: string;
  /** 最优报买价方 */
  best_buy_bank?: string;
  /** 投资者最优买入价到期收益率（%） */
  best_buy_yield?: number;
  /** 投资者最优买入全价 */
  best_buy_price?: number;
  /** 最优卖报价方 */
  best_sell_bank?: string;
  /** 投资者最优卖出价到期收益率（%） */
  best_sell_yield?: number;
  /** 投资者最优卖出全价 */
  best_sell_price?: number;
}

export interface BcBestotcqtParams {
  /** 报价日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** TS代码 */
  ts_code?: string;
}
