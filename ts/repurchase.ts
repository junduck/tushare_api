/**
 * 股票回购
 * 获取上市公司回购股票数据积分：用户需要至少600积分才可以调取，具体请参阅积分获取办法
 */
export const RepurchaseApi = "repurchase"

export interface RepurchaseItem {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 截止日期 */
  end_date: string;
  /** 进度 */
  proc: string;
  /** 过期日期 */
  exp_date: string;
  /** 回购数量 */
  vol: number;
  /** 回购金额 */
  amount: number;
  /** 回购最高价 */
  high_limit: number;
  /** 回购最低价 */
  low_limit: number;
}

export interface RepurchaseParams {
  /** 公告日期（任意填参数，如果都不填，单次默认返回2000条） */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
