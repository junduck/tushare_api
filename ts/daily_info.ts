/**
 * 沪深市场每日交易统计
 * 获取交易所股票交易统计，包括各板块明细限量：单次最大4000，可循环获取，总量不限制权限：用户积600积分可调取， 频次有限制，积分越高每分钟调取频次越高，5000积分以上频次相对较高，积分获取方法请参阅积分获取办法
 */
export const DailyInfoApi = "daily_info"

export interface DailyInfoItem {
  /** 交易日期 */
  trade_date: string;
  /** 市场代码 */
  ts_code: string;
  /** 市场名称 */
  ts_name: string;
  /** 挂牌数 */
  com_count: number;
  /** 总股本（亿股） */
  total_share: number;
  /** 流通股本（亿股） */
  float_share: number;
  /** 总市值（亿元） */
  total_mv: number;
  /** 流通市值（亿元） */
  float_mv: number;
  /** 交易金额（亿元） */
  amount: number;
  /** 成交量（亿股） */
  vol: number;
  /** 成交笔数（万笔） */
  trans_count: number;
  /** 平均市盈率 */
  pe: number;
  /** 换手率（％），注：深交所暂无此列 */
  tr: number;
  /** 交易所（SH上交所 SZ深交所） */
  exchange: string;
}

export interface DailyInfoParams {
  /** 交易日期（YYYYMMDD格式，下同） */
  trade_date?: string;
  /** 板块代码（请参阅下方列表） */
  ts_code?: string;
  /** 股票市场（SH上交所 SZ深交所） */
  exchange?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 指定提取字段 */
  fields?: string;
}
