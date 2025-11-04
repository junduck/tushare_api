/**
 * 大宗交易明细
 * 获取沪深交易所债券大宗交易数据，可以通过数据工具调试和查看数据。
 */
export const BondBlkDetailApi = "bond_blk_detail"

export interface BondBlkDetailItem {
  /** 交易日期 */
  trade_date: string;
  /** 债券代码 */
  ts_code: string;
  /** 债券名称 */
  name: string;
  /** 成交价（元） */
  price: number;
  /** 成交数量（万股/万份/万张/万手） */
  vol: number;
  /** 成交金额（万元） */
  amount: number;
  /** 买方营业部 */
  buy_dp: string;
  /** 卖方营业部 */
  sell_dp: string;
}

export interface BondBlkDetailParams {
  /** 债券代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
