/**
 * 券商盈利预测数据
 * 获取券商（卖方）每天研报的盈利预测数据，数据从2010年开始，每晚19~22点更新当日数据限量：单次最大3000条，可分页和循环提取所有数据权限：本接口120积分可以试用，每天10次请求，正式权限需8000积分，每天可请求100000次，10000积分以上无总量限制。
 */
export const ReportRcApi = "report_rc"

export interface ReportRcItem {
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 研报日期 */
  report_date: string;
  /** 报告标题 */
  report_title: string;
  /** 报告类型 */
  report_type: string;
  /** 报告分类 */
  classify: string;
  /** 机构名称 */
  org_name: string;
  /** 作者 */
  author_name: string;
  /** 预测报告期 */
  quarter: string;
  /** 预测营业收入（万元） */
  op_rt: number;
  /** 预测营业利润（万元） */
  op_pr: number;
  /** 预测利润总额（万元） */
  tp: number;
  /** 预测净利润（万元） */
  np: number;
  /** 预测每股收益（元） */
  eps: number;
  /** 预测市盈率 */
  pe: number;
  /** 预测股息率 */
  rd: number;
  /** 预测净资产收益率 */
  roe: number;
  /** 预测EV/EBITDA */
  ev_ebitda: number;
  /** 卖方评级 */
  rating: string;
  /** 预测最高目标价 */
  max_price: number;
  /** 预测最低目标价 */
  min_price: number;
  /** 机构关注度 */
  imp_dg?: string;
  /** TS数据更新时间 */
  create_time?: string;
}

export interface ReportRcParams {
  /** 股票代码 */
  ts_code?: string;
  /** 报告日期 */
  report_date?: string;
  /** 报告开始日期 */
  start_date?: string;
  /** 报告结束日期 */
  end_date?: string;
}
