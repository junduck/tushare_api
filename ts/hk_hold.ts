/**
 * 沪深股通持股明细
 * 获取沪深港股通持股明细，数据来源港交所。限量：单次最多提取3800条记录，可循环调取，总量不限制积分：用户积120积分可调取试用，2000积分可正常使用，单位分钟有流控，积分越高流量越大，请自行提高积分，具体请参阅积分获取办法
 */
export const HkHoldApi = "hk_hold"

export interface HkHoldItem {
  /** 原始代码 */
  code: string;
  /** 交易日期 */
  trade_date: string;
  /** TS代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 持股数量(股) */
  vol: number;
  /** 持股占比（%），占已发行股份百分比 */
  ratio: number;
  /** 类型：SH沪股通SZ深股通HK港股通 */
  exchange: string;
}

export interface HkHoldParams {
  /** 交易所代码 */
  code?: string;
  /** TS股票代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 类型：SH沪股通（北向）SZ深股通（北向）HK港股通（南向持股） */
  exchange?: string;
}
