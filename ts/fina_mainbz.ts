/**
 * 主营业务构成
 * 获得上市公司主营业务构成，分地区和产品两种方式权限：用户需要至少2000积分才可以调取，具体请参阅积分获取办法  ，单次最大提取100行，总量不限制，可循环获取。提示：当前接口只能按单只股票获取其历史数据，如果需要获取某一季度全部上市公司数据，请使用fina_mainbz_vip接口（参数一致），需积攒5000积分。
 */
export const FinaMainbzApi = "fina_mainbz"

export interface FinaMainbzItem {
  /** TS代码 */
  ts_code: string;
  /** 报告期 */
  end_date: string;
  /** 主营业务来源 */
  bz_item: string;
  /** 主营业务收入(元) */
  bz_sales: number;
  /** 主营业务利润(元) */
  bz_profit: number;
  /** 主营业务成本(元) */
  bz_cost: number;
  /** 货币代码 */
  curr_type: string;
  /** 是否更新 */
  update_flag: string;
}

export interface FinaMainbzParams {
  /** 股票代码 */
  ts_code?: string;
  /** 报告期(每个季度最后一天的日期,比如20171231表示年报) */
  period?: string;
  /** 类型：P按产品 D按地区 I按行业（请输入大写字母P或者D） */
  type?: string;
  /** 报告期开始日期 */
  start_date?: string;
  /** 报告期结束日期 */
  end_date?: string;
}
