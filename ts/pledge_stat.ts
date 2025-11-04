/**
 * 股权质押统计数据
 * 获取股票质押统计数据限量：单次最大1000积分：用户需要至少500积分才可以调取，具体请参阅积分获取办法
 */
export const PledgeStatApi = "pledge_stat"

export interface PledgeStatItem {
  /** TS代码 */
  ts_code: string;
  /** 截止日期 */
  end_date: string;
  /** 质押次数 */
  pledge_count: number;
  /** 无限售股质押数量（万） */
  unrest_pledge: number;
  /** 限售股份质押数量（万） */
  rest_pledge: number;
  /** 总股本 */
  total_share: number;
  /** 质押比例 */
  pledge_ratio: number;
}

export interface PledgeStatParams {
  /** 股票代码 */
  ts_code?: string;
  /** 截止日期 */
  end_date?: string;
}
