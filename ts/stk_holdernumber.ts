/**
 * 股东人数
 * 获取上市公司股东户数数据，数据不定期公布限量：单次最大3000,总量不限制积分：600积分可调取，基础积分每分钟调取100次，5000积分以上频次相对较高。具体请参阅积分获取办法
 */
export const StkHoldernumberApi = "stk_holdernumber"

export interface StkHoldernumberItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 截止日期 */
  end_date: string;
  /** 股东户数 */
  holder_num: number;
}

export interface StkHoldernumberParams {
  /** TS股票代码 */
  ts_code?: string;
  /** 公告日期 */
  ann_date?: string;
  /** 截止日期 */
  enddate?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
