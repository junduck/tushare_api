/**
 * 港股复权因子
 * 获取港股每日复权因子数据，每天滚动刷新限量：单次最大6000行数据，可以根据日期循环权限：本接口是在开通港股日线权限后自动获取权限，权限请参考权限说明文档
 */
export const HkAdjfactorApi = "hk_adjfactor"

export interface HkAdjfactorItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 累计复权因子 */
  cum_adjfactor: number;
  /** 收盘价 */
  close_price: number;
}

export interface HkAdjfactorParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（格式：YYYYMMDD，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
