/**
 * 柜台流通式债券报价
 * 柜台流通式债券报价限量：单次最大2000条，可多次提取，总量不限制积分：用户需要至少500积分可以试用调取，2000积分以上频次相对较高，积分越多权限越大，具体请参阅积分获取办法
 */
export const BcOtcqtApi = "bc_otcqt"

export interface BcOtcqtItem {
  /** 报价日期 */
  trade_date?: string;
  /** 报价时间 */
  qt_time?: string;
  /** 报价机构 */
  bank?: string;
  /** 债券编码 */
  ts_code?: string;
  /** 债券简称 */
  name?: string;
  /** 期限 */
  maturity?: string;
  /** 剩余期限 */
  remain_maturity?: string;
  /** 债券类型 */
  bond_type?: string;
  /** 票面利率（%） */
  coupon_rate?: number;
  /** 投资者买入全价 */
  buy_price?: number;
  /** 投资者卖出全价 */
  sell_price?: number;
  /** 投资者买入到期收益率（%） */
  buy_yield?: number;
  /** 投资者卖出到期收益率（%） */
  sell_yield?: number;
}

export interface BcOtcqtParams {
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** TS代码 */
  ts_code?: string;
  /** 报价机构 */
  bank?: string;
}
