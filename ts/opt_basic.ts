/**
 * 期权合约信息
 * 获取期权合约信息积分：用户需要至少5000积分可以调取，具体请参阅积分获取办法
 */
export const OptBasicApi = "opt_basic"

export interface OptBasicItem {
  /** TS代码 */
  ts_code: string;
  /** 交易市场 */
  exchange: string;
  /** 合约名称 */
  name: string;
  /** 合约单位 */
  per_unit: string;
  /** 标的合约代码 */
  opt_code: string;
  /** 合约类型 */
  opt_type: string;
  /** 期权类型 */
  call_put: string;
  /** 行权方式 */
  exercise_type: string;
  /** 行权价格 */
  exercise_price: number;
  /** 结算月 */
  s_month: string;
  /** 到期日 */
  maturity_date: string;
  /** 挂牌基准价 */
  list_price: number;
  /** 开始交易日期 */
  list_date: string;
  /** 最后交易日期 */
  delist_date: string;
  /** 最后行权日期 */
  last_edate: string;
  /** 最后交割日期 */
  last_ddate: string;
  /** 报价单位 */
  quote_unit: string;
  /** 最小价格波幅 */
  min_price_chg: string;
}

export interface OptBasicParams {
  /** TS期权代码 */
  ts_code?: string;
  /** 交易所代码 （包括上交所SSE等交易所） */
  exchange?: string;
  /** 标准合约代码，OP+期货合约TS_CODE，如棕榈油2207合约，输入OPP2207.DCE */
  opt_code?: string;
  /** 期权类型 */
  call_put?: string;
}
