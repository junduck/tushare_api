/**
 * 每日指标
 * 获取全部股票每日重要的基本面指标，可用于选股分析、报表展示等。单次请求最大返回6000条数据，可按日线循环提取全部历史。积分：至少2000积分才可以调取，5000积分无总量限制，具体请参阅积分获取办法
 */
export const DailyBasicApi = "daily_basic"

export interface DailyBasicItem {
  /** TS股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 当日收盘价 */
  close: number;
  /** 换手率（%） */
  turnover_rate: number;
  /** 换手率（自由流通股） */
  turnover_rate_f: number;
  /** 量比 */
  volume_ratio: number;
  /** 市盈率（总市值/净利润， 亏损的PE为空） */
  pe: number;
  /** 市盈率（TTM，亏损的PE为空） */
  pe_ttm: number;
  /** 市净率（总市值/净资产） */
  pb: number;
  /** 市销率 */
  ps: number;
  /** 市销率（TTM） */
  ps_ttm: number;
  /** 股息率 （%） */
  dv_ratio: number;
  /** 股息率（TTM）（%） */
  dv_ttm: number;
  /** 总股本 （万股） */
  total_share: number;
  /** 流通股本 （万股） */
  float_share: number;
  /** 自由流通股本 （万） */
  free_share: number;
  /** 总市值 （万元） */
  total_mv: number;
  /** 流通市值（万元） */
  circ_mv: number;
}

export interface DailyBasicParams {
  /** 股票代码（二选一） */
  ts_code?: string;
  /** 交易日期 （二选一） */
  trade_date?: string;
  /** 开始日期(YYYYMMDD) */
  start_date?: string;
  /** 结束日期(YYYYMMDD) */
  end_date?: string;
}
