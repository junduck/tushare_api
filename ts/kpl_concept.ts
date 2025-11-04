/**
 * 题材数据（开盘啦）
 * 获取开盘啦概念题材列表，每天盘后更新限量：单次最大5000条，可根据日期循环获取历史数据积分：5000积分可提取数据，具体请参阅积分获取办法
 */
export const KplConceptApi = "kpl_concept"

export interface KplConceptItem {
  /** 交易日期 */
  trade_date: string;
  /** 题材代码 */
  ts_code: string;
  /** 题材名称 */
  name: string;
  /** 涨停数量 */
  z_t_num: string;
  /** 排名上升位数 */
  up_num: string;
}

export interface KplConceptParams {
  /** 交易日期（YYYYMMDD格式） */
  trade_date?: string;
  /** 题材代码（xxxxxx.KP格式） */
  ts_code?: string;
  /** 题材名称 */
  name?: string;
}
