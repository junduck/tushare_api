/**
 * 限售股解禁
 * 获取限售股解禁限量：单次最大6000条，总量不限制积分：120分可调取，每分钟内限制次数，超过5000积分频次相对较高，具体请参阅积分获取办法
 */
export const ShareFloatApi = "share_float"

export interface ShareFloatItem {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 解禁日期 */
  float_date: string;
  /** 流通股份(股) */
  float_share: number;
  /** 流通股份占总股本比率 */
  float_ratio: number;
  /** 股东名称 */
  holder_name: string;
  /** 股份类型 */
  share_type: string;
}

export interface ShareFloatParams {
  /** TS股票代码 */
  ts_code?: string;
  /** 公告日期（日期格式：YYYYMMDD，下同） */
  ann_date?: string;
  /** 解禁日期 */
  float_date?: string;
  /** 解禁开始日期 */
  start_date?: string;
  /** 解禁结束日期 */
  end_date?: string;
}
