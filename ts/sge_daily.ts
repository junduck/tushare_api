/**
 * 上海黄金现货日行情
 * 获取上海黄金交易所现货合约日线行情限量：单次最大2000，可循环或者分页提取积分：用户积2000积分可调取，具体请参阅积分获取办法
 */
export const SgeDailyApi = "sge_daily"

export interface SgeDailyItem {
  /** 现货合约代码 */
  ts_code: string;
  /** 交易日 */
  trade_date: string;
  /** 收盘点(元/克) */
  close: number;
  /** 开盘点(元/克) */
  open: number;
  /** 最高点(元/克) */
  high: number;
  /** 最低点(元/克) */
  low: number;
  /** 加权平均价(元/克) */
  price_avg: number;
  /** 涨跌点位(元/克) */
  change: number;
  /** 涨跌幅 */
  pct_change: number;
  /** 成交量(千克) */
  vol: number;
  /** 成交金额(元) */
  amount: number;
  /** 市场持仓 */
  oi: number;
  /** 交收量 */
  settle_vol: number;
  /** 持仓方向 */
  settle_dire: string;
}

export interface SgeDailyParams {
  /** 合约代码，可通过基础信息获得 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
