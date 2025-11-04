/**
 * 期货合约涨跌停价格
 * 获取所有期货合约每天的涨跌停价格及最低保证金率，数据开始于2005年。限量：单次最大获取4000行数据，可以通过日期、合约代码等参数循环获取所有历史积分：用户积5000积分可调取，积分获取方法具体请参阅积分获取办法
 */
export const FtLimitApi = "ft_limit"

export interface FtLimitItem {
  /** 交易日期 */
  trade_date: string;
  /** TS股票代码 */
  ts_code: string;
  /** 合约名称 */
  name: string;
  /** 涨停价 */
  up_limit: number;
  /** 跌停价 */
  down_limit: number;
  /** 最低交易保证金率（%） */
  m_ratio: number;
  /** 合约代码 */
  cont: string;
  /** 交易所代码 */
  exchange: string;
}

export interface FtLimitParams {
  /** 合约代码 */
  ts_code?: string;
  /** 交易日期（格式：YYYYMMDD） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 合约代码（例如：cont='CU') */
  cont?: string;
  /** 交易所代码 （例如：exchange='DCE') */
  exchange?: string;
}
