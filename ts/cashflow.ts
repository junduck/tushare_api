/**
 * 现金流量表
 * 获取上市公司现金流量表积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法提示：当前接口只能按单只股票获取其历史数据，如果需要获取某一季度全部上市公司数据，请使用cashflow_vip接口（参数一致），需积攒5000积分。
 */
export const CashflowApi = "cashflow"

export interface CashflowItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 实际公告日期 */
  f_ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 公司类型(1一般工商业2银行3保险4证券) */
  comp_type: string;
  /** 报表类型 */
  report_type: string;
  /** 报告期类型 */
  end_type: string;
  /** 净利润 */
  net_profit: number;
  /** 财务费用 */
  finan_exp: number;
  /** 销售商品、提供劳务收到的现金 */
  c_fr_sale_sg: number;
  /** 收到的税费返还 */
  recp_tax_rends: number;
  /** 客户存款和同业存放款项净增加额 */
  n_depos_incr_fi: number;
  /** 向中央银行借款净增加额 */
  n_incr_loans_cb: number;
  /** 向其他金融机构拆入资金净增加额 */
  n_inc_borr_oth_fi: number;
  /** 收到原保险合同保费取得的现金 */
  prem_fr_orig_contr: number;
  /** 保户储金净增加额 */
  n_incr_insured_dep: number;
  /** 收到再保业务现金净额 */
  n_reinsur_prem: number;
  /** 处置交易性金融资产净增加额 */
  n_incr_disp_tfa: number;
  /** 收取利息和手续费净增加额 */
  ifc_cash_incr: number;
  /** 处置可供出售金融资产净增加额 */
  n_incr_disp_faas: number;
  /** 拆入资金净增加额 */
  n_incr_loans_oth_bank: number;
  /** 回购业务资金净增加额 */
  n_cap_incr_repur: number;
  /** 收到其他与经营活动有关的现金 */
  c_fr_oth_operate_a: number;
  /** 经营活动现金流入小计 */
  c_inf_fr_operate_a: number;
  /** 购买商品、接受劳务支付的现金 */
  c_paid_goods_s: number;
  /** 支付给职工以及为职工支付的现金 */
  c_paid_to_for_empl: number;
  /** 支付的各项税费 */
  c_paid_for_taxes: number;
  /** 客户贷款及垫款净增加额 */
  n_incr_clt_loan_adv: number;
  /** 存放央行和同业款项净增加额 */
  n_incr_dep_cbob: number;
  /** 支付原保险合同赔付款项的现金 */
  c_pay_claims_orig_inco: number;
  /** 支付手续费的现金 */
  pay_handling_chrg: number;
  /** 支付保单红利的现金 */
  pay_comm_insur_plcy: number;
  /** 支付其他与经营活动有关的现金 */
  oth_cash_pay_oper_act: number;
  /** 经营活动现金流出小计 */
  st_cash_out_act: number;
  /** 经营活动产生的现金流量净额 */
  n_cashflow_act: number;
  /** 收到其他与投资活动有关的现金 */
  oth_recp_ral_inv_act: number;
  /** 收回投资收到的现金 */
  c_disp_withdrwl_invest: number;
  /** 取得投资收益收到的现金 */
  c_recp_return_invest: number;
  /** 处置固定资产、无形资产和其他长期资产收回的现金净额 */
  n_recp_disp_fiolta: number;
  /** 处置子公司及其他营业单位收到的现金净额 */
  n_recp_disp_sobu: number;
  /** 投资活动现金流入小计 */
  stot_inflows_inv_act: number;
  /** 购建固定资产、无形资产和其他长期资产支付的现金 */
  c_pay_acq_const_fiolta: number;
  /** 投资支付的现金 */
  c_paid_invest: number;
  /** 取得子公司及其他营业单位支付的现金净额 */
  n_disp_subs_oth_biz: number;
  /** 支付其他与投资活动有关的现金 */
  oth_pay_ral_inv_act: number;
  /** 质押贷款净增加额 */
  n_incr_pledge_loan: number;
  /** 投资活动现金流出小计 */
  stot_out_inv_act: number;
  /** 投资活动产生的现金流量净额 */
  n_cashflow_inv_act: number;
  /** 取得借款收到的现金 */
  c_recp_borrow: number;
  /** 发行债券收到的现金 */
  proc_issue_bonds: number;
  /** 收到其他与筹资活动有关的现金 */
  oth_cash_recp_ral_fnc_act: number;
  /** 筹资活动现金流入小计 */
  stot_cash_in_fnc_act: number;
  /** 企业自由现金流量 */
  free_cashflow: number;
  /** 偿还债务支付的现金 */
  c_prepay_amt_borr: number;
  /** 分配股利、利润或偿付利息支付的现金 */
  c_pay_dist_dpcp_int_exp: number;
  /** 其中:子公司支付给少数股东的股利、利润 */
  incl_dvd_profit_paid_sc_ms: number;
  /** 支付其他与筹资活动有关的现金 */
  oth_cashpay_ral_fnc_act: number;
  /** 筹资活动现金流出小计 */
  stot_cashout_fnc_act: number;
  /** 筹资活动产生的现金流量净额 */
  n_cash_flows_fnc_act: number;
  /** 汇率变动对现金的影响 */
  eff_fx_flu_cash: number;
  /** 现金及现金等价物净增加额 */
  n_incr_cash_cash_equ: number;
  /** 期初现金及现金等价物余额 */
  c_cash_equ_beg_period: number;
  /** 期末现金及现金等价物余额 */
  c_cash_equ_end_period: number;
  /** 吸收投资收到的现金 */
  c_recp_cap_contrib: number;
  /** 其中:子公司吸收少数股东投资收到的现金 */
  incl_cash_rec_saims: number;
  /** 未确认投资损失 */
  uncon_invest_loss: number;
  /** 加:资产减值准备 */
  prov_depr_assets: number;
  /** 固定资产折旧、油气资产折耗、生产性生物资产折旧 */
  depr_fa_coga_dpba: number;
  /** 无形资产摊销 */
  amort_intang_assets: number;
  /** 长期待摊费用摊销 */
  lt_amort_deferred_exp: number;
  /** 待摊费用减少 */
  decr_deferred_exp: number;
  /** 预提费用增加 */
  incr_acc_exp: number;
  /** 处置固定、无形资产和其他长期资产的损失 */
  loss_disp_fiolta: number;
  /** 固定资产报废损失 */
  loss_scr_fa: number;
  /** 公允价值变动损失 */
  loss_fv_chg: number;
  /** 投资损失 */
  invest_loss: number;
  /** 递延所得税资产减少 */
  decr_def_inc_tax_assets: number;
  /** 递延所得税负债增加 */
  incr_def_inc_tax_liab: number;
  /** 存货的减少 */
  decr_inventories: number;
  /** 经营性应收项目的减少 */
  decr_oper_payable: number;
  /** 经营性应付项目的增加 */
  incr_oper_payable: number;
  /** 其他 */
  others: number;
  /** 经营活动产生的现金流量净额(间接法) */
  im_net_cashflow_oper_act: number;
  /** 债务转为资本 */
  conv_debt_into_cap: number;
  /** 一年内到期的可转换公司债券 */
  conv_copbonds_due_within_1y: number;
  /** 融资租入固定资产 */
  fa_fnc_leases: number;
  /** 现金及现金等价物净增加额(间接法) */
  im_n_incr_cash_equ: number;
  /** 拆出资金净增加额 */
  net_dism_capital_add: number;
  /** 代理买卖证券收到的现金净额(元) */
  net_cash_rece_sec: number;
  /** 信用减值损失 */
  credit_impa_loss: number;
  /** 使用权资产折旧 */
  use_right_asset_dep: number;
  /** 其他资产减值损失 */
  oth_loss_asset: number;
  /** 现金的期末余额 */
  end_bal_cash: number;
  /** 减:现金的期初余额 */
  beg_bal_cash: number;
  /** 加:现金等价物的期末余额 */
  end_bal_cash_equ: number;
  /** 减:现金等价物的期初余额 */
  beg_bal_cash_equ: number;
  /** 更新标志(1最新） */
  update_flag: string;
}

export interface CashflowParams {
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
  /** 报告类型：见下方详细说明 */
  report_type?: string;
  /** 公司类型：1一般工商业 2银行 3保险 4证券 */
  comp_type?: string;
  /** 是否计算报表 */
  is_calc?: number;
}
