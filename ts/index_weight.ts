/**
 * 指数成分和权重
 * 获取各类指数成分和权重，月度数据 ，建议输入参数里开始日期和结束日分别输入当月第一天和最后一天的日期。来源：指数公司网站公开数据积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const IndexWeightApi = "index_weight"

export interface IndexWeightItem {
  /** 指数代码 */
  index_code: string;
  /** 成分代码 */
  con_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 权重 */
  weight: number;
}

export interface IndexWeightParams {
  /** 指数代码，来源指数基础信息接口 */
  index_code?: string;
  /** 交易日期（格式YYYYMMDD，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
