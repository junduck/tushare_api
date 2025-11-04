/**
 * 每日筹码及胜率
 * 获取A股每日筹码平均成本和胜率情况，每天17~18点左右更新，数据从2018年开始来源：Tushare社区限量：单次最大5000条，可以分页或者循环提取积分：120积分可以试用(查看数据)，5000积分每天20000次，10000积分每天200000次，15000积分每天不限总量
 */
export const CyqPerfApi = "cyq_perf"

export interface CyqPerfItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 历史最低价 */
  his_low: number;
  /** 历史最高价 */
  his_high: number;
  /** 5分位成本 */
  cost_5pct: number;
  /** 15分位成本 */
  cost_15pct: number;
  /** 50分位成本 */
  cost_50pct: number;
  /** 85分位成本 */
  cost_85pct: number;
  /** 95分位成本 */
  cost_95pct: number;
  /** 加权平均成本 */
  weight_avg: number;
  /** 胜率 */
  winner_rate: number;
}

export interface CyqPerfParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（YYYYMMDD） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
