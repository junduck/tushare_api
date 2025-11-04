/**
 * 东方财富概念成分
 * 获取东方财富板块每日成分数据，可以根据概念板块代码和交易日期，获取历史成分限量：单次最大获取5000条数据，可以通过日期和代码循环获取权限：用户积累6000积分可调取，具体请参阅积分获取办法注意：本接口只限个人学习和研究使用，如需商业用途，请自行联系东方财富解决数据采购问题。
 */
export const DcMemberApi = "dc_member"

export interface DcMemberItem {
  /** 交易日期 */
  trade_date: string;
  /** 概念代码 */
  ts_code: string;
  /** 成分代码 */
  con_code: string;
  /** 成分股名称 */
  name: string;
}

export interface DcMemberParams {
  /** 板块指数代码 */
  ts_code?: string;
  /** 成分股票代码 */
  con_code?: string;
  /** 交易日期（YYYYMMDD格式） */
  trade_date?: string;
}
