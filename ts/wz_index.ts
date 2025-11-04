/**
 * 温州民间借贷利率
 * 温州民间借贷利率，即温州指数限量：不限量，一次可取全部指标全部历史数据积分：用户需要积攒2000积分可调取，具体请参阅积分获取办法数据来源：温州指数网注：温州指数 ，即温州民间融资综合利率指数，该指数及时反映民间金融交易活跃度和交易价格。该指数样板数据主要采集于四个方面：由温州市设立的几百家企业测报点，把各自借入的民间资本利率通过各地方金融办不记名申报收集起来；对各小额贷款公司借出的利率进行加权平均；融资性担保公司如典当行在融资过程中的利率，由温州经信委和商务局负责测报；民间借贷服务中心的实时利率。这些利率进行加权平均，就得出了“温州指数”。它是温州民间融资利率的风向标。2012年12月7日，温州指数正式对外发布。
 */
export const WzIndexApi = "wz_index"

export interface WzIndexItem {
  /** 日期 */
  date: string;
  /** 温州民间融资综合利率指数 (%，下同) */
  comp_rate: number;
  /** 民间借贷服务中心利率 */
  center_rate: number;
  /** 小额贷款公司放款利率 */
  micro_rate: number;
  /** 民间资本管理公司融资价格 */
  cm_rate: number;
  /** 社会直接借贷利率 */
  sdb_rate: number;
  /** 其他市场主体利率 */
  om_rate: number;
  /** 农村互助会互助金费率 */
  aa_rate: number;
  /** 温州地区民间借贷分期限利率（一月期） */
  m1_rate: number;
  /** 温州地区民间借贷分期限利率（三月期） */
  m3_rate: number;
  /** 温州地区民间借贷分期限利率（六月期） */
  m6_rate: number;
  /** 温州地区民间借贷分期限利率（一年期） */
  m12_rate: number;
  /** 温州地区民间借贷分期限利率（长期） */
  long_rate: number;
}

export interface WzIndexParams {
  /** 日期 */
  date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
