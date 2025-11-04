/**
 * 国债收益率曲线
 * 获取中债收益率曲线，目前可获取中债国债收益率曲线即期和到期收益率曲线数据限量：单次最大2000，总量不限制，可循环提取权限：属于单独的权限接口，请在群里联系群主或管理员
 */
export const YcCbApi = "yc_cb"

export interface YcCbItem {
  /** 交易日期 */
  trade_date: string;
  /** 曲线编码 */
  ts_code: string;
  /** 曲线名称 */
  curve_name: string;
  /** 曲线类型：0-到期，1-即期 */
  curve_type: string;
  /** 期限(年) */
  curve_term: number;
  /** 收益率(%) */
  yield: number;
}

export interface YcCbParams {
  /** 收益率曲线编码：1001.CB-国债收益率曲线 */
  ts_code?: string;
  /** 曲线类型：0-到期，1-即期 */
  curve_type?: string;
  /** 交易日期 */
  trade_date?: string;
  /** 查询起始日期 */
  start_date?: string;
  /** 查询结束日期 */
  end_date?: string;
  /** 期限 */
  curve_term?: number;
}
