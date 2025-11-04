/**
 * 涨停股票连板天梯
 * 获取每天连板个数晋级的股票，可以分析出每天连续涨停进阶个数，判断强势热度限量：单次最大2000行数据，可根据股票代码或者日期循环提取全部积分：8000积分以上每分钟500次，每天总量不限制，具体请参阅积分获取办法
 */
export const LimitStepApi = "limit_step"

export interface LimitStepItem {
  /** 代码 */
  ts_code: string;
  /** 名称 */
  name: string;
  /** 交易日期 */
  trade_date: string;
  /** 连板次数 */
  nums: string;
}

export interface LimitStepParams {
  /** 交易日期（格式：YYYYMMDD，下同） */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 连板次数，支持多个输入，例如nums='2,3' */
  nums?: string;
}
