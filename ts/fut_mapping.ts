/**
 * 期货主力与连续合约
 * 获取期货主力（或连续）合约与月合约映射数据限量：单次最大2000条，总量不限制积分：用户需要至少2000积分才可以调取，未来可能调整积分，请尽可能多积累积分。具体请参阅积分获取办法
 */
export const FutMappingApi = "fut_mapping"

export interface FutMappingItem {
  /** 连续合约代码 */
  ts_code: string;
  /** 起始日期 */
  trade_date: string;
  /** 期货合约代码 */
  mapping_ts_code: string;
}

export interface FutMappingParams {
  /** 合约代码 */
  ts_code?: string;
  /** 交易日期(YYYYMMDD格式，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
