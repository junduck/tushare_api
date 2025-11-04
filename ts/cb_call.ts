/**
 * 可转债赎回信息
 * 获取可转债到期赎回、强制赎回等信息。数据来源于公开披露渠道，供个人和机构研究使用，请不要用于数据商业目的。限量：单次最大2000条数据，可以根据日期循环提取，本接口需5000积分。
 */
export const CbCallApi = "cb_call"

export interface CbCallItem {
  /** 转债代码 */
  ts_code: string;
  /** 赎回类型：到赎、强赎 */
  call_type: string;
  /** 是否赎回：已满足强赎条件、公告提示强赎、公告实施强赎、公告到期赎回、公告不强赎 */
  is_call: string;
  /** 公告/提示日期 */
  ann_date: string;
  /** 赎回日期 */
  call_date: string;
  /** 赎回价格(含税，元/张) */
  call_price: number;
  /** 赎回价格(扣税，元/张) */
  call_price_tax: number;
  /** 赎回债券数量(张) */
  call_vol: number;
  /** 赎回金额(万元) */
  call_amount: number;
  /** 行权后款项到账日 */
  payment_date: string;
  /** 赎回登记日 */
  call_reg_date: string;
}

export interface CbCallParams {
  /** 转债代码，支持多值输入 */
  ts_code?: string;
  /** 公告日期(YYYYMMDD格式，下同) */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
