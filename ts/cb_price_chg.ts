/**
 * 可转债转股价变动
 * 获取可转债转股价变动限量：单次最大2000，总量不限制权限：本接口需单独开权限（跟积分没关系），具体请参阅积分获取办法
 */
export const CbPriceChgApi = "cb_price_chg"

export interface CbPriceChgItem {
  /** 转债代码 */
  ts_code: string;
  /** 转债简称 */
  bond_short_name: string;
  /** 公告日期 */
  publish_date: string;
  /** 变动日期 */
  change_date: string;
  /** 初始转股价格 */
  convert_price_initial: number;
  /** 修正前转股价格 */
  convertprice_bef: number;
  /** 修正后转股价格 */
  convertprice_aft: number;
}

export interface CbPriceChgParams {
  /** 转债代码，支持多值输入 */
  ts_code?: string;
}
