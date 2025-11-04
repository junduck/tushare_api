/**
 * 每日停复牌信息
 * 按日期方式获取股票每日停复牌信息
 */
export const SuspendDApi = "suspend_d"

export interface SuspendDItem {
  /** TS代码 */
  ts_code: string;
  /** 停复牌日期 */
  trade_date: string;
  /** 日内停牌时间段 */
  suspend_timing: string;
  /** 停复牌类型：S-停牌，R-复牌 */
  suspend_type: string;
}

export interface SuspendDParams {
  /** 股票代码(可输入多值) */
  ts_code?: string;
  /** 交易日日期 */
  trade_date?: string;
  /** 停复牌查询开始日期 */
  start_date?: string;
  /** 停复牌查询结束日期 */
  end_date?: string;
  /** 停复牌类型：S-停牌,R-复牌 */
  suspend_type?: string;
}
