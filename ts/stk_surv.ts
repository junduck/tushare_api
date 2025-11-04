/**
 * 机构调研数据
 * 获取上市公司机构调研记录数据限量：单次最大获取100条数据，可循环或分页提取积分：用户积5000积分可使用
 */
export const StkSurvApi = "stk_surv"

export interface StkSurvItem {
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 调研日期 */
  surv_date: string;
  /** 机构参与人员 */
  fund_visitors: string;
  /** 接待地点 */
  rece_place: string;
  /** 接待方式 */
  rece_mode: string;
  /** 接待的公司 */
  rece_org: string;
  /** 接待公司类型 */
  org_type: string;
  /** 上市公司接待人员 */
  comp_rece: string;
  /** 调研内容 */
  content?: string;
}

export interface StkSurvParams {
  /** 股票代码 */
  ts_code?: string;
  /** 调研日期 */
  trade_date?: string;
  /** 调研开始日期 */
  start_date?: string;
  /** 调研结束日期 */
  end_date?: string;
}
