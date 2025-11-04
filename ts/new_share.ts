/**
 * IPO新股上市
 * 获取新股上市列表数据限量：单次最大2000条，总量不限制积分：用户需要至少120积分才可以调取，具体请参阅积分获取办法
 */
export const NewShareApi = "new_share"

export interface NewShareItem {
  /** TS股票代码 */
  ts_code: string;
  /** 申购代码 */
  sub_code: string;
  /** 名称 */
  name: string;
  /** 上网发行日期 */
  ipo_date: string;
  /** 上市日期 */
  issue_date: string;
  /** 发行总量（万股） */
  amount: number;
  /** 上网发行总量（万股） */
  market_amount: number;
  /** 发行价格 */
  price: number;
  /** 市盈率 */
  pe: number;
  /** 个人申购上限（万股） */
  limit_amount: number;
  /** 募集资金（亿元） */
  funds: number;
  /** 中签率 */
  ballot: number;
}

export interface NewShareParams {
  /** 上网发行开始日期 */
  start_date?: string;
  /** 上网发行结束日期 */
  end_date?: string;
}
