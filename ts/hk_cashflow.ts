/**
 * 港股现金流量表
 * 获取港股上市公司现金流量表数据权限：需单独开权限或有15000积分，具体权限信息请参考权限列表提示：当前接口按单只股票获取其历史数据，单次请求最大返回10000行数据，可循环提取
 */
export const HkCashflowApi = "hk_cashflow"

export interface HkCashflowItem {
  /** 股票代码 */
  ts_code: string;
  /** 报告期 */
  end_date: string;
  /** 股票名称 */
  name: string;
  /** 财务科目名称 */
  ind_name: string;
  /** 财务科目值 */
  ind_value: number;
}

export interface HkCashflowParams {
  /** 股票代码 */
  ts_code?: string;
  /** 报告期(格式：YYYYMMDD） */
  period?: string;
  /** 指标名（如：新增贷款） */
  ind_name?: string;
  /** 报告期开始日期（格式：YYYYMMDD） */
  start_date?: string;
  /** 报告结束始日期（格式：YYYYMMDD） */
  end_date?: string;
}
