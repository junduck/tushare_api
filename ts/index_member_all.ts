/**
 * 申万行业成分（分级）
 * 按三级分类提取申万行业成分，可提供某个分类的所有成分，也可按股票代码提取所属分类，参数灵活限量：单次最大2000行，总量不限制权限：用户需2000积分可调取，积分获取方法请参阅积分获取办法
 */
export const IndexMemberAllApi = "index_member_all"

export interface IndexMemberAllItem {
  /** 一级行业代码 */
  l1_code: string;
  /** 一级行业名称 */
  l1_name: string;
  /** 二级行业代码 */
  l2_code: string;
  /** 二级行业名称 */
  l2_name: string;
  /** 三级行业代码 */
  l3_code: string;
  /** 三级行业名称 */
  l3_name: string;
  /** 成分股票代码 */
  ts_code: string;
  /** 成分股票名称 */
  name: string;
  /** 纳入日期 */
  in_date: string;
  /** 剔除日期 */
  out_date: string;
  /** 是否最新Y是N否 */
  is_new: string;
}

export interface IndexMemberAllParams {
  /** 一级行业代码 */
  l1_code?: string;
  /** 二级行业代码 */
  l2_code?: string;
  /** 三级行业代码 */
  l3_code?: string;
  /** 股票代码 */
  ts_code?: string;
  /** 是否最新（默认为“Y是”） */
  is_new?: string;
}
