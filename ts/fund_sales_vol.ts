/**
 * 销售机构公募基金销售保有规模
 * 获取销售机构公募基金销售保有规模数据，本数据从2021年Q1开始公布，季度更新限量：单次最大500行数据，目前总量只有100行，未来随着数据量增加会提高上限
 */
export const FundSalesVolApi = "fund_sales_vol"

export interface FundSalesVolItem {
  /** 年度 */
  year: number;
  /** 季度 */
  quarter: string;
  /** 销售机构 */
  inst_name: string;
  /** 股票+混合公募基金保有规模（亿元） */
  fund_scale: number;
  /** 非货币市场公募基金保有规模（亿元） */
  scale: number;
  /** 排名 */
  rank: number;
}

export interface FundSalesVolParams {
  /** 年度 */
  year?: string;
  /** 季度 */
  quarter?: string;
  /** 机构名称 */
  name?: string;
}
