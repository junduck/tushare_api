/**
 * 美股基础信息
 * 获取美股列表信息限量：单次最大6000，可分页提取积分：120积分可以试用，5000积分有正式权限
 */
export const UsBasicApi = "us_basic"

export interface UsBasicItem {
  /** 美股代码 */
  ts_code: string;
  /** 中文名称 */
  name: string;
  /** 英文名称 */
  enname?: string;
  /** 分类ADR/GDR/EQ */
  classify: string;
  /** 上市日期 */
  list_date: string;
  /** 退市日期 */
  delist_date: string;
}

export interface UsBasicParams {
  /** 股票代码 */
  ts_code?: string;
  /** 股票分类 */
  classify?: string;
  /** 开始行数 */
  offset?: string;
  /** 每页最大行数 */
  limit?: string;
}
