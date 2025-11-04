/**
 * 股东增减持
 * 获取上市公司增减持数据，了解重要股东近期及历史上的股份增减变化限量：单次最大提取3000行记录，总量不限制积分：用户需要至少2000积分才可以调取。基础积分有流量控制，积分越多权限越大，5000积分以上无明显限制，请自行提高积分，具体请参阅积分获取办法
 */
export const StkHoldertradeApi = "stk_holdertrade"

export interface StkHoldertradeItem {
  /** TS代码 */
  ts_code: string;
  /** 公告日期 */
  ann_date: string;
  /** 股东名称 */
  holder_name: string;
  /** 股东类型G高管P个人C公司 */
  holder_type: string;
  /** 类型IN增持DE减持 */
  in_de: string;
  /** 变动数量 */
  change_vol: number;
  /** 占流通比例（%） */
  change_ratio: number;
  /** 变动后持股 */
  after_share: number;
  /** 变动后占流通比例（%） */
  after_ratio: number;
  /** 平均价格 */
  avg_price: number;
  /** 持股总数 */
  total_share: number;
  /** 增减持开始日期 */
  begin_date?: string;
  /** 增减持结束日期 */
  close_date?: string;
}

export interface StkHoldertradeParams {
  /** TS股票代码 */
  ts_code?: string;
  /** 公告日期 */
  ann_date?: string;
  /** 公告开始日期 */
  start_date?: string;
  /** 公告结束日期 */
  end_date?: string;
  /** 交易类型IN增持DE减持 */
  trade_type?: string;
  /** 股东类型C公司P个人G高管 */
  holder_type?: string;
}
