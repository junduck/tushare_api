/**
 * 历史分钟行情
 * 获取全市场期货合约分钟数据，支持1min/5min/15min/30min/60min行情，提供Python SDK和 http Restful API两种方式，如果需要主力合约分钟，请先通过主力mapping接口获取对应的合约代码后提取分钟。限量：单次最大8000行数据，可以通过期货合约代码和时间循环获取，本接口可以提供超过10年历史分钟数据。权限：120积分可以调取2次接口查看数据，正式权限请参阅 权限说明  。
 */
export const FtMinsApi = "ft_mins"

export interface FtMinsItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易时间 */
  trade_time: string;
  /** 开盘价（元） */
  open: number;
  /** 收盘价（元） */
  close: number;
  /** 最高价（元） */
  high: number;
  /** 最低价（元） */
  low: number;
  /** 成交量（手） */
  vol: number;
  /** 成交金额（元） */
  amount: number;
  /** 持仓量（手） */
  oi: number;
}

export interface FtMinsParams {
  /** 股票代码，e.g.CU2310.SHF */
  ts_code?: string;
  /** 分钟频度（1min/5min/15min/30min/60min） */
  freq?: string;
  /** 开始日期 格式：2023-08-25 09:00:00 */
  start_date?: string;
  /** 结束时间 格式：2023-08-25 19:00:00 */
  end_date?: string;
}
