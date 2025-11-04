/**
 * 期权分钟行情
 * 获取全市场期权合约分钟数据，支持1min/5min/15min/30min/60min行情，提供Python SDK和 http Restful API两种方式。限量：单次最大8000行数据，可以通过合约代码和时间循环获取。权限：120积分可以调取2次接口查看数据，正式权限请参阅 权限说明  。
 */
export const OptMinsApi = "opt_mins"

export interface OptMinsItem {
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
  /** 持仓量 */
  oi: number;
}

export interface OptMinsParams {
  /** 股票代码，e.g：10007976.SH */
  ts_code?: string;
  /** 分钟频度（1min/5min/15min/30min/60min） */
  freq?: string;
  /** 开始日期 格式：2024-08-25 09:00:00 */
  start_date?: string;
  /** 结束时间 格式：2024-08-25 19:00:00 */
  end_date?: string;
}
