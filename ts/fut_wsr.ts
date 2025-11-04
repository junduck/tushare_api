/**
 * 仓单日报
 * 获取仓单日报数据，了解各仓库/厂库的仓单变化限量：单次最大1000，总量不限制积分：用户需要至少2000积分才可以调取，具体请参阅积分获取办法
 */
export const FutWsrApi = "fut_wsr"

export interface FutWsrItem {
  /** 交易日期 */
  trade_date: string;
  /** 产品代码 */
  symbol: string;
  /** 产品名称 */
  fut_name: string;
  /** 仓库名称 */
  warehouse: string;
  /** 仓库编号 */
  wh_id?: string;
  /** 昨日仓单量 */
  pre_vol: number;
  /** 今日仓单量 */
  vol: number;
  /** 增减量 */
  vol_chg: number;
  /** 地区 */
  area?: string;
  /** 年度 */
  year?: string;
  /** 等级 */
  grade?: string;
  /** 品牌 */
  brand?: string;
  /** 产地 */
  place?: string;
  /** 升贴水 */
  pd?: number;
  /** 是否折算仓单 */
  is_ct?: string;
  /** 单位 */
  unit: string;
  /** 交易所 */
  exchange?: string;
}

export interface FutWsrParams {
  /** 交易日期 */
  trade_date?: string;
  /** 产品代码 */
  symbol?: string;
  /** 开始日期(YYYYMMDD格式，下同) */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 交易所代码 */
  exchange?: string;
}
