/**
 * ST股票列表
 * 获取ST股票列表，可根据交易日期获取历史上每天的ST列表权限：3000积分起提示：每天上午9:20更新，单次请求最大返回1000行数据，可循环提取,本接口数据从20160101开始,太早历史无法补齐
 */
export const StockStApi = "stock_st"

export interface StockStItem {
  /** 股票代码 */
  ts_code: string;
  /** 股票名称 */
  name: string;
  /** 交易日期 */
  trade_date: string;
  /** 类型 */
  type: string;
  /** 类型名称 */
  type_name: string;
}

export interface StockStParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期（格式：YYYYMMDD下同） */
  trade_date?: string;
  /** 开始时间 */
  start_date?: string;
  /** 结束时间 */
  end_date?: string;
}
