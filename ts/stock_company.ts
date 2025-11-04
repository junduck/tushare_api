/**
 * 上市公司基本信息
 * 获取上市公司基础信息，单次提取4500条，可以根据交易所分批提取积分：用户需要至少120积分才可以调取，具体请参阅积分获取办法
 */
export const StockCompanyApi = "stock_company"

export interface StockCompanyItem {
  /** 股票代码 */
  ts_code: string;
  /** 公司全称 */
  com_name: string;
  /** 统一社会信用代码 */
  com_id: string;
  /** 交易所代码 */
  exchange: string;
  /** 法人代表 */
  chairman: string;
  /** 总经理 */
  manager: string;
  /** 董秘 */
  secretary: string;
  /** 注册资本(万元) */
  reg_capital: number;
  /** 注册日期 */
  setup_date: string;
  /** 所在省份 */
  province: string;
  /** 所在城市 */
  city: string;
  /** 公司介绍 */
  introduction?: string;
  /** 公司主页 */
  website: string;
  /** 电子邮件 */
  email: string;
  /** 办公室 */
  office?: string;
  /** 员工人数 */
  employees: number;
  /** 主要业务及产品 */
  main_business?: string;
  /** 经营范围 */
  business_scope?: string;
}

export interface StockCompanyParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易所代码 ，SSE上交所 SZSE深交所 BSE北交所 */
  exchange?: string;
}
