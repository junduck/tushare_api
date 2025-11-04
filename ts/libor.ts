/**
 * Libor利率
 * Libor拆借利率限量：单次最大4000行数据，总量不限制，可通过设置开始和结束日期分段获取积分：用户积累120积分可以调取，具体请参阅积分获取办法
 */
export const LiborApi = "libor"

export interface LiborItem {
  /** 日期 */
  date: string;
  /** 货币 */
  curr_type: string;
  /** 隔夜 */
  on: number;
  /** 1周 */
  1w: number;
  /** 1个月 */
  1m: number;
  /** 2个月 */
  2m: number;
  /** 3个月 */
  3m: number;
  /** 6个月 */
  6m: number;
  /** 12个月 */
  12m: number;
}

export interface LiborParams {
  /** 日期 (日期输入格式：YYYYMMDD，下同) */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 货币代码  (USD美元  EUR欧元  JPY日元  GBP英镑  CHF瑞郎，默认是USD) */
  curr_type?: string;
}
