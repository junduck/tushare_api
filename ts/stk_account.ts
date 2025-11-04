/**
 * 股票开户数据（停）
 * 获取股票账户开户数据，统计周期为一周积分：600积分可调取，具体请参阅积分获取办法
 */
export const StkAccountApi = "stk_account"

export interface StkAccountItem {
  /** 统计周期 */
  date: string;
  /** 本周新增（万） */
  weekly_new: number;
  /** 期末总账户数（万） */
  total: number;
  /** 本周持仓账户数（万） */
  weekly_hold: number;
  /** 本周参与交易账户数（万） */
  weekly_trade: number;
}

export interface StkAccountParams {
  /** 日期 */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
