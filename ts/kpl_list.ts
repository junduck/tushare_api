/**
 * 榜单数据（开盘啦）
 * 获取开盘啦涨停、跌停、炸板等榜单数据限量：单次最大8000条数据，可根据日期循环获取历史数据积分：5000积分每分钟可以请求200次每天总量1万次，8000积分以上每分钟500次每天总量不限制，具体请参阅积分获取办法
 */
export const KplListApi = "kpl_list"

export interface KplListItem {
  /** 代码 */
  ts_code: string;
  /** 名称 */
  name: string;
  /** 交易时间 */
  trade_date: string;
  /** 涨停时间 */
  lu_time: string;
  /** 跌停时间 */
  ld_time: string;
  /** 开板时间 */
  open_time: string;
  /** 最后涨停时间 */
  last_time: string;
  /** 涨停原因 */
  lu_desc: string;
  /** 标签 */
  tag: string;
  /** 板块 */
  theme: string;
  /** 主力净额(元) */
  net_change: number;
  /** 竞价成交额(元) */
  bid_amount: number;
  /** 状态（N连板） */
  status: string;
  /** 竞价净额 */
  bid_change: number;
  /** 竞价换手% */
  bid_turnover: number;
  /** 涨停委买额 */
  lu_bid_vol: number;
  /** 涨跌幅% */
  pct_chg: number;
  /** 竞价涨幅% */
  bid_pct_chg: number;
  /** 实时涨幅% */
  rt_pct_chg: number;
  /** 封单 */
  limit_order: number;
  /** 成交额 */
  amount: number;
  /** 换手率% */
  turnover_rate: number;
  /** 实际流通 */
  free_float: number;
  /** 最大封单 */
  lu_limit_order: number;
}

export interface KplListParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 板单类型（涨停/炸板/跌停/自然涨停/竞价，默认为涨停) */
  tag?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
