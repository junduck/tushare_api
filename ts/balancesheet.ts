/**
 * 资产负债表
 * 获取上市公司资产负债表积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法提示：当前接口只能按单只股票获取其历史数据，如果需要获取某一季度全部上市公司数据，请使用balancesheet_vip接口（参数一致），需积攒5000积分。
 */
export const BalancesheetApi = "balancesheet"

export interface BalancesheetItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 实际公告日期 */
  f_ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 报表类型 */
  report_type: string;
  /** 公司类型(1一般工商业2银行3保险4证券) */
  comp_type: string;
  /** 报告期类型 */
  end_type: string;
  /** 期末总股本 */
  total_share: number;
  /** 资本公积金 */
  cap_rese: number;
  /** 未分配利润 */
  undistr_porfit: number;
  /** 盈余公积金 */
  surplus_rese: number;
  /** 专项储备 */
  special_rese: number;
  /** 货币资金 */
  money_cap: number;
  /** 交易性金融资产 */
  trad_asset: number;
  /** 应收票据 */
  notes_receiv: number;
  /** 应收账款 */
  accounts_receiv: number;
  /** 其他应收款 */
  oth_receiv: number;
  /** 预付款项 */
  prepayment: number;
  /** 应收股利 */
  div_receiv: number;
  /** 应收利息 */
  int_receiv: number;
  /** 存货 */
  inventories: number;
  /** 待摊费用 */
  amor_exp: number;
  /** 一年内到期的非流动资产 */
  nca_within_1y: number;
  /** 结算备付金 */
  sett_rsrv: number;
  /** 拆出资金 */
  loanto_oth_bank_fi: number;
  /** 应收保费 */
  premium_receiv: number;
  /** 应收分保账款 */
  reinsur_receiv: number;
  /** 应收分保合同准备金 */
  reinsur_res_receiv: number;
  /** 买入返售金融资产 */
  pur_resale_fa: number;
  /** 其他流动资产 */
  oth_cur_assets: number;
  /** 流动资产合计 */
  total_cur_assets: number;
  /** 可供出售金融资产 */
  fa_avail_for_sale: number;
  /** 持有至到期投资 */
  htm_invest: number;
  /** 长期股权投资 */
  lt_eqt_invest: number;
  /** 投资性房地产 */
  invest_real_estate: number;
  /** 定期存款 */
  time_deposits: number;
  /** 其他资产 */
  oth_assets: number;
  /** 长期应收款 */
  lt_rec: number;
  /** 固定资产 */
  fix_assets: number;
  /** 在建工程 */
  cip: number;
  /** 工程物资 */
  const_materials: number;
  /** 固定资产清理 */
  fixed_assets_disp: number;
  /** 生产性生物资产 */
  produc_bio_assets: number;
  /** 油气资产 */
  oil_and_gas_assets: number;
  /** 无形资产 */
  intan_assets: number;
  /** 研发支出 */
  r_and_d: number;
  /** 商誉 */
  goodwill: number;
  /** 长期待摊费用 */
  lt_amor_exp: number;
  /** 递延所得税资产 */
  defer_tax_assets: number;
  /** 发放贷款及垫款 */
  decr_in_disbur: number;
  /** 其他非流动资产 */
  oth_nca: number;
  /** 非流动资产合计 */
  total_nca: number;
  /** 现金及存放中央银行款项 */
  cash_reser_cb: number;
  /** 存放同业和其它金融机构款项 */
  depos_in_oth_bfi: number;
  /** 贵金属 */
  prec_metals: number;
  /** 衍生金融资产 */
  deriv_assets: number;
  /** 应收分保未到期责任准备金 */
  rr_reins_une_prem: number;
  /** 应收分保未决赔款准备金 */
  rr_reins_outstd_cla: number;
  /** 应收分保寿险责任准备金 */
  rr_reins_lins_liab: number;
  /** 应收分保长期健康险责任准备金 */
  rr_reins_lthins_liab: number;
  /** 存出保证金 */
  refund_depos: number;
  /** 保户质押贷款 */
  ph_pledge_loans: number;
  /** 存出资本保证金 */
  refund_cap_depos: number;
  /** 独立账户资产 */
  indep_acct_assets: number;
  /** 其中：客户资金存款 */
  client_depos: number;
  /** 其中：客户备付金 */
  client_prov: number;
  /** 其中:交易席位费 */
  transac_seat_fee: number;
  /** 应收款项类投资 */
  invest_as_receiv: number;
  /** 资产总计 */
  total_assets: number;
  /** 长期借款 */
  lt_borr: number;
  /** 短期借款 */
  st_borr: number;
  /** 向中央银行借款 */
  cb_borr: number;
  /** 吸收存款及同业存放 */
  depos_ib_deposits: number;
  /** 拆入资金 */
  loan_oth_bank: number;
  /** 交易性金融负债 */
  trading_fl: number;
  /** 应付票据 */
  notes_payable: number;
  /** 应付账款 */
  acct_payable: number;
  /** 预收款项 */
  adv_receipts: number;
  /** 卖出回购金融资产款 */
  sold_for_repur_fa: number;
  /** 应付手续费及佣金 */
  comm_payable: number;
  /** 应付职工薪酬 */
  payroll_payable: number;
  /** 应交税费 */
  taxes_payable: number;
  /** 应付利息 */
  int_payable: number;
  /** 应付股利 */
  div_payable: number;
  /** 其他应付款 */
  oth_payable: number;
  /** 预提费用 */
  acc_exp: number;
  /** 递延收益 */
  deferred_inc: number;
  /** 应付短期债券 */
  st_bonds_payable: number;
  /** 应付分保账款 */
  payable_to_reinsurer: number;
  /** 保险合同准备金 */
  rsrv_insur_cont: number;
  /** 代理买卖证券款 */
  acting_trading_sec: number;
  /** 代理承销证券款 */
  acting_uw_sec: number;
  /** 一年内到期的非流动负债 */
  non_cur_liab_due_1y: number;
  /** 其他流动负债 */
  oth_cur_liab: number;
  /** 流动负债合计 */
  total_cur_liab: number;
  /** 应付债券 */
  bond_payable: number;
  /** 长期应付款 */
  lt_payable: number;
  /** 专项应付款 */
  specific_payables: number;
  /** 预计负债 */
  estimated_liab: number;
  /** 递延所得税负债 */
  defer_tax_liab: number;
  /** 递延收益-非流动负债 */
  defer_inc_non_cur_liab: number;
  /** 其他非流动负债 */
  oth_ncl: number;
  /** 非流动负债合计 */
  total_ncl: number;
  /** 同业和其它金融机构存放款项 */
  depos_oth_bfi: number;
  /** 衍生金融负债 */
  deriv_liab: number;
  /** 吸收存款 */
  depos: number;
  /** 代理业务负债 */
  agency_bus_liab: number;
  /** 其他负债 */
  oth_liab: number;
  /** 预收保费 */
  prem_receiv_adva: number;
  /** 存入保证金 */
  depos_received: number;
  /** 保户储金及投资款 */
  ph_invest: number;
  /** 未到期责任准备金 */
  reser_une_prem: number;
  /** 未决赔款准备金 */
  reser_outstd_claims: number;
  /** 寿险责任准备金 */
  reser_lins_liab: number;
  /** 长期健康险责任准备金 */
  reser_lthins_liab: number;
  /** 独立账户负债 */
  indept_acc_liab: number;
  /** 其中:质押借款 */
  pledge_borr: number;
  /** 应付赔付款 */
  indem_payable: number;
  /** 应付保单红利 */
  policy_div_payable: number;
  /** 负债合计 */
  total_liab: number;
  /** 减:库存股 */
  treasury_share: number;
  /** 一般风险准备 */
  ordin_risk_reser: number;
  /** 外币报表折算差额 */
  forex_differ: number;
  /** 未确认的投资损失 */
  invest_loss_unconf: number;
  /** 少数股东权益 */
  minority_int: number;
  /** 股东权益合计(不含少数股东权益) */
  total_hldr_eqy_exc_min_int: number;
  /** 股东权益合计(含少数股东权益) */
  total_hldr_eqy_inc_min_int: number;
  /** 负债及股东权益总计 */
  total_liab_hldr_eqy: number;
  /** 长期应付职工薪酬 */
  lt_payroll_payable: number;
  /** 其他综合收益 */
  oth_comp_income: number;
  /** 其他权益工具 */
  oth_eqt_tools: number;
  /** 其他权益工具(优先股) */
  oth_eqt_tools_p_shr: number;
  /** 融出资金 */
  lending_funds: number;
  /** 应收款项 */
  acc_receivable: number;
  /** 应付短期融资款 */
  st_fin_payable: number;
  /** 应付款项 */
  payables: number;
  /** 持有待售的资产 */
  hfs_assets: number;
  /** 持有待售的负债 */
  hfs_sales: number;
  /** 以摊余成本计量的金融资产 */
  cost_fin_assets: number;
  /** 以公允价值计量且其变动计入其他综合收益的金融资产 */
  fair_value_fin_assets: number;
  /** 在建工程(合计)(元) */
  cip_total: number;
  /** 其他应付款(合计)(元) */
  oth_pay_total: number;
  /** 长期应付款(合计)(元) */
  long_pay_total: number;
  /** 债权投资(元) */
  debt_invest: number;
  /** 其他债权投资(元) */
  oth_debt_invest: number;
  /** 其他权益工具投资(元) */
  oth_eq_invest?: number;
  /** 其他非流动金融资产(元) */
  oth_illiq_fin_assets?: number;
  /** 其他权益工具:永续债(元) */
  oth_eq_ppbond?: number;
  /** 应收款项融资 */
  receiv_financing?: number;
  /** 使用权资产 */
  use_right_assets?: number;
  /** 租赁负债 */
  lease_liab?: number;
  /** 合同资产 */
  contract_assets: number;
  /** 合同负债 */
  contract_liab: number;
  /** 应收票据及应收账款 */
  accounts_receiv_bill: number;
  /** 应付票据及应付账款 */
  accounts_pay: number;
  /** 其他应收款(合计)（元） */
  oth_rcv_total: number;
  /** 固定资产(合计)(元) */
  fix_assets_total: number;
  /** 更新标识 */
  update_flag: string;
}

export interface BalancesheetParams {
  /** 股票代码 */
  ts_code?: string;
  /** 公告日期(YYYYMMDD格式，下同) */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
  /** 报告期(每个季度最后一天的日期，比如20171231表示年报，20170630半年报，20170930三季报) */
  period?: string;
  /** 报告类型：见下方详细说明 */
  report_type?: string;
  /** 公司类型：1一般工商业 2银行 3保险 4证券 */
  comp_type?: string;
}
