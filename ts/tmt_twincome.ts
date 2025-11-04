/**
 * 台湾电子产业月营收
 * 获取台湾TMT电子产业领域各类产品月度营收数据。
 */
export const TmtTwincomeApi = "tmt_twincome"

export interface TmtTwincomeItem {
  /** 报告期 */
  date: string;
  /** 产品代码 */
  item: string;
  /** 月度收入 */
  op_income: string;
}

export interface TmtTwincomeParams {
  /** 报告期 */
  date?: string;
  /** 产品代码 */
  item?: string;
  /** 报告期开始日期 */
  start_date?: string;
  /** 报告期结束日期 */
  end_date?: string;
}
