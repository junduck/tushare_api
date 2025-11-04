/**
 * 基金经理
 * 获取公募基金经理数据，包括基金经理简历等数据限量：单次最大5000，支持分页提取数据积分：用户有500积分可获取数据，2000积分以上可以提高访问频次
 */
export const FundManagerApi = "fund_manager"

export interface FundManagerItem {
  /** 基金代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 基金经理姓名 */
  name: string;
  /** 性别 */
  gender: string;
  /** 出生年份 */
  birth_year: string;
  /** 学历 */
  edu: string;
  /** 国籍 */
  nationality: string;
  /** 任职日期 */
  begin_date: string;
  /** 离任日期 */
  end_date: string;
  /** 简历 */
  resume: string;
}

export interface FundManagerParams {
  /** 基金代码，支持多只基金，逗号分隔 */
  ts_code?: string;
  /** 公告日期，格式：YYYYMMDD */
  ann_date?: string;
  /** 基金经理姓名 */
  name?: string;
  /** 开始行数 */
  offset?: string;
  /** 每页行数 */
  limit?: number;
}
