/**
 * 融资融券交易明细
 * 获取沪深两市每日融资融券明细限量：单次请求最大返回6000行数据，可根据日期循环权限：2000积分可获得本接口权限，积分越高权限越大，具体参考权限说明
 */
export const MarginDetailApi = "margin_detail"

export interface MarginDetailItem {
  /** 交易日期 */
  trade_date: string;
  /** TS股票代码 */
  ts_code: string;
  /** 股票名称 （20190910后有数据） */
  name: string;
  /** 融资余额(元) */
  rzye: number;
  /** 融券余额(元) */
  rqye: number;
  /** 融资买入额(元) */
  rzmre: number;
  /** 融券余量（股） */
  rqyl: number;
  /** 融资偿还额(元) */
  rzche: number;
  /** 融券偿还量(股) */
  rqchl: number;
  /** 融券卖出量(股,份,手) */
  rqmcl: number;
  /** 融资融券余额(元) */
  rzrqye: number;
}

export interface MarginDetailParams {
  /** 交易日期（格式：YYYYMMDD，下同） */
  trade_date?: string;
  /** TS代码 */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
