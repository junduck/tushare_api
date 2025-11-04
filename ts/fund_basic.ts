/**
 * 基金列表
 * 获取公募基金数据列表，包括场内和场外基金积分：用户需要2000积分才可以调取，单次最大可以提取15000条数据，5000积分以上权限更高，具体请参阅积分获取办法
 */
export const FundBasicApi = "fund_basic"

export interface FundBasicItem {
  /** 基金代码 */
  ts_code: string;
  /** 简称 */
  name: string;
  /** 管理人 */
  management: string;
  /** 托管人 */
  custodian: string;
  /** 投资类型 */
  fund_type: string;
  /** 成立日期 */
  found_date: string;
  /** 到期日期 */
  due_date: string;
  /** 上市时间 */
  list_date: string;
  /** 发行日期 */
  issue_date: string;
  /** 退市日期 */
  delist_date: string;
  /** 发行份额(亿) */
  issue_amount: number;
  /** 管理费 */
  m_fee: number;
  /** 托管费 */
  c_fee: number;
  /** 存续期 */
  duration_year: number;
  /** 面值 */
  p_value: number;
  /** 起点金额(万元) */
  min_amount: number;
  /** 预期收益率 */
  exp_return: number;
  /** 业绩比较基准 */
  benchmark: string;
  /** 存续状态D摘牌 I发行 L已上市 */
  status: string;
  /** 投资风格 */
  invest_type: string;
  /** 基金类型 */
  type: string;
  /** 受托人 */
  trustee: string;
  /** 日常申购起始日 */
  purc_startdate: string;
  /** 日常赎回起始日 */
  redm_startdate: string;
  /** E场内O场外 */
  market: string;
}

export interface FundBasicParams {
  /** 基金代码 */
  ts_code?: string;
  /** 交易市场: E场内 O场外（默认E） */
  market?: string;
  /** 存续状态 D摘牌 I发行 L上市中 */
  status?: string;
}
