/**
 * 每日结算参数
 * 获取每日结算参数数据，包括交易和交割费率等限量：单次最大返回1600行数据，可根据日期循环，总量不限制积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const FutSettleApi = "fut_settle"

export interface FutSettleItem {
  /** 合约代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 结算价 */
  settle: number;
  /** 交易手续费率 */
  trading_fee_rate: number;
  /** 交易手续费 */
  trading_fee: number;
  /** 交割手续费 */
  delivery_fee: number;
  /** 买套保交易保证金率 */
  b_hedging_margin_rate: number;
  /** 卖套保交易保证金率 */
  s_hedging_margin_rate: number;
  /** 买投机交易保证金率 */
  long_margin_rate: number;
  /** 卖投机交易保证金率 */
  short_margin_rate: number;
  /** 平今仓手续率 */
  offset_today_fee?: number;
  /** 交易所 */
  exchange?: string;
}

export interface FutSettleParams {
  /** 交易日期 （trade_date/ts_code至少需要输入一个参数） */
  trade_date?: string;
  /** 合约代码 */
  ts_code?: string;
  /** 开始日期(YYYYMMDD格式，下同) */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 交易所代码 */
  exchange?: string;
}
