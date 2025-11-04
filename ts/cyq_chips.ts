/**
 * 每日筹码分布
 * 获取A股每日的筹码分布情况，提供各价位占比，数据从2018年开始，每天17~18点之间更新当日数据来源：Tushare社区限量：单次最大2000条，可以按股票代码和日期循环提取积分：120积分可以试用查看数据，5000积分每天20000次，10000积分每天200000次，15000积分每天不限总量
 */
export const CyqChipsApi = "cyq_chips"

export interface CyqChipsItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 成本价格 */
  price: number;
  /** 价格占比（%） */
  percent: number;
}

export interface CyqChipsParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
