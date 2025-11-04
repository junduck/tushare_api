/**
 * 可转债发行
 * 获取可转债发行数据限量：单次最大2000，可多次提取，总量不限制积分：用户需要至少2000积分才可以调取，5000积分以上频次相对较高，积分越多权限越大，具体请参阅积分获取办法
 */
export const CbIssueApi = "cb_issue"

export interface CbIssueItem {
  /** 转债代码 */
  ts_code: string;
  /** 发行公告日 */
  ann_date: string;
  /** 发行结果公告日 */
  res_ann_date: string;
  /** 计划发行总额（元） */
  plan_issue_size: number;
  /** 发行总额（元） */
  issue_size: number;
  /** 发行价格 */
  issue_price: number;
  /** 发行方式 */
  issue_type: string;
  /** 发行费用（元） */
  issue_cost?: number;
  /** 网上申购代码 */
  onl_code: string;
  /** 网上申购简称 */
  onl_name: string;
  /** 网上发行日期 */
  onl_date: string;
  /** 网上发行总额（张） */
  onl_size: number;
  /** 网上发行有效申购数量（张） */
  onl_pch_vol: number;
  /** 网上发行有效申购户数 */
  onl_pch_num: number;
  /** 网上发行超额认购倍数 */
  onl_pch_excess: number;
  /** 网上发行中签率（%） */
  onl_winning_rate?: number;
  /** 老股东配售代码 */
  shd_ration_code: string;
  /** 老股东配售简称 */
  shd_ration_name: string;
  /** 老股东配售日 */
  shd_ration_date: string;
  /** 老股东配售股权登记日 */
  shd_ration_record_date: string;
  /** 老股东配售缴款日 */
  shd_ration_pay_date: string;
  /** 老股东配售价格 */
  shd_ration_price: number;
  /** 老股东配售比例 */
  shd_ration_ratio: number;
  /** 老股东配售数量（张） */
  shd_ration_size: number;
  /** 老股东配售有效申购数量（张） */
  shd_ration_vol?: number;
  /** 老股东配售有效申购户数 */
  shd_ration_num?: number;
  /** 老股东配售超额认购倍数 */
  shd_ration_excess?: number;
  /** 网下发行总额（张） */
  offl_size: number;
  /** 网下发行定金比例（%） */
  offl_deposit?: number;
  /** 网下发行有效申购数量（张） */
  offl_pch_vol?: number;
  /** 网下发行有效申购户数 */
  offl_pch_num?: number;
  /** 网下发行超额认购倍数 */
  offl_pch_excess?: number;
  /** 网下发行中签率 */
  offl_winning_rate?: number;
  /** 主承销商 */
  lead_underwriter?: string;
  /** 主承销商包销数量（张） */
  lead_underwriter_vol?: number;
}

export interface CbIssueParams {
  /** TS代码 */
  ts_code?: string;
  /** 发行公告日 */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
