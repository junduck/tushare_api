/**
 * ETF实时日线
 * 获取ETF实时日k线行情，支持按ETF代码或代码通配符一次性提取全部ETF实时日k线行情限量：单次最大可提取2000条数据积分：本接口是单独开权限的数据，单独申请权限请参考权限列表
 */
export const RtEtfKApi = "rt_etf_k"

export interface RtEtfKItem {
  /** ETF代码 */
  ts_code: string;
  /** ETF名称 */
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

export interface RtEtfKParams {
  /** 支持通配符方式，e.g. 5*.SH、15*.SZ、159101.SZ */
  ts_code?: string;
  /** 分类参数，取上海ETF时，需要输入'HQ_FND_TICK'，参考下面例子 */
  topic?: string;
}
