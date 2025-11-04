/**
 * 可转债转股结果
 * 获取可转债转股结果限量：单次最大2000，总量不限制权限：用户需要至少2000积分才可以调取，但有流量控制，5000积分以上频次相对较高，积分越多权限越大，具体请参阅积分获取办法
 */
export const CbShareApi = "cb_share"

export interface CbShareItem {
  /** 债券代码 */
  ts_code: string;
  /** 债券简称 */
  bond_short_name: string;
  /** 公告日期 */
  publish_date: string;
  /** 统计截止日期 */
  end_date: string;
  /** 可转债发行总额 */
  issue_size: number;
  /** 初始转换价格 */
  convert_price_initial: number;
  /** 本次转换价格 */
  convert_price: number;
  /** 本次转股金额 */
  convert_val: number;
  /** 本次转股数量 */
  convert_vol: number;
  /** 本次转股比例 */
  convert_ratio: number;
  /** 累计转股金额 */
  acc_convert_val: number;
  /** 累计转股数量 */
  acc_convert_vol: number;
  /** 累计转股比例 */
  acc_convert_ratio: number;
  /** 可转债剩余金额 */
  remain_size: number;
  /** 转股后总股本 */
  total_shares: number;
}

export interface CbShareParams {
  /** 转债代码，支持多值输入 */
  ts_code?: string;
  /** 公告日期（YYYYMMDD格式，下同） */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
