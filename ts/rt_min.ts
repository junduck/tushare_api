/**
 * 实时分钟
 * 获取全A股票实时分钟数据，包括1~60min限量：单次最大1000行数据，可以通过股票代码提取数据，支持逗号分隔的多个代码同时提取权限：正式权限请参阅 权限说明
 */
export const RtMinApi = "rt_min"

export interface RtMinItem {
  /** 股票代码 */
  ts_code: string;
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
  /** 成交量(股） */
  vol: number;
  /** 成交额（元） */
  amount: number;
}

export interface RtMinParams {
  /** 1MIN,5MIN,15MIN,30MIN,60MIN （大写） */
  freq?: string;
  /** 支持单个和多个：600000.SH 或者 600000.SH,000001.SZ */
  ts_code?: string;
}
