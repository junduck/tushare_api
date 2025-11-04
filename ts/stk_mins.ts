/**
 * ETF分钟行情
 * 获取ETF分钟数据，支持1min/5min/15min/30min/60min行情，提供Python SDK和 http Restful API两种方式限量：单次最大8000行数据，可以通过股票代码和时间循环获取，本接口可以提供超过10年ETF历史分钟数据权限：正式权限请参阅 权限说明
 */
export const StkMinsApi = "stk_mins"

export interface StkMinsItem {
  /** ETF代码 */
  ts_code: string;
  /** 交易时间 */
  trade_time: string;
  /** 开盘价 */
  open: number;
  /** 收盘价 */
  close: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 成交量 */
  vol: number;
  /** 成交金额 */
  amount: number;
}

export interface StkMinsParams {
  /** ETF代码，e.g. 159001.SZ */
  ts_code?: string;
  /** 分钟频度（1min/5min/15min/30min/60min） */
  freq?: string;
  /** 开始日期 格式：2025-06-01 09:00:00 */
  start_date?: string;
  /** 结束时间 格式：2025-06-20 19:00:00 */
  end_date?: string;
}
