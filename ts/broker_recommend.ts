/**
 * 券商月度金股
 * 获取券商月度金股，一般1日~3日内更新当月数据限量：单次最大1000行数据，可循环提取积分：积分达到2000即可调用，具体请参阅积分获取办法
 */
export const BrokerRecommendApi = "broker_recommend"

export interface BrokerRecommendItem {
  /** 月度 */
  month: string;
  /** 券商 */
  broker: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票简称 */
  name: string;
}

export interface BrokerRecommendParams {
  /** 月度（YYYYMM） */
  month?: string;
}
