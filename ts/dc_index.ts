/**
 * 东方财富概念板块
 * 获取东方财富每个交易日的概念板块数据，支持按日期查询限量：单次最大可获取5000条数据，历史数据可根据日期循环获取权限：用户积累6000积分可调取，具体请参阅积分获取办法
 */
export const DcIndexApi = "dc_index"

export interface DcIndexItem {
  /** 概念代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 概念名称 */
  name: string;
  /** 领涨股票名称 */
  leading: string;
  /** 领涨股票代码 */
  leading_code: string;
  /** 涨跌幅 */
  pct_change: number;
  /** 领涨股票涨跌幅 */
  leading_pct: number;
  /** 总市值（万元） */
  total_mv: number;
  /** 换手率 */
  turnover_rate: number;
  /** 上涨家数 */
  up_num: number;
  /** 下降家数 */
  down_num: number;
}

export interface DcIndexParams {
  /** 指数代码（支持多个代码同时输入，用逗号分隔） */
  ts_code?: string;
  /** 板块名称（例如：人形机器人） */
  name?: string;
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
