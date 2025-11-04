/**
 * 实时日线
 * 获取实时日k线行情，支持按股票代码及股票代码通配符一次性提取全部股票实时日k线行情限量：单次最大可提取6000条数据，等同于一次提取全市场积分：本接口是单独开权限的数据，单独申请权限请参考权限列表
 */
export const RtKApi = "rt_k"

export interface RtKItem {
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 昨收价 */
  pre_close: number;
  /** 最高价 */
  high: number;
  /** 开盘价 */
  open: number;
  /** 最低价 */
  low: number;
  /** 收盘价（最新价） */
  close: number;
  /** 成交量（股） */
  vol: number;
  /** 成交金额（元） */
  amount: number;
  /** 开盘以来成交笔数 */
  num: number;
  /** 委托卖盘（股） */
  ask_volume1?: number;
  /** 委托买盘（股） */
  bid_volume1?: number;
  /** 交易时间 */
  trade_time?: string;
}

export interface RtKParams {
  /** 支持通配符方式，e.g. 6*.SH、301*.SZ、600000.SH */
  ts_code?: string;
}
