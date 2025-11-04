/**
 * 涨停最强板块统计
 * 获取每天涨停股票最多最强的概念板块，可以分析强势板块的轮动，判断资金动向限量：单次最大2000行数据，可根据股票代码或者日期循环提取全部积分：8000积分以上每分钟500次，每天总量不限制，具体请参阅积分获取办法
 */
export const LimitCptListApi = "limit_cpt_list"

export interface LimitCptListItem {
  /** 板块代码 */
  ts_code: string;
  /** 板块名称 */
  name: string;
  /** 交易日期 */
  trade_date: string;
  /** 上榜天数 */
  days: number;
  /** 连板高度 */
  up_stat: string;
  /** 连板家数 */
  cons_nums: number;
  /** 涨停家数 */
  up_nums: string;
  /** 涨跌幅% */
  pct_chg: number;
  /** 板块热点排名 */
  rank: string;
}

export interface LimitCptListParams {
  /** 交易日期（格式：YYYYMMDD，下同） */
  trade_date?: string;
  /** 板块代码 */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
