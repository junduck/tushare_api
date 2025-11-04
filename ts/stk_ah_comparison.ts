/**
 * AH股比价
 * AH股比价数据，可根据交易日期获取历史权限：5000积分起提示：每天盘后17:00更新，单次请求最大返回1000行数据，可循环提取,本接口数据从20250812开始，由于历史不好补充，只能累积
 */
export const StkAhComparisonApi = "stk_ah_comparison"

export interface StkAhComparisonItem {
  /** 港股股票代码 */
  hk_code: string;
  /** A股股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 港股股票名称 */
  hk_name: string;
  /** 港股股票涨跌幅 */
  hk_pct_chg: number;
  /** 港股股票收盘价 */
  hk_close: number;
  /** A股股票名称 */
  name: string;
  /** A股股票收盘价 */
  close: number;
  /** A股股票涨跌幅 */
  pct_chg: number;
  /** 比价(A/H) */
  ah_comparison: number;
  /** 溢价(A/H)% */
  ah_premium: number;
}

export interface StkAhComparisonParams {
  /** 港股股票代码（xxxxx.HK) */
  hk_code?: string;
  /** A股票代码(xxxxxx.SH/SZ/BJ) */
  ts_code?: string;
  /** 交易日期（格式：YYYYMMDD下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
