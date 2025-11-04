/**
 * 工业生产者出厂价格指数（PPI）
 * 获取PPI工业生产者出厂价格指数数据限量：单次最大5000，一次可以提取全部数据权限：用户600积分可以使用，具体请参阅积分获取办法
 */
export const CnPpiApi = "cn_ppi"

export interface CnPpiItem {
  /** 月份YYYYMM */
  month: string;
  /** PPI：全部工业品：当月同比 */
  ppi_yoy: number;
  /** PPI：生产资料：当月同比 */
  ppi_mp_yoy: number;
  /** PPI：生产资料：采掘业：当月同比 */
  ppi_mp_qm_yoy: number;
  /** PPI：生产资料：原料业：当月同比 */
  ppi_mp_rm_yoy: number;
  /** PPI：生产资料：加工业：当月同比 */
  ppi_mp_p_yoy: number;
  /** PPI：生活资料：当月同比 */
  ppi_cg_yoy: number;
  /** PPI：生活资料：食品类：当月同比 */
  ppi_cg_f_yoy: number;
  /** PPI：生活资料：衣着类：当月同比 */
  ppi_cg_c_yoy: number;
  /** PPI：生活资料：一般日用品类：当月同比 */
  ppi_cg_adu_yoy: number;
  /** PPI：生活资料：耐用消费品类：当月同比 */
  ppi_cg_dcg_yoy: number;
  /** PPI：全部工业品：环比 */
  ppi_mom: number;
  /** PPI：生产资料：环比 */
  ppi_mp_mom: number;
  /** PPI：生产资料：采掘业：环比 */
  ppi_mp_qm_mom: number;
  /** PPI：生产资料：原料业：环比 */
  ppi_mp_rm_mom: number;
  /** PPI：生产资料：加工业：环比 */
  ppi_mp_p_mom: number;
  /** PPI：生活资料：环比 */
  ppi_cg_mom: number;
  /** PPI：生活资料：食品类：环比 */
  ppi_cg_f_mom: number;
  /** PPI：生活资料：衣着类：环比 */
  ppi_cg_c_mom: number;
  /** PPI：生活资料：一般日用品类：环比 */
  ppi_cg_adu_mom: number;
  /** PPI：生活资料：耐用消费品类：环比 */
  ppi_cg_dcg_mom: number;
  /** PPI：全部工业品：累计同比 */
  ppi_accu: number;
  /** PPI：生产资料：累计同比 */
  ppi_mp_accu: number;
  /** PPI：生产资料：采掘业：累计同比 */
  ppi_mp_qm_accu: number;
  /** PPI：生产资料：原料业：累计同比 */
  ppi_mp_rm_accu: number;
  /** PPI：生产资料：加工业：累计同比 */
  ppi_mp_p_accu: number;
  /** PPI：生活资料：累计同比 */
  ppi_cg_accu: number;
  /** PPI：生活资料：食品类：累计同比 */
  ppi_cg_f_accu: number;
  /** PPI：生活资料：衣着类：累计同比 */
  ppi_cg_c_accu: number;
  /** PPI：生活资料：一般日用品类：累计同比 */
  ppi_cg_adu_accu: number;
  /** PPI：生活资料：耐用消费品类：累计同比 */
  ppi_cg_dcg_accu: number;
}

export interface CnPpiParams {
  /** 月份（YYYYMM，下同），支持多个月份同时输入，逗号分隔 */
  m?: string;
  /** 开始月份 */
  start_m?: string;
  /** 结束月份 */
  end_m?: string;
}
