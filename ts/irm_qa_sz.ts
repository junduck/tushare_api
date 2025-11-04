/**
 * 深证易互动问答
 * 互动易是由深交所官方推出,供投资者与上市公司直接沟通的平台,一站式公司资讯汇集,提供第一手的互动问答、投资者关系信息、公司声音等内容。限量：单次请求最大返回3000行数据，可根据股票代码，日期等参数循环提取全部数据权限：用户后120积分可以试用，正式权限为10000积分，或申请单独开权限，请参考权限说明
 */
export const IrmQaSzApi = "irm_qa_sz"

export interface IrmQaSzItem {
  /** 股票代码 */
  ts_code: string;
  /** 公司名称 */
  name: string;
  /** 发布时间 */
  trade_date: string;
  /** 问题 */
  q: string;
  /** 回复 */
  a: string;
  /** 答复时间 */
  pub_time: string;
  /** 涉及行业 */
  industry: string;
}

export interface IrmQaSzParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（格式YYYYMMDD，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 发布开始日期(格式：2025-06-03 16:43:03) */
  pub_date?: string;
}
