/**
 * 上市公司公告
 * 获取全量公告数据，提供pdf下载URL限量：单次最大2000条数，可以跟进日期循环获取全量权限：本接口为单独权限，请参考权限说明
 */
export const AnnsDApi = "anns_d"

export interface AnnsDItem {
  /** 公告日期 */
  ann_date: string;
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 标题 */
  title: string;
  /** URL，原文下载链接 */
  url: string;
  /** 发布时间 */
  rec_time?: string;
}

export interface AnnsDParams {
  /** 股票代码 */
  ts_code?: string;
  /** 公告日期（yyyymmdd格式，下同） */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
}
