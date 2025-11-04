/**
 * 中央结算系统持股明细
 * 获取中央结算系统机构席位持股明细，数据覆盖全历史，根据交易所披露时间，当日数据在下一交易日早上9点前完成限量：单次最大返回6000条数据，可以循环或分页提取积分：用户积8000积分可调取，每分钟可以请求300次
 */
export const CcassHoldDetailApi = "ccass_hold_detail"

export interface CcassHoldDetailItem {
  /** 交易日期 */
  trade_date: string;
  /** 股票代号 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 参与者编号 */
  col_participant_id: string;
  /** 机构名称 */
  col_participant_name: string;
  /** 持股量(股) */
  col_shareholding: string;
  /** 占已发行股份/权证/单位百分比(%) */
  col_shareholding_percent: string;
}

export interface CcassHoldDetailParams {
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
