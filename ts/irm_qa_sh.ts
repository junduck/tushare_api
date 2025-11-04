/**
 * 上证e互动问答
 * 获取上交所e互动董秘问答文本数据。上证e互动是由上海证券交易所建立、上海证券市场所有参与主体无偿使用的沟通平台,旨在引导和促进上市公司、投资者等各市场参与主体之间的信息沟通,构建集中、便捷的互动渠道。本接口数据记录了以上沟通问答的文本数据。限量：单次请求最大返回3000行数据，可根据股票代码，日期等参数循环提取全部数据权限：用户后120积分可以试用，正式权限为10000积分，或申请单独开权限，请参考权限说明
 */
export const IrmQaShApi = "irm_qa_sh"

export interface IrmQaShItem {
  /** 股票代码 */
  ts_code: string;
  /** 公司名称 */
  name: string;
  /** 日期 */
  trade_date: string;
  /** 问题 */
  q: string;
  /** 回复 */
  a: string;
  /** 回复时间 */
  pub_time: string;
}

export interface IrmQaShParams {
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
