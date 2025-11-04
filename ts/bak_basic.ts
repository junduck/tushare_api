/**
 * 股票历史列表
 * 获取备用基础列表，数据从2016年开始限量：单次最大7000条，可以根据日期参数循环获取历史，正式权限需要5000积分。
 */
export const BakBasicApi = "bak_basic"

export interface BakBasicItem {
  /** 交易日期 */
  trade_date: string;
  /** TS股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 行业 */
  industry: string;
  /** 地域 */
  area: string;
  /** 市盈率（动） */
  pe: number;
  /** 流通股本（亿） */
  float_share: number;
  /** 总股本（亿） */
  total_share: number;
  /** 总资产（亿） */
  total_assets: number;
  /** 流动资产（亿） */
  liquid_assets: number;
  /** 固定资产（亿） */
  fixed_assets: number;
  /** 公积金 */
  reserved: number;
  /** 每股公积金 */
  reserved_pershare: number;
  /** 每股收益 */
  eps: number;
  /** 每股净资产 */
  bvps: number;
  /** 市净率 */
  pb: number;
  /** 上市日期 */
  list_date: string;
  /** 未分配利润 */
  undp: number;
  /** 每股未分配利润 */
  per_undp: number;
  /** 收入同比（%） */
  rev_yoy: number;
  /** 利润同比（%） */
  profit_yoy: number;
  /** 毛利率（%） */
  gpr: number;
  /** 净利润率（%） */
  npr: number;
  /** 股东人数 */
  holder_num: number;
}

export interface BakBasicParams {
  /** 交易日期 */
  trade_date?: string;
  /** 股票代码 */
  ts_code?: string;
}
