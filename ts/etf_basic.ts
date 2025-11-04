/**
 * ETF基本信息
 * 获取国内ETF基础信息，包括了QDII。数据来源与沪深交易所公开披露信息。限量：单次请求最大放回5000条数据（当前ETF总数未超过2000）权限：用户积8000积分可调取，具体请参阅积分获取办法
 */
export const EtfBasicApi = "etf_basic"

export interface EtfBasicItem {
  /** 基金交易代码 */
  ts_code: string;
  /** ETF中文简称 */
  csname: string;
  /** ETF扩位简称(对应交易所简称) */
  extname: string;
  /** 基金中文全称 */
  cname: string;
  /** ETF基准指数代码 */
  index_code: string;
  /** ETF基准指数中文全称 */
  index_name: string;
  /** 设立日期（格式：YYYYMMDD） */
  setup_date: string;
  /** 上市日期（格式：YYYYMMDD） */
  list_date: string;
  /** 存续状态（L上市 D退市 P待上市） */
  list_status: string;
  /** 交易所（上交所SH 深交所SZ） */
  exchange: string;
  /** 基金管理人简称 */
  mgr_name: string;
  /** 基金托管人名称 */
  custod_name: string;
  /** 基金管理人收取的费用 */
  mgt_fee: number;
  /** 基金投资通道类型（境内、QDII） */
  etf_type: string;
}

export interface EtfBasicParams {
  /** ETF代码（带.SZ/.SH后缀的6位数字，如：159526.SZ） */
  ts_code?: string;
  /** 跟踪指数代码 */
  index_code?: string;
  /** 上市日期（格式：YYYYMMDD） */
  list_date?: string;
  /** 上市状态（L上市 D退市 P待上市） */
  list_status?: string;
  /** 交易所（SH上交所 SZ深交所） */
  exchange?: string;
  /** 管理人（简称，e.g.华夏基金) */
  mgr?: string;
}
