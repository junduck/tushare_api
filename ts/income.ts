/**
 * 利润表
 * 获取上市公司财务利润表数据积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法提示：当前接口只能按单只股票获取其历史数据，如果需要获取某一季度全部上市公司数据，请使用income_vip接口（参数一致），需积攒5000积分。
 */
export const IncomeApi = "income"

export interface IncomeItem {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 实际公告日期 */
  f_ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 报告类型 见底部表 */
  report_type: string;
  /** 公司类型(1一般工商业2银行3保险4证券) */
  comp_type: string;
  /** 报告期类型 */
  end_type: string;
  /** 基本每股收益 */
  basic_eps: number;
  /** 稀释每股收益 */
  diluted_eps: number;
  /** 营业总收入 */
  total_revenue: number;
  /** 营业收入 */
  revenue: number;
  /** 利息收入 */
  int_income: number;
  /** 已赚保费 */
  prem_earned: number;
  /** 手续费及佣金收入 */
  comm_income: number;
  /** 手续费及佣金净收入 */
  n_commis_income: number;
  /** 其他经营净收益 */
  n_oth_income: number;
  /** 加:其他业务净收益 */
  n_oth_b_income: number;
  /** 保险业务收入 */
  prem_income: number;
  /** 减:分出保费 */
  out_prem: number;
  /** 提取未到期责任准备金 */
  une_prem_reser: number;
  /** 其中:分保费收入 */
  reins_income: number;
  /** 代理买卖证券业务净收入 */
  n_sec_tb_income: number;
  /** 证券承销业务净收入 */
  n_sec_uw_income: number;
  /** 受托客户资产管理业务净收入 */
  n_asset_mg_income: number;
  /** 其他业务收入 */
  oth_b_income: number;
  /** 加:公允价值变动净收益 */
  fv_value_chg_gain: number;
  /** 加:投资净收益 */
  invest_income: number;
  /** 其中:对联营企业和合营企业的投资收益 */
  ass_invest_income: number;
  /** 加:汇兑净收益 */
  forex_gain: number;
  /** 营业总成本 */
  total_cogs: number;
  /** 减:营业成本 */
  oper_cost: number;
  /** 减:利息支出 */
  int_exp: number;
  /** 减:手续费及佣金支出 */
  comm_exp: number;
  /** 减:营业税金及附加 */
  biz_tax_surchg: number;
  /** 减:销售费用 */
  sell_exp: number;
  /** 减:管理费用 */
  admin_exp: number;
  /** 减:财务费用 */
  fin_exp: number;
  /** 减:资产减值损失 */
  assets_impair_loss: number;
  /** 退保金 */
  prem_refund: number;
  /** 赔付总支出 */
  compens_payout: number;
  /** 提取保险责任准备金 */
  reser_insur_liab: number;
  /** 保户红利支出 */
  div_payt: number;
  /** 分保费用 */
  reins_exp: number;
  /** 营业支出 */
  oper_exp: number;
  /** 减:摊回赔付支出 */
  compens_payout_refu: number;
  /** 减:摊回保险责任准备金 */
  insur_reser_refu: number;
  /** 减:摊回分保费用 */
  reins_cost_refund: number;
  /** 其他业务成本 */
  other_bus_cost: number;
  /** 营业利润 */
  operate_profit: number;
  /** 加:营业外收入 */
  non_oper_income: number;
  /** 减:营业外支出 */
  non_oper_exp: number;
  /** 其中:减:非流动资产处置净损失 */
  nca_disploss: number;
  /** 利润总额 */
  total_profit: number;
  /** 所得税费用 */
  income_tax: number;
  /** 净利润(含少数股东损益) */
  n_income: number;
  /** 净利润(不含少数股东损益) */
  n_income_attr_p: number;
  /** 少数股东损益 */
  minority_gain: number;
  /** 其他综合收益 */
  oth_compr_income: number;
  /** 综合收益总额 */
  t_compr_income: number;
  /** 归属于母公司(或股东)的综合收益总额 */
  compr_inc_attr_p: number;
  /** 归属于少数股东的综合收益总额 */
  compr_inc_attr_m_s: number;
  /** 息税前利润 */
  ebit: number;
  /** 息税折旧摊销前利润 */
  ebitda: number;
  /** 保险业务支出 */
  insurance_exp: number;
  /** 年初未分配利润 */
  undist_profit: number;
  /** 可分配利润 */
  distable_profit: number;
  /** 研发费用 */
  rd_exp: number;
  /** 财务费用:利息费用 */
  fin_exp_int_exp: number;
  /** 财务费用:利息收入 */
  fin_exp_int_inc: number;
  /** 盈余公积转入 */
  transfer_surplus_rese: number;
  /** 住房周转金转入 */
  transfer_housing_imprest: number;
  /** 其他转入 */
  transfer_oth: number;
  /** 调整以前年度损益 */
  adj_lossgain: number;
  /** 提取法定盈余公积 */
  withdra_legal_surplus: number;
  /** 提取法定公益金 */
  withdra_legal_pubfund: number;
  /** 提取企业发展基金 */
  withdra_biz_devfund: number;
  /** 提取储备基金 */
  withdra_rese_fund: number;
  /** 提取任意盈余公积金 */
  withdra_oth_ersu: number;
  /** 职工奖金福利 */
  workers_welfare: number;
  /** 可供股东分配的利润 */
  distr_profit_shrhder: number;
  /** 应付优先股股利 */
  prfshare_payable_dvd: number;
  /** 应付普通股股利 */
  comshare_payable_dvd: number;
  /** 转作股本的普通股股利 */
  capit_comstock_div: number;
  /** 扣除非经常性损益后的净利润（更正前） */
  net_after_nr_lp_correct?: number;
  /** 信用减值损失 */
  credit_impa_loss?: number;
  /** 净敞口套期收益 */
  net_expo_hedging_benefits?: number;
  /** 其他资产减值损失 */
  oth_impair_loss_assets?: number;
  /** 营业总成本（二） */
  total_opcost?: number;
  /** 以摊余成本计量的金融资产终止确认收益 */
  amodcost_fin_assets?: number;
  /** 其他收益 */
  oth_income?: number;
  /** 资产处置收益 */
  asset_disp_income?: number;
  /** 持续经营净利润 */
  continued_net_profit?: number;
  /** 终止经营净利润 */
  end_net_profit?: number;
  /** 更新标识 */
  update_flag: string;
}

export interface IncomeParams {
  /** 股票代码 */
  ts_code?: string;
  /** 公告日期（YYYYMMDD格式，下同） */
  ann_date?: string;
  /** 实际公告日期 */
  f_ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
  /** 报告期(每个季度最后一天的日期，比如20171231表示年报，20170630半年报，20170930三季报) */
  period?: string;
  /** 报告类型，参考文档最下方说明 */
  report_type?: string;
  /** 公司类型（1一般工商业2银行3保险4证券） */
  comp_type?: string;
}
