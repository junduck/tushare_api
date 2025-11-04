/**
 * 分红送股数据
 * 分红送股数据权限：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const DividendApi = "dividend"

export interface DividendItem {
  /** TS代码 */
  ts_code: string;
  /** 分红年度 */
  end_date: string;
  /** 预案公告日 */
  ann_date: string;
  /** 实施进度 */
  div_proc: string;
  /** 每股送转 */
  stk_div: number;
  /** 每股送股比例 */
  stk_bo_rate: number;
  /** 每股转增比例 */
  stk_co_rate: number;
  /** 每股分红（税后） */
  cash_div: number;
  /** 每股分红（税前） */
  cash_div_tax: number;
  /** 股权登记日 */
  record_date: string;
  /** 除权除息日 */
  ex_date: string;
  /** 派息日 */
  pay_date: string;
  /** 红股上市日 */
  div_listdate: string;
  /** 实施公告日 */
  imp_ann_date: string;
  /** 基准日 */
  base_date?: string;
  /** 基准股本（万） */
  base_share?: number;
}

export interface DividendParams {
  /** TS代码 */
  ts_code?: string;
  /** 公告日 */
  ann_date?: string;
  /** 股权登记日期 */
  record_date?: string;
  /** 除权除息日 */
  ex_date?: string;
  /** 实施公告日 */
  imp_ann_date?: string;
}
