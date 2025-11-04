/**
 * 基金净值
 * 获取公募基金净值数据积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const FundNavApi = "fund_nav"

export interface FundNavItem {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 净值日期 */
  nav_date: string;
  /** 单位净值 */
  unit_nav: number;
  /** 累计净值 */
  accum_nav: number;
  /** 累计分红 */
  accum_div: number;
  /** 资产净值 */
  net_asset: number;
  /** 合计资产净值 */
  total_netasset: number;
  /** 复权单位净值 */
  adj_nav: number;
}

export interface FundNavParams {
  /** TS基金代码 （二选一） */
  ts_code?: string;
  /** 净值日期 （二选一） */
  nav_date?: string;
  /** E场内 O场外 */
  market?: string;
  /** 净值开始日期 */
  start_date?: string;
  /** 净值结束日期 */
  end_date?: string;
}
