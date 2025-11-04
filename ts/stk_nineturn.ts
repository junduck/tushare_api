/**
 * 神奇九转指标
 * 神奇九转（又称“九转序列”）是一种基于技术分析的股票趋势反转指标，其思想来源于技术分析大师汤姆·迪马克（Tom DeMark）的TD序列。该指标的核心功能是通过识别股价在上涨或下跌过程中连续9天的特定走势，来判断股价的潜在反转点，从而帮助投资者提高抄底和逃顶的成功率，日线级别配合60min的九转效果更好，数据从20230101开始。限量：单次提取最大返回10000行数据，可通过股票代码和日期循环获取全部数据权限：达到6000积分可以调用
 */
export const StkNineturnApi = "stk_nineturn"

export interface StkNineturnItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 频率(日daily) */
  freq: string;
  /** 开盘价 */
  open: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 收盘价 */
  close: number;
  /** 成交量 */
  vol: number;
  /** 成交额 */
  amount: number;
  /** 上九转计数 */
  up_count: number;
  /** 下九转计数 */
  down_count: number;
  /** 是否上九转)+9表示上九转 */
  nine_up_turn: string;
  /** 是否下九转-9表示下九转 */
  nine_down_turn: string;
}

export interface StkNineturnParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期 （格式：YYYY-MM-DD HH:MM:SS) */
  trade_date?: string;
  /** 频率(日daily) */
  freq?: string;
  /** 开始时间 */
  start_date?: string;
  /** 结束时间 */
  end_date?: string;
}
