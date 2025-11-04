/**
 * 港股分钟行情
 * 港股分钟数据，支持1min/5min/15min/30min/60min行情，提供Python SDK和 http Restful API两种方式限量：单次最大8000行数据，可以通过股票代码和日期循环获取权限：120积分可以调取2次接口查看数据，正式权限请参阅 权限说明  。
 */
export const HkMinsApi = "hk_mins"

export interface HkMinsItem {
  /** 股票代码 */
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

export interface HkMinsParams {
  /** 股票代码，e.g.00001.HK */
  ts_code?: string;
  /** 分钟频度（1min/5min/15min/30min/60min） */
  freq?: string;
  /** 开始日期 格式：2023-03-13 09:00:00 */
  start_date?: string;
  /** 结束时间 格式：2023-03-13 19:00:00 */
  end_date?: string;
}
