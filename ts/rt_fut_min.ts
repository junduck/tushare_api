/**
 * 实时分钟行情
 * 获取全市场期货合约实时分钟数据，支持1min/5min/15min/30min/60min行情，提供Python SDK、 http Restful API和websocket三种方式，如果需要主力合约分钟，请先通过主力mapping接口获取对应的合约代码后提取分钟。限量：每分钟可以请求500次，支持多个合约同时提取权限：需单独开权限，正式权限请参阅 权限说明  。
 */
export const RtFutMinApi = "rt_fut_min"

export interface RtFutMinItem {
  /** 股票代码 */
  code: string;
  /** 频度 */
  freq: string;
  /** 交易时间 */
  time: string;
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

export interface RtFutMinParams {
  /** 股票代码，e.g.CU2310.SHF，仅支持一次一个合约的回放 */
  ts_code?: string;
  /** 分钟频度（1MIN/5MIN/15MIN/30MIN/60MIN） */
  freq?: string;
  /** 回放日期（格式：YYYY-MM-DD，默认为交易当日，支持回溯一天） */
  date_str?: string;
}
