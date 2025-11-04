/**
 * 美股财务指标数据
 * 获取美股上市公司财务指标数据，目前只覆盖主要美股和中概股。为避免服务器压力，现阶段每次请求最多返回200条记录，可通过设置日期多次请求获取更多数据。权限：需单独开权限或有15000积分，具体权限信息请参考权限列表提示：当前接口按单只股票获取其历史数据，单次请求最大返回10000行数据，可循环提取
 */
export const UsFinaIndicatorApi = "us_fina_indicator"

export interface UsFinaIndicatorItem {
  /** 股票代码 */
  ts_code: string;
  /** 报告期 */
  end_date: string;
  /** 报告类型,Q1一季报,Q2中报,Q3三季报,Q4年报 */
  ind_type: string;
  /** 股票名称 */
  security_name_abbr: string;
  /** 会计准则 */
  accounting_standards: string;
  /** 公告日期 */
  notice_date: string;
  /** 报告期开始时间 */
  start_date: string;
  /** 标准报告期 */
  std_report_date: string;
  /** 年结日 */
  financial_date: string;
  /** 币种 */
  currency: string;
  /** 报告期类型 */
  date_type: string;
  /** 报告类型 */
  report_type: string;
  /** 收入 */
  operate_income: number;
  /** 收入增长 */
  operate_income_yoy: number;
  /** 毛利 */
  gross_profit: number;
  /** 毛利增长 */
  gross_profit_yoy: number;
  /** 归母净利润 */
  parent_holder_netprofit: number;
  /** 归母净利润增长 */
  parent_holder_netprofit_yoy: number;
  /** 基本每股收益 */
  basic_eps: number;
  /** 稀释每股收益 */
  diluted_eps: number;
  /** 销售毛利率 */
  gross_profit_ratio: number;
  /** 销售净利率 */
  net_profit_ratio: number;
  /** 应收账款周转率(次) */
  accounts_rece_tr: number;
  /** 存货周转率(次) */
  inventory_tr: number;
  /** 总资产周转率(次) */
  total_assets_tr: number;
  /** 应收账款周转天数 */
  accounts_rece_tdays: number;
  /** 存货周转天数 */
  inventory_tdays: number;
  /** 总资产周转天数 */
  total_assets_tdays: number;
  /** 净资产收益率 */
  roe_avg: number;
  /** 总资产净利率 */
  roa: number;
  /** 流动比率(倍) */
  current_ratio: number;
  /** 速动比率(倍) */
  speed_ratio: number;
  /** 经营业务现金净额/流动负债 */
  ocf_liqdebt: number;
  /** 资产负债率 */
  debt_asset_ratio: number;
  /** 产权比率 */
  equity_ratio: number;
  /** 基本每股收益同比增长 */
  basic_eps_yoy: number;
  /** 毛利率同比增长(%) */
  gross_profit_ratio_yoy: number;
  /** 净利率同比增长(%) */
  net_profit_ratio_yoy: number;
  /** 平均净资产收益率同比增长(%) */
  roe_avg_yoy: number;
  /** 净资产收益率同比增长(%) */
  roa_yoy: number;
  /** 资产负债率同比增长(%) */
  debt_asset_ratio_yoy: number;
  /** 流动比率同比增长(%) */
  current_ratio_yoy: number;
  /** 速动比率同比增长(%) */
  speed_ratio_yoy: number;
  /** 币种 */
  currency_abbr: string;
  /** 收入总额 */
  total_income: number;
  /** 收入总额同比增长 */
  total_income_yoy: number;
  /** 保费收入 */
  premium_income: number;
  /** 保费收入同比 */
  premium_income_yoy: number;
  /** 基本每股收益 */
  basic_eps_cs: number;
  /** 基本每股收益同比增长 */
  basic_eps_cs_yoy: number;
  /** 稀释每股收益 */
  diluted_eps_cs: number;
  /** 保费收入/赔付支出 */
  payout_ratio: number;
  /** 总资产周转率 */
  capitial_ratio: number;
  /** 净资产收益率 */
  roe: number;
  /** 净资产收益率同比增长 */
  roe_yoy: number;
  /** 资产负债率 */
  debt_ratio: number;
  /** 资产负债率同比增长 */
  debt_ratio_yoy: number;
  /** 净利息收入 */
  net_interest_income: number;
  /** 净利息收入增长 */
  net_interest_income_yoy: number;
  /** 稀释每股收益增长 */
  diluted_eps_cs_yoy: number;
  /** 贷款损失准备 */
  loan_loss_provision: number;
  /** 贷款损失准备增长 */
  loan_loss_provision_yoy: number;
  /** 贷款/存款 */
  loan_deposit: number;
  /** 贷款/股东权益(倍) */
  loan_equity: number;
  /** 贷款/总资产 */
  loan_assets: number;
  /** 存款/股东权益(倍) */
  deposit_equity: number;
  /** 存款/总资产 */
  deposit_assets: number;
  /** 贷款回报率 */
  rol: number;
  /** 存款回报率 */
  rod: number;
}

export interface UsFinaIndicatorParams {
  /** 股票代码 */
  ts_code?: string;
  /** 报告期（格式：YYYYMMDD，每个季度最后一天的日期，如20241231) */
  period?: string;
  /** 报告期类型(Q1一季报Q2半年报Q3三季报Q4年报) */
  report_type?: string;
  /** 报告期开始时间（格式：YYYYMMDD） */
  start_date?: string;
  /** 报告结束始时间（格式：YYYYMMDD） */
  end_date?: string;
}
