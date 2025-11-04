/**
 * 社融增量（月度）
 * 获取月度社会融资数据限量：单次最大2000条数据，可循环提取积分：需2000积分
 */
export const SfMonthApi = "sf_month"

export interface SfMonthItem {
  /** 月度 */
  month: string;
  /** 社融增量当月值（亿元） */
  inc_month: number;
  /** 社融增量累计值（亿元） */
  inc_cumval: number;
  /** 社融存量期末值（万亿元） */
  stk_endval: number;
}

export interface SfMonthParams {
  /** 月份（YYYYMM，下同），支持多个月份同时输入，逗号分隔 */
  m?: string;
  /** 开始月份 */
  start_m?: string;
  /** 结束月份 */
  end_m?: string;
}
