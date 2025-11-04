/**
 * 外汇基础信息（海外）
 * 获取海外外汇基础信息，目前只有FXCM交易商的数据数量：单次可提取全部数据积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const FxObasicApi = "fx_obasic"

export interface FxObasicItem {
  /** 外汇代码 */
  ts_code: string;
  /** 名称 */
  name: string;
  /** 分类 */
  classify: string;
  /** 交易商 */
  exchange: string;
  /** 最小交易单位 */
  min_unit: number;
  /** 最大交易单位 */
  max_unit: number;
  /** 点 */
  pip: number;
  /** 点值 */
  pip_cost: number;
  /** 目标差价 */
  traget_spread: number;
  /** 最小止损距离（点子） */
  min_stop_distance: number;
  /** 交易时间 */
  trading_hours: string;
  /** 休市时间 */
  break_time: string;
}

export interface FxObasicParams {
  /** 交易商 */
  exchange?: string;
  /** 分类 */
  classify?: string;
  /** TS代码 */
  ts_code?: string;
}
