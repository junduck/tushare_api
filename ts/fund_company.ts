/**
 * 基金管理人
 * 获取公募基金管理人列表积分：用户需要1500积分才可以调取，一次可以提取全部数据。具体请参阅积分获取办法
 */
export const FundCompanyApi = "fund_company"

export interface FundCompanyItem {
  /** 基金公司名称 */
  name: string;
  /** 简称 */
  shortname: string;
  /** 英文缩写 */
  short_enname?: string;
  /** 省份 */
  province: string;
  /** 城市 */
  city: string;
  /** 注册地址 */
  address: string;
  /** 电话 */
  phone: string;
  /** 办公地址 */
  office: string;
  /** 公司网址 */
  website: string;
  /** 法人代表 */
  chairman: string;
  /** 总经理 */
  manager: string;
  /** 注册资本 */
  reg_capital: number;
  /** 成立日期 */
  setup_date: string;
  /** 公司终止日期 */
  end_date: string;
  /** 员工总数 */
  employees: number;
  /** 主要产品及业务 */
  main_business: string;
  /** 组织机构代码 */
  org_code: string;
  /** 统一社会信用代码 */
  credit_code: string;
}
