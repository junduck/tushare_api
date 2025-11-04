/**
 * 业绩快报
 * 获取上市公司业绩快报权限：用户需要至少2000积分才可以调取，具体请参阅积分获取办法提示：当前接口只能按单只股票获取其历史数据，如果需要获取某一季度全部上市公司数据，请使用express_vip接口（参数一致），需积攒5000积分。
 */
export const ExpressApi = "express"

export interface ExpressItem {
  /** TS股票代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 报告期 */
  end_date: string;
  /** 营业收入(元) */
  revenue: number;
  /** 营业利润(元) */
  operate_profit: number;
  /** 利润总额(元) */
  total_profit: number;
  /** 净利润(元) */
  n_income: number;
  /** 总资产(元) */
  total_assets: number;
  /** 股东权益合计(不含少数股东权益)(元) */
  total_hldr_eqy_exc_min_int: number;
  /** 每股收益(摊薄)(元) */
  diluted_eps: number;
  /** 净资产收益率(摊薄)(%) */
  diluted_roe: number;
  /** 去年同期修正后净利润 */
  yoy_net_profit: number;
  /** 每股净资产 */
  bps: number;
  /** 同比增长率:营业收入 */
  yoy_sales: number;
  /** 同比增长率:营业利润 */
  yoy_op: number;
  /** 同比增长率:利润总额 */
  yoy_tp: number;
  /** 同比增长率:归属母公司股东的净利润 */
  yoy_dedu_np: number;
  /** 同比增长率:基本每股收益 */
  yoy_eps: number;
  /** 同比增减:加权平均净资产收益率 */
  yoy_roe: number;
  /** 比年初增长率:总资产 */
  growth_assets: number;
  /** 比年初增长率:归属母公司的股东权益 */
  yoy_equity: number;
  /** 比年初增长率:归属于母公司股东的每股净资产 */
  growth_bps: number;
  /** 去年同期营业收入 */
  or_last_year: number;
  /** 去年同期营业利润 */
  op_last_year: number;
  /** 去年同期利润总额 */
  tp_last_year: number;
  /** 去年同期净利润 */
  np_last_year: number;
  /** 去年同期每股收益 */
  eps_last_year: number;
  /** 期初净资产 */
  open_net_assets: number;
  /** 期初每股净资产 */
  open_bps: number;
  /** 业绩简要说明 */
  perf_summary: string;
  /** 是否审计： 1是 0否 */
  is_audit: number;
  /** 备注 */
  remark: string;
}

export interface ExpressParams {
  /** 股票代码 */
  ts_code?: string;
  /** 公告日期 */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
  /** 报告期(每个季度最后一天的日期,比如20171231表示年报，20170630半年报，20170930三季报) */
  period?: string;
}
