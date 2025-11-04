/**
 * 上海黄金基础信息
 * 获取上海黄金交易所现货合约基础信息限量：单次最大100条，当前现货合约数不足20个，可以一次提取全部，不需要循环提取积分：用户积5000积分可以调取，具体请参阅积分获取办法
 */
export const SgeBasicApi = "sge_basic"

export interface SgeBasicItem {
  /** 品种代码 */
  ts_code: string;
  /** 品种名称 */
  ts_name: string;
  /** 交易类型 */
  trade_type: string;
  /** 交易单位(克/手) */
  t_unit: number;
  /** 报价单位 */
  p_unit: number;
  /** 最小变动价位 */
  min_change: number;
  /** 每日价格最大波动限制 */
  price_limit: number;
  /** 最小单笔报价量(手) */
  min_vol: number;
  /** 最大单笔报价量(手) */
  max_vol: number;
  /** 交易期限 */
  trade_mode: string;
  /** 保证金比例 */
  margin_rate: number;
  /** 违约金比例(%) */
  liq_rate: number;
  /** 交易时间 */
  trade_time: string;
  /** 上市日期 */
  list_date: string;
}

export interface SgeBasicParams {
  /** 合约代码 （支持多个，逗号分隔，不输入为获取全部） */
  ts_code?: string;
}
