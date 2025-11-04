/**
 * 股权质押明细数据
 * 获取股票质押明细数据限量：单次最大1000积分：用户需要至少500积分才可以调取，具体请参阅积分获取办法
 */
export const PledgeDetailApi = "pledge_detail"

export interface PledgeDetailItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 股东名称 */
  holder_name: string;
  /** 质押数量（万股） */
  pledge_amount: number;
  /** 质押开始日期 */
  start_date: string;
  /** 质押结束日期 */
  end_date: string;
  /** 是否已解押 */
  is_release: string;
  /** 解押日期 */
  release_date: string;
  /** 质押方 */
  pledgor: string;
  /** 持股总数（万股） */
  holding_amount: number;
  /** 质押总数（万股） */
  pledged_amount: number;
  /** 本次质押占总股本比例 */
  p_total_ratio: number;
  /** 持股总数占总股本比例 */
  h_total_ratio: number;
  /** 是否回购 */
  is_buyback: string;
}

export interface PledgeDetailParams {
  /** 股票代码 */
  ts_code?: string;
}
