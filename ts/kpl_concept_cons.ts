/**
 * 题材成分（开盘啦）
 * 获取开盘啦概念题材的成分股限量：单次最大3000条，可根据代码和日期循环获取全部数据积分：5000积分可提取数据，具体请参阅积分获取办法
 */
export const KplConceptConsApi = "kpl_concept_cons"

export interface KplConceptConsItem {
  /** 题材ID */
  ts_code: string;
  /** 题材名称 */
  name: string;
  /** 股票名称 */
  con_name: string;
  /** 股票代码 */
  con_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 描述 */
  desc: string;
  /** 人气值 */
  hot_num: string;
}

export interface KplConceptConsParams {
  /** 交易日期（YYYYMMDD格式） */
  trade_date?: string;
  /** 题材代码（xxxxxx.KP格式） */
  ts_code?: string;
  /** 成分代码（xxxxxx.SH格式） */
  con_code?: string;
}
