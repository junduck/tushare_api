/**
 * 全国电影剧本备案数据
 * 获取全国电影剧本备案的公示数据限量：单次最大500，总量不限制数据权限：用户需要至少120积分才可以调取，积分越多调取频次越高，具体请参阅积分获取办法
 */
export const FilmRecordApi = "film_record"

export interface FilmRecordItem {
  /** 备案号 */
  rec_no: string;
  /** 影片名称 */
  film_name: string;
  /** 备案单位 */
  rec_org: string;
  /** 编剧 */
  script_writer: string;
  /** 备案结果 */
  rec_result: string;
  /** 备案地（备案时间） */
  rec_area: string;
  /** 影片分类 */
  classified: string;
  /** 备案日期区间 */
  date_range: string;
  /** 备案结果发布时间 */
  ann_date: string;
}

export interface FilmRecordParams {
  /** 公布日期 （至少输入一个参数，格式：YYYYMMDD，日期不连续，定期公布） */
  ann_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
