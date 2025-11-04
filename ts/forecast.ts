/**
 * 业绩预告
 * 获取业绩预告数据权限：用户需要至少2000积分才可以调取，具体请参阅积分获取办法提示：当前接口只能按单只股票获取其历史数据，如果需要获取某一季度全部上市公司数据，请使用forecast_vip接口（参数一致），需积攒5000积分。
 */
export const ForecastApi = "forecast"

export interface ForecastItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 业绩预告类型(预增/预减/扭亏/首亏/续亏/续盈/略增/略减) */
  type: string;
  /** 预告净利润变动幅度下限（%） */
  p_change_min: number;
  /** 预告净利润变动幅度上限（%） */
  p_change_max: number;
  /** 预告净利润下限（万元） */
  net_profit_min: number;
  /** 预告净利润上限（万元） */
  net_profit_max: number;
  /** 上年同期归属母公司净利润 */
  last_parent_net: number;
  /** 首次公告日 */
  first_ann_date: string;
  /** 业绩预告摘要 */
  summary: string;
  /** 业绩变动原因 */
  change_reason: string;
}

export interface ForecastParams {
  /** 股票代码(二选一) */
  ts_code?: string;
  /** 公告日期 (二选一) */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
  /** 报告期(每个季度最后一天的日期，比如20171231表示年报，20170630半年报，20170930三季报) */
  period?: string;
  /** 预告类型(预增/预减/扭亏/首亏/续亏/续盈/略增/略减) */
  type?: string;
}
