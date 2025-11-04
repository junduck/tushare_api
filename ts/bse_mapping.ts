/**
 * 北交所新旧代码对照
 * 获取北交所股票代码变更后新旧代码映射表数据限量：单次最大1000条（本接口总数据量300以内）积分：120积分即可调取
 */
export const BseMappingApi = "bse_mapping"

export interface BseMappingItem {
  /** 股票名称 */
  name: string;
  /** 原代码 */
  o_code: string;
  /** 新代码 */
  n_code: string;
  /** 上市日期 */
  list_date: string;
}

export interface BseMappingParams {
  /** 旧代码 */
  o_code?: string;
  /** 新代码 */
  n_code?: string;
}
