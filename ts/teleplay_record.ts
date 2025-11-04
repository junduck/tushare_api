/**
 * 全国电视剧备案公示数据
 * 获取2009年以来全国拍摄制作电视剧备案公示数据限量：单次最大1000，总量不限制数据权限：用户需要至少积分600才可以调取，积分越多调取频次越高，具体请参阅积分获取办法
 */
export const TeleplayRecordApi = "teleplay_record"

export interface TeleplayRecordItem {
  /** 电视剧名称 */
  name: string;
  /** 题材 */
  classify: string;
  /** 体裁 */
  types: string;
  /** 报备机构 */
  org: string;
  /** 报备时间 */
  report_date: string;
  /** 许可证号 */
  license_key: string;
  /** 集数 */
  episodes: string;
  /** 拍摄时间 */
  shooting_date: string;
  /** 制作周期 */
  prod_cycle: string;
  /** 内容提要 */
  content: string;
  /** 省级管理部门备案意见 */
  pro_opi: string;
  /** 相关部门意见 */
  dept_opi: string;
  /** 备注 */
  remarks: string;
}

export interface TeleplayRecordParams {
  /** 备案月份（YYYYMM） */
  report_date?: string;
  /** 备案开始月份（YYYYMM） */
  start_date?: string;
  /** 备案结束月份（YYYYMM） */
  end_date?: string;
  /** 备案机构 */
  org?: string;
  /** 电视剧名称 */
  name?: string;
}
