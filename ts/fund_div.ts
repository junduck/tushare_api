/**
 * 基金分红
 * 获取公募基金分红数据积分：用户需要至少400积分才可以调取，具体请参阅积分获取办法
 */
export const FundDivApi = "fund_div"

export interface FundDivItem {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 分红实施公告日 */
  imp_anndate: string;
  /** 分配收益基准日 */
  base_date: string;
  /** 方案进度 */
  div_proc: string;
  /** 权益登记日 */
  record_date: string;
  /** 除息日 */
  ex_date: string;
  /** 派息日 */
  pay_date: string;
  /** 收益支付日 */
  earpay_date: string;
  /** 净值除权日 */
  net_ex_date: string;
  /** 每股派息(元) */
  div_cash: number;
  /** 基准基金份额(万份) */
  base_unit: number;
  /** 可分配收益(元) */
  ear_distr: number;
  /** 收益分配金额(元) */
  ear_amount: number;
  /** 红利再投资到账日 */
  account_date: string;
  /** 份额基准年度 */
  base_year: string;
}

export interface FundDivParams {
  /** 公告日（以下参数四选一） */
  ann_date?: string;
  /** 除息日 */
  ex_date?: string;
  /** 派息日 */
  pay_date?: string;
  /** 基金代码 */
  ts_code?: string;
}
