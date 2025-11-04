/**
 * 同花顺行业概念成分
 * 获取同花顺概念板块成分列表注：数据版权归属同花顺，如做商业用途，请主动联系同花顺。限量：用户积累5000积分可调取，每分钟可调取200次，可按概念板块代码循环提取所有成分
 */
export const ThsMemberApi = "ths_member"

export interface ThsMemberItem {
  /** 指数代码 */
  ts_code: string;
  /** 股票代码 */
  con_code: string;
  /** 股票名称 */
  con_name: string;
  /** 权重(暂无) */
  weight?: number;
  /** 纳入日期(暂无) */
  in_date?: string;
  /** 剔除日期(暂无) */
  out_date?: string;
  /** 是否最新Y是N否 */
  is_new?: string;
}

export interface ThsMemberParams {
  /** 板块指数代码 */
  ts_code?: string;
  /** 股票代码 */
  con_code?: string;
}
