/**
 * 融资融券交易汇总
 * 获取融资融券每日交易汇总数据限量：单次请求最大返回4000行数据，可根据日期循环权限：2000积分可获得本接口权限，积分越高权限越大，具体参考权限说明
 */
export const MarginApi = "margin"

export interface MarginItem {
  /** 交易日期 */
  trade_date: string;
  /** 交易所代码（SSE上交所SZSE深交所BSE北交所） */
  exchange_id: string;
  /** 融资余额(元) */
  rzye: number;
  /** 融资买入额(元) */
  rzmre: number;
  /** 融资偿还额(元) */
  rzche: number;
  /** 融券余额(元) */
  rqye: number;
  /** 融券卖出量(股,份,手) */
  rqmcl: number;
  /** 融资融券余额(元) */
  rzrqye: number;
  /** 融券余量(股,份,手) */
  rqyl: number;
}

export interface MarginParams {
  /** 交易日期（格式：YYYYMMDD，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 交易所代码（SSE上交所SZSE深交所BSE北交所） */
  exchange_id?: string;
}
