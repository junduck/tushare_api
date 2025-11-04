/**
 * 中央结算系统持股统计
 * 获取中央结算系统持股汇总数据，覆盖全部历史数据，根据交易所披露时间，当日数据在下一交易日早上9点前完成入库限量：单次最大5000条数据，可循环或分页提供全部积分：用户120积分可以试用看数据，5000积分每分钟可以请求300次，8000积分以上可以请求500次每分钟，具体请参阅积分获取办法
 */
export const CcassHoldApi = "ccass_hold"

export interface CcassHoldItem {
  /** 交易日期 */
  trade_date: string;
  /** 股票代号 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 于中央结算系统的持股量(股)Shareholding in CCASS */
  shareholding: string;
  /** 参与者数目（个） */
  hold_nums: string;
  /** 占于上交所上市及交易的A股总数的百分比（%）% of the total number of A shares listed and traded on the SSE */
  hold_ratio: string;
}

export interface CcassHoldParams {
  /** 股票代码 (e.g. 605009.SH) */
  ts_code?: string;
  /** 港交所代码 （e.g. 95009） */
  hk_code?: string;
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
