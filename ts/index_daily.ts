/**
 * 南华期货指数行情
 * 获取南华指数每日行情，指数行情也可以通过通用行情接口获取数据．权限：用户需要累积2000积分才可以调取，具体请参阅积分获取办法
 */
export const IndexDailyApi = "index_daily"

export interface IndexDailyItem {
  /** TS指数代码 */
  ts_code: string;
  /** 交易日 */
  trade_date: string;
  /** 收盘点位 */
  close: number;
  /** 开盘点位 */
  open: number;
  /** 最高点位 */
  high: number;
  /** 最低点位 */
  low: number;
  /** 昨日收盘点 */
  pre_close: number;
  /** 涨跌点 */
  change: number;
  /** 涨跌幅 */
  pct_chg: number;
  /** 成交量（手） */
  vol: number;
  /** 成交额（千元） */
  amount: number;
}

export interface IndexDailyParams {
  /** 指数代码（南华期货指数以 .NH 结尾，具体请参考本文最下方） */
  ts_code?: string;
  /** 交易日期 （日期格式：YYYYMMDD，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
