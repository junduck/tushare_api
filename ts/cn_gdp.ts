/**
 * 国内生产总值（GDP）
 * 获取国民经济之GDP数据限量：单次最大10000，一次可以提取全部数据权限：用户积累600积分可以使用，具体请参阅积分获取办法
 */
export const CnGdpApi = "cn_gdp"

export interface CnGdpItem {
  /** 季度 */
  quarter: string;
  /** GDP累计值（亿元） */
  gdp: number;
  /** 当季同比增速（%） */
  gdp_yoy: number;
  /** 第一产业累计值（亿元） */
  pi: number;
  /** 第一产业同比增速（%） */
  pi_yoy: number;
  /** 第二产业累计值（亿元） */
  si: number;
  /** 第二产业同比增速（%） */
  si_yoy: number;
  /** 第三产业累计值（亿元） */
  ti: number;
  /** 第三产业同比增速（%） */
  ti_yoy: number;
}

export interface CnGdpParams {
  /** 季度（2019Q1表示，2019年第一季度） */
  q?: string;
  /** 开始季度 */
  start_q?: string;
  /** 结束季度 */
  end_q?: string;
  /** 指定输出字段（e.g. fields='quarter,gdp,gdp_yoy'） */
  fields?: string;
}
