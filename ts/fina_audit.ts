/**
 * 财务审计意见
 * 获取上市公司定期财务审计意见数据权限：用户需要至少500积分才可以调取，具体请参阅积分获取办法
 */
export const FinaAuditApi = "fina_audit"

export interface FinaAuditItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 审计结果 */
  audit_result: string;
  /** 审计总费用（元） */
  audit_fees: number;
  /** 会计事务所 */
  audit_agency: string;
  /** 签字会计师 */
  audit_sign: string;
}

export interface FinaAuditParams {
  /** 股票代码 */
  ts_code?: string;
  /** 公告日期 */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
  /** 报告期(每个季度最后一天的日期,比如20171231表示年报) */
  period?: string;
}
