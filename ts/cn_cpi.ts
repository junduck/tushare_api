/**
 * 居民消费价格指数（CPI）
 * 获取CPI居民消费价格数据，包括全国、城市和农村的数据限量：单次最大5000行，一次可以提取全部数据权限：用户积累600积分可以使用，具体请参阅积分获取办法
 */
export const CnCpiApi = "cn_cpi"

export interface CnCpiItem {
  /** 月份YYYYMM */
  month: string;
  /** 全国当月值 */
  nt_val: number;
  /** 全国同比（%） */
  nt_yoy: number;
  /** 全国环比（%） */
  nt_mom: number;
  /** 全国累计值 */
  nt_accu: number;
  /** 城市当月值 */
  town_val: number;
  /** 城市同比（%） */
  town_yoy: number;
  /** 城市环比（%） */
  town_mom: number;
  /** 城市累计值 */
  town_accu: number;
  /** 农村当月值 */
  cnt_val: number;
  /** 农村同比（%） */
  cnt_yoy: number;
  /** 农村环比（%） */
  cnt_mom: number;
  /** 农村累计值 */
  cnt_accu: number;
}

export interface CnCpiParams {
  /** 月份（YYYYMM，下同），支持多个月份同时输入，逗号分隔 */
  m?: string;
  /** 开始月份 */
  start_m?: string;
  /** 结束月份 */
  end_m?: string;
}
