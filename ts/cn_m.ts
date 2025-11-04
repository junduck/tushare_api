/**
 * 货币供应量（月）
 * 获取货币供应量之月度数据限量：单次最大5000，一次可以提取全部数据权限：用户积累600积分可以使用，具体请参阅积分获取办法
 */
export const CnMApi = "cn_m"

export interface CnMItem {
  /** 月份YYYYMM */
  month: string;
  /** M0（亿元） */
  m0: number;
  /** M0同比（%） */
  m0_yoy: number;
  /** M0环比（%） */
  m0_mom: number;
  /** M1（亿元） */
  m1: number;
  /** M1同比（%） */
  m1_yoy: number;
  /** M1环比（%） */
  m1_mom: number;
  /** M2（亿元） */
  m2: number;
  /** M2同比（%） */
  m2_yoy: number;
  /** M2环比（%） */
  m2_mom: number;
}

export interface CnMParams {
  /** 月度（202001表示，2020年1月） */
  m?: string;
  /** 开始月度 */
  start_m?: string;
  /** 结束月度 */
  end_m?: string;
  /** 指定输出字段（e.g. fields='month,m0,m1,m2'） */
  fields?: string;
}
