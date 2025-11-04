/**
 * 各渠道公募基金销售保有规模占比
 * 获取各渠道公募基金销售保有规模占比数据，年度更新限量：单次最大100行数据，数据从2015年开始公布，当前数据量很小
 */
export const FundSalesRatioApi = "fund_sales_ratio"

export interface FundSalesRatioItem {
  /** 年度 */
  year: number;
  /** 商业银行（%） */
  bank: number;
  /** 证券公司（%） */
  sec_comp: number;
  /** 基金公司直销（%） */
  fund_comp: number;
  /** 独立基金销售机构（%） */
  indep_comp: number;
  /** 其他（%） */
  rests: number;
}

export interface FundSalesRatioParams {
  /** 年度 */
  year?: string;
}
