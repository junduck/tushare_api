/**
 * 市场游资最全名录
 * 获取游资分类名录信息限量：单次最大1000条数据，目前总量未超过500积分：5000积分可以调取，积分获取办法请参阅积分获取办法
 */
export const HmListApi = "hm_list"

export interface HmListItem {
  /** 游资名称 */
  name: string;
  /** 说明 */
  desc: string;
  /** 关联机构 */
  orgs: string;
}

export interface HmListParams {
  /** 游资名称 */
  name?: string;
}
