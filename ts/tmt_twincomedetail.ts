/**
 * 台湾电子产业月营收明细
 * 获取台湾TMT行业上市公司各类产品月度营收情况。
 */
export const TmtTwincomedetailApi = "tmt_twincomedetail"

export interface TmtTwincomedetailItem {
  /** 报告期 */
  date: string;
  /** 产品代码 */
  item: string;
  /** 公司代码 */
  symbol: string;
  /** 月度营收 */
  op_income: string;
  /** 合并月度营收（默认不展示） */
  consop_income: string;
}

export interface TmtTwincomedetailParams {
  /** 报告期 */
  date?: string;
  /** 产品代码 */
  item?: string;
  /** 公司代码 */
  symbol?: string;
  /** 报告期开始日期 */
  start_date?: string;
  /** 报告期结束日期 */
  end_date?: string;
  /** None */
  source?: string;
}
