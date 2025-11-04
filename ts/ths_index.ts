/**
 * 同花顺行业概念板块
 * 获取同花顺板块指数。注：数据版权归属同花顺，如做商业用途，请主动联系同花顺，如需帮助请联系微信：waditu_a权限：本接口需有6000积分，单次最大返回5000行数据，一次可提取全部数据，请勿循环提取。
 */
export const ThsIndexApi = "ths_index"

export interface ThsIndexItem {
  /** 代码 */
  ts_code: string;
  /** 名称 */
  name: string;
  /** 成分个数 */
  count: number;
  /** 交易所 */
  exchange: string;
  /** 上市日期 */
  list_date: string;
  /** N概念指数S特色指数 */
  type: string;
}

export interface ThsIndexParams {
  /** 指数代码 */
  ts_code?: string;
  /** 市场类型A-a股 HK-港股 US-美股 */
  exchange?: string;
  /** 指数类型 N-概念指数 I-行业指数 R-地域指数 S-同花顺特色指数 ST-同花顺风格指数 TH-同花顺主题指数 BB-同花顺宽基指数 */
  type?: string;
}
