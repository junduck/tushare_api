/**
 * 上市公司管理层
 * 获取上市公司管理层积分：用户需要2000积分才可以调取，5000积分以上频次相对较高，具体请参阅积分获取办法
 */
export const StkManagersApi = "stk_managers"

export interface StkManagersItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 姓名 */
  name: string;
  /** 性别 */
  gender: string;
  /** 岗位类别 */
  lev: string;
  /** 岗位 */
  title: string;
  /** 学历 */
  edu: string;
  /** 国籍 */
  national: string;
  /** 出生年月 */
  birthday: string;
  /** 上任日期 */
  begin_date: string;
  /** 离任日期 */
  end_date: string;
  /** 个人简历 */
  resume?: string;
}

export interface StkManagersParams {
  /** 股票代码，支持单个或多个股票输入 */
  ts_code?: string;
  /** 公告日期（YYYYMMDD格式，下同） */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
