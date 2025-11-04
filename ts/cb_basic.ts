/**
 * 可转债基础信息
 * 获取可转债基本信息限量：单次最大2000，总量不限制权限：用户需要至少2000积分才可以调取，但有流量控制，5000积分以上频次相对较高，积分越多权限越大，具体请参阅积分获取办法
 */
export const CbBasicApi = "cb_basic"

export interface CbBasicItem {
  /** 转债代码 */
  ts_code: string;
  /** 转债名称 */
  bond_full_name: string;
  /** 转债简称 */
  bond_short_name: string;
  /** 转股申报代码 */
  cb_code: string;
  /** 正股代码 */
  stk_code: string;
  /** 正股简称 */
  stk_short_name: string;
  /** 发行期限（年） */
  maturity: number;
  /** 面值 */
  par: number;
  /** 发行价格 */
  issue_price: number;
  /** 发行总额（元） */
  issue_size: number;
  /** 债券余额（元） */
  remain_size: number;
  /** 起息日期 */
  value_date: string;
  /** 到期日期 */
  maturity_date: string;
  /** 利率类型 */
  rate_type: string;
  /** 票面利率（%） */
  coupon_rate: number;
  /** 补偿利率（%） */
  add_rate: number;
  /** 年付息次数 */
  pay_per_year: number;
  /** 上市日期 */
  list_date: string;
  /** 摘牌日 */
  delist_date: string;
  /** 上市地点 */
  exchange: string;
  /** 转股起始日 */
  conv_start_date: string;
  /** 转股截止日 */
  conv_end_date: string;
  /** 停止转股日(提前到期) */
  conv_stop_date: string;
  /** 初始转股价 */
  first_conv_price: number;
  /** 最新转股价 */
  conv_price: number;
  /** 利率说明 */
  rate_clause: string;
  /** 赎回条款 */
  put_clause?: string;
  /** 到期赎回价格(含税) */
  maturity_put_price?: string;
  /** 回售条款 */
  call_clause?: string;
  /** 特别向下修正条款 */
  reset_clause?: string;
  /** 转股条款 */
  conv_clause?: string;
  /** 担保人 */
  guarantor?: string;
  /** 担保方式 */
  guarantee_type?: string;
  /** 发行信用等级 */
  issue_rating?: string;
  /** 最新信用等级 */
  newest_rating?: string;
  /** 最新评级机构 */
  rating_comp?: string;
}

export interface CbBasicParams {
  /** 转债代码 */
  ts_code?: string;
  /** 上市日期 */
  list_date?: string;
  /** 上市地点 */
  exchange?: string;
}
