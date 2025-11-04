/**
 * 港股财务指标数据
 * 获取港股上市公司财务指标数据，为避免服务器压力，现阶段每次请求最多返回200条记录，可通过设置日期多次请求获取更多数据。权限：需单独开权限或有15000积分，具体权限信息请参考权限列表提示：当前接口按单只股票获取其历史数据，单次请求最大返回10000行数据，可循环提取
 */
export const HkFinaIndicatorApi = "hk_fina_indicator"

export interface HkFinaIndicatorItem {
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 报告期 */
  end_date: string;
  /** 报告类型,Q-按报告期(季度),Y-按年度 */
  ind_type: string;
  /** 报告期类型 */
  report_type: string;
  /** 标准报告期 */
  std_report_date: string;
  /** 每股经营现金流(元) */
  per_netcash_operate: number;
  /** 每股营业收入(元) */
  per_oi: number;
  /** 每股净资产(元) */
  bps: number;
  /** 基本每股收益(元) */
  basic_eps: number;
  /** 稀释每股收益(元) */
  diluted_eps: number;
  /** 营业总收入(元) */
  operate_income: number;
  /** 营业总收入同比增长(%) */
  operate_income_yoy: number;
  /** 毛利润(元) */
  gross_profit: number;
  /** 毛利润同比增长(%) */
  gross_profit_yoy: number;
  /** 归母净利润(元) */
  holder_profit: number;
  /** 归母净利润同比增长(%) */
  holder_profit_yoy: number;
  /** 毛利率(%) */
  gross_profit_ratio: number;
  /** ttm每股收益(元) */
  eps_ttm: number;
  /** 营业总收入滚动环比增长(%) */
  operate_income_qoq: number;
  /** 净利率(%) */
  net_profit_ratio: number;
  /** 平均净资产收益率(%) */
  roe_avg: number;
  /** 毛利润滚动环比增长(%) */
  gross_profit_qoq: number;
  /** 总资产净利率(%) */
  roa: number;
  /** 归母净利润滚动环比增长(%) */
  holder_profit_qoq: number;
  /** 年化净资产收益率(%) */
  roe_yearly: number;
  /** 年化投资回报率(%) */
  roic_yearly: number;
  /** 资产总额 */
  total_assets: number;
  /** 负债总额 */
  total_liabilities: number;
  /** 所得税/利润总额(%) */
  tax_ebt: number;
  /** 经营现金流/营业收入(%) */
  ocf_sales: number;
  /** 本公司权益持有人应占权益 */
  total_parent_equity: number;
  /** 资产负债率(%) */
  debt_asset_ratio: number;
  /** 经营盈利 */
  operate_profit: number;
  /** 除税前盈利 */
  pretax_profit: number;
  /** 经营活动所得现金流量净额 */
  netcash_operate: number;
  /** 投资活动耗用现金流量净额 */
  netcash_invest: number;
  /** 融资活动耗用现金流量净额 */
  netcash_finance: number;
  /** 期末的现金及现金等价物 */
  end_cash: number;
  /** 分红比例 */
  divi_ratio: number;
  /** 股息率 */
  dividend_rate: number;
  /** 流动比率(倍) */
  current_ratio: number;
  /** 普通股应计股息 */
  common_acs: number;
  /** 流动负债/总负债(%) */
  currentdebt_debt: number;
  /** 已发行普通股 */
  issued_common_shares: number;
  /** 港股本 */
  hk_common_shares: number;
  /** 每手股数 */
  per_shares: number;
  /** 总市值 */
  total_market_cap: number;
  /** 港股市值 */
  hksk_market_cap: number;
  /** 滚动市盈率 */
  pe_ttm: number;
  /** 滚动市净率 */
  pb_ttm: number;
  /** 季报日期 */
  report_date_sq: string;
  /** 报告类型 */
  report_type_sq: string;
  /** 营业收入 */
  operate_income_sq: number;
  /** 每股股息（港元） */
  dps_hkd: number;
  /** 营业收入环比 */
  operate_income_qoq_sq: number;
  /** 净利润率 */
  net_profit_ratio_sq: number;
  /** 归属于股东净利润 */
  holder_profit_sq: number;
  /** 归母净利润环比 */
  holder_profit_qoq_sq: number;
  /** 平均净资产收益率 */
  roe_avg_sq: number;
  /** 季报滚动市盈率 */
  pe_ttm_sq: number;
  /** 季报滚动市净率 */
  pb_ttm_sq: number;
  /** 总资产收益率 */
  roa_sq: number;
  /** 会计年度起始日 */
  start_date: number;
  /** 会计年度截止日 */
  fiscal_year: number;
  /** 币种 港元（hkd） */
  currency: string;
  /** 是否人民币代码 */
  is_cny_code: number;
  /** 上一年每股股息 */
  dps_hkd_ly: number;
  /** 企业类型 */
  org_type: string;
  /** 保费收入 */
  premium_income: number;
  /** 保费收入同比 */
  premium_income_yoy: number;
  /** 净利息收入 */
  net_interest_income: number;
  /** 净利息收入同比 */
  net_interest_income_yoy: number;
  /** 手续费及佣金收入 */
  fee_commission_income: number;
  /** 手续费及佣金收入同比 */
  fee_commission_income_yoy: number;
  /** 应收账款周转率(次) */
  accounts_rece_tdays: number;
  /** 存货周转率(次) */
  inventory_tdays: number;
  /** 流动资产周转率(次) */
  current_assets_tdays: number;
  /** 总资产周转率(次) */
  total_assets_tdays: number;
  /** 保险赔付支出 */
  premium_expense: number;
  /** 贷款/存款 */
  loan_deposit: number;
  /** 贷款/股东权益 */
  loan_equity: number;
  /** 贷款/总资产 */
  loan_assets: number;
  /** 存款/股东权益 */
  deposit_equity: number;
  /** 存款/总资产 */
  deposit_assets: number;
  /** 权益乘数 */
  equity_multiplier: number;
  /** 产权比率 */
  equity_ratio: number;
}

export interface HkFinaIndicatorParams {
  /** 股票代码 */
  ts_code?: string;
  /** 报告期(格式：YYYYMMDD） */
  period?: string;
  /** 报告期类型（Q1一季报Q2半年报Q3三季报Q4年报） */
  report_type?: string;
  /** 报告期开始日期(格式：YYYYMMDD） */
  start_date?: string;
  /** 报告结束日期(格式：YYYYMMDD） */
  end_date?: string;
}
