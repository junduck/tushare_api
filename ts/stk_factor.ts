/**
 * 股票技术面因子
 * 获取股票每日技术面因子数据，用于跟踪股票当前走势情况，数据由Tushare社区自产，覆盖全历史限量：单次最大10000条，可以循环或者分页提取积分：5000积分每分钟可以请求100次，8000积分以上每分钟500次，具体请参阅积分获取办法
 */
export const StkFactorApi = "stk_factor"

export interface StkFactorItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 收盘价 */
  close: number;
  /** 开盘价 */
  open: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 昨收价 */
  pre_close: number;
  /** 涨跌额 */
  change: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量 （手） */
  vol: number;
  /** 成交额 （千元） */
  amount: number;
  /** 复权因子 */
  adj_factor: number;
  /** 开盘价后复权 */
  open_hfq: number;
  /** 开盘价前复权 */
  open_qfq: number;
  /** 收盘价后复权 */
  close_hfq: number;
  /** 收盘价前复权 */
  close_qfq: number;
  /** 最高价后复权 */
  high_hfq: number;
  /** 最高价前复权 */
  high_qfq: number;
  /** 最低价后复权 */
  low_hfq: number;
  /** 最低价前复权 */
  low_qfq: number;
  /** 昨收价后复权 */
  pre_close_hfq: number;
  /** 昨收价前复权 */
  pre_close_qfq: number;
  /** MCAD_DIF (基于前复权价格计算，下同) */
  macd_dif: number;
  /** MCAD_DEA */
  macd_dea: number;
  /** MCAD */
  macd: number;
  /** KDJ_K */
  kdj_k: number;
  /** KDJ_D */
  kdj_d: number;
  /** KDJ_J */
  kdj_j: number;
  /** RSI_6 */
  rsi_6: number;
  /** RSI_12 */
  rsi_12: number;
  /** RSI_24 */
  rsi_24: number;
  /** BOLL_UPPER */
  boll_upper: number;
  /** BOLL_MID */
  boll_mid: number;
  /** BOLL_LOWER */
  boll_lower: number;
  /** CCI */
  cci: number;
}

export interface StkFactorParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期 （yyyymmdd，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
