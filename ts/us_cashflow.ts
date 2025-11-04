/**
 * 美股现金流量表
 * 获取美股上市公司现金流量表数据（目前只覆盖主要美股和中概股）权限：需单独开权限或有15000积分，具体权限信息请参考权限列表提示：当前接口按单只股票获取其历史数据，单次请求最大返回10000行数据，可循环提取
 */
export const UsCashflowApi = "us_cashflow"

export interface UsCashflowItem {
  /** 股票代码 */
  ts_code: string;
  /** 报告期 */
  end_date: string;
  /** 报告期类型(Q1一季报Q2半年报Q3三季报Q4年报) */
  ind_type: string;
  /** 股票名称 */
  name: string;
  /** 财务科目名称 */
  ind_name: string;
  /** 财务科目值 */
  ind_value: number;
  /** 报告类型 */
  report_type: string;
}

export interface UsCashflowParams {
  /** 股票代码 */
  ts_code?: string;
  /** 报告期（格式：YYYYMMDD，每个季度最后一天的日期，如20241231) */
  period?: string;
  /** 指标名(如：新增借款） */
  ind_name?: string;
  /** 报告期类型(Q1一季报Q2半年报Q3三季报Q4年报) */
  report_type?: string;
  /** 报告期开始时间（格式：YYYYMMDD） */
  start_date?: string;
  /** 报告结束始时间（格式：YYYYMMDD） */
  end_date?: string;
}
