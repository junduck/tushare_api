/**
 * 申万行业分类
 * 获取申万行业分类，可以获取申万2014年版本（28个一级分类，104个二级分类，227个三级分类）和2021年本版（31个一级分类，134个二级分类，346个三级分类）列表信息权限：用户需2000积分可以调取，具体请参阅积分获取办法
 */
export const IndexClassifyApi = "index_classify"

export interface IndexClassifyItem {
  /** 指数代码 */
  index_code: string;
  /** 行业名称 */
  industry_name: string;
  /** 父级代码 */
  parent_code: string;
  /** 行业名称 */
  level: string;
  /** 行业代码 */
  industry_code: string;
  /** 是否发布了指数 */
  is_pub: string;
  /** 行业分类（SW申万） */
  src?: string;
}

export interface IndexClassifyParams {
  /** 指数代码 */
  index_code?: string;
  /** 行业分级（L1/L2/L3） */
  level?: string;
  /** 父级代码（一级为0） */
  parent_code?: string;
  /** 指数来源（SW2014：申万2014年版本，SW2021：申万2021年版本） */
  src?: string;
}
