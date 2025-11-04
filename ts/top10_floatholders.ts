/**
 * 前十大流通股东
 * 获取上市公司前十大流通股东数据积分：需2000积分以上才可以调取本接口，5000积分以上频次会更高
 */
export const Top10FloatholdersApi = "top10_floatholders"

export interface Top10FloatholdersItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 股东名称 */
  holder_name: string;
  /** 持有数量（股） */
  hold_amount: number;
  /** 占总股本比例(%) */
  hold_ratio: number;
  /** 占流通股本比例(%) */
  hold_float_ratio: number;
  /** 持股变动 */
  hold_change: number;
  /** 股东类型 */
  holder_type: string;
}

export interface Top10FloatholdersParams {
  /** TS代码 */
  ts_code?: string;
  /** 报告期（YYYYMMDD格式，一般为每个季度最后一天） */
  period?: string;
  /** 公告日期 */
  ann_date?: string;
  /** 报告期开始日期 */
  start_date?: string;
  /** 报告期结束日期 */
  end_date?: string;
}
