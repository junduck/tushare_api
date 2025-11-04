/**
 * 个股资金流向
 * 获取沪深A股票资金流向数据，分析大单小单成交情况，用于判别资金动向，数据开始于2010年。限量：单次最大提取6000行记录，总量不限制积分：用户需要至少2000积分才可以调取，基础积分有流量控制，积分越多权限越大，请自行提高积分，具体请参阅积分获取办法
 */
export const MoneyflowApi = "moneyflow"

export interface MoneyflowItem {
  /** TS代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 小单买入量（手） */
  buy_sm_vol: number;
  /** 小单买入金额（万元） */
  buy_sm_amount: number;
  /** 小单卖出量（手） */
  sell_sm_vol: number;
  /** 小单卖出金额（万元） */
  sell_sm_amount: number;
  /** 中单买入量（手） */
  buy_md_vol: number;
  /** 中单买入金额（万元） */
  buy_md_amount: number;
  /** 中单卖出量（手） */
  sell_md_vol: number;
  /** 中单卖出金额（万元） */
  sell_md_amount: number;
  /** 大单买入量（手） */
  buy_lg_vol: number;
  /** 大单买入金额（万元） */
  buy_lg_amount: number;
  /** 大单卖出量（手） */
  sell_lg_vol: number;
  /** 大单卖出金额（万元） */
  sell_lg_amount: number;
  /** 特大单买入量（手） */
  buy_elg_vol: number;
  /** 特大单买入金额（万元） */
  buy_elg_amount: number;
  /** 特大单卖出量（手） */
  sell_elg_vol: number;
  /** 特大单卖出金额（万元） */
  sell_elg_amount: number;
  /** 净流入量（手） */
  net_mf_vol: number;
  /** 净流入额（万元） */
  net_mf_amount: number;
}

export interface MoneyflowParams {
  /** 股票代码 （股票和时间参数至少输入一个） */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
