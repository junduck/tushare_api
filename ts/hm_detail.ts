/**
 * 游资交易每日明细
 * 获取每日游资交易明细，数据开始于2022年8。游资分类名录，请点击游资名录限量：单次最多提取2000条记录，可循环调取，总量不限制积分：用户积10000积分可调取使用，积分获取办法请参阅积分获取办法
 */
export const HmDetailApi = "hm_detail"

export interface HmDetailItem {
  /** 交易日期 */
  trade_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  ts_name: string;
  /** 买入金额（元） */
  buy_amount: number;
  /** 卖出金额（元） */
  sell_amount: number;
  /** 净买卖（元） */
  net_amount: number;
  /** 游资名称 */
  hm_name: string;
  /** 关联机构（一般为营业部或机构专用） */
  hm_orgs: string;
  /** 标签 */
  tag?: string;
}

export interface HmDetailParams {
  /** 交易日期(YYYYMMDD) */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
  /** 游资名称 */
  hm_name?: string;
  /** 开始日期(YYYYMMDD) */
  start_date?: string;
  /** 结束日期(YYYYMMDD) */
  end_date?: string;
}
