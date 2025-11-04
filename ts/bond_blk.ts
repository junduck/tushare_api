/**
 * 大宗交易
 * 获取沪深交易所债券大宗交易数据，可以通过数据工具调试和查看数据。
 */
export const BondBlkApi = "bond_blk"

export interface BondBlkItem {
  /** 交易日期 */
  trade_date: string;
  /** 债券代码 */
  ts_code: string;
  /** 债券名称 */
  name: string;
  /** 成交价（元） */
  price: number;
  /** 累计成交数量（万股/万份/万张/万手） */
  vol: number;
  /** 累计成交金额（万元） */
  amount: number;
}

export interface BondBlkParams {
  /** 债券代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
