/**
 * 管理层薪酬和持股
 * 获取上市公司管理层薪酬和持股积分：用户需要2000积分才可以调取，5000积分以上频次相对较高，具体请参阅积分获取办法
 */
export const StkRewardsApi = "stk_rewards"

export interface StkRewardsItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 截止日期 */
  end_date: string;
  /** 姓名 */
  name: string;
  /** 职务 */
  title: string;
  /** 报酬 */
  reward: number;
  /** 持股数 */
  hold_vol: number;
}

export interface StkRewardsParams {
  /** TS股票代码，支持单个或多个代码输入 */
  ts_code?: string;
  /** 报告期 */
  end_date?: string;
}
