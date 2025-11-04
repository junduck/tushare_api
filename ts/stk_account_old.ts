/**
 * 股票开户数据（旧）
 * 获取股票账户开户数据旧版格式数据，数据从2008年1月开始，到2015年5月29，新数据请通过股票开户数据获取。积分：600积分可调取，具体请参阅积分获取办法
 */
export const StkAccountOldApi = "stk_account_old"

export interface StkAccountOldItem {
  /** 统计周期 */
  date: string;
  /** 本周新增（上海，户） */
  new_sh: number;
  /** 本周新增（深圳，户） */
  new_sz: number;
  /** 期末有效账户（上海，万户） */
  active_sh: number;
  /** 期末有效账户（深圳，万户） */
  active_sz: number;
  /** 期末账户数（上海，万户） */
  total_sh: number;
  /** 期末账户数（深圳，万户） */
  total_sz: number;
  /** 参与交易账户数（上海，万户） */
  trade_sh: number;
  /** 参与交易账户数（深圳，万户） */
  trade_sz: number;
}

export interface StkAccountOldParams {
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
