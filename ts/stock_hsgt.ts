/**
 * 沪深港通股票列表
 * 获取沪深港通股票列表权限：3000积分起提示：每天上午9:20更新，单次请求最大返回2000行数据，可根据类型循环提取,本接口数据从20250812开始
 */
export const StockHsgtApi = "stock_hsgt"

export interface StockHsgtItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 类型 */
  type: string;
  /** 股票名称 */
  name: string;
  /** 类型名称 */
  type_name: string;
}

export interface StockHsgtParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（格式：YYYYMMDD） */
  trade_date?: string;
  /** 类型（参考下表） */
  type?: string;
  /** 开始时间 */
  start_date?: string;
  /** 结束时间 */
  end_date?: string;
}
