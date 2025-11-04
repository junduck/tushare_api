/**
 * 指数技术面因子(专业版)
 * 获取指数每日技术面因子数据，用于跟踪指数当前走势情况，数据由Tushare社区自产，覆盖全历史；输出参数_bfq表示不复权描述中说明了因子的默认传参，如需要特殊参数或者更多因子可以联系管理员评估，指数包括大盘指数 申万行业指数 中信指数限量：单次最大8000积分：5000积分每分钟可以请求30次，8000积分以上每分钟500次
 */
export const IdxFactorProApi = "idx_factor_pro"

export interface IdxFactorProItem {
  /** 指数代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 开盘价 */
  open: number;
  /** 最高价 */
  high: number;
  /** 最低价 */
  low: number;
  /** 收盘价 */
  close: number;
  /** 昨收价 */
  pre_close: number;
  /** 涨跌额 */
  change: number;
  /** 涨跌幅 （未复权，如果是复权请用 通用行情接口 ） */
  pct_change: number;
  /** 成交量 （手） */
  vol: number;
  /** 成交额 （千元） */
  amount: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asi_bfq: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asit_bfq: number;
  /** 真实波动N日平均值-CLOSE, HIGH, LOW, N=20 */
  atr_bfq: number;
  /** BBI多空指标-CLOSE, M1=3, M2=6, M3=12, M4=20 */
  bbi_bfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias1_bfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias2_bfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias3_bfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_lower_bfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_mid_bfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_upper_bfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_ar_bfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_br_bfq: number;
  /** 顺势指标又叫CCI指标-CLOSE, HIGH, LOW, N=14 */
  cci_bfq: number;
  /** CR价格动量指标-CLOSE, HIGH, LOW, N=20 */
  cr_bfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_dif_bfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_difma_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adx_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adxr_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_mdi_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_pdi_bfq: number;
  /** 连跌天数 */
  downdays: number;
  /** 连涨天数 */
  updays: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  dpo_bfq: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  madpo_bfq: number;
  /** 指数移动平均-N=10 */
  ema_bfq_10: number;
  /** 指数移动平均-N=20 */
  ema_bfq_20: number;
  /** 指数移动平均-N=250 */
  ema_bfq_250: number;
  /** 指数移动平均-N=30 */
  ema_bfq_30: number;
  /** 指数移动平均-N=5 */
  ema_bfq_5: number;
  /** 指数移动平均-N=60 */
  ema_bfq_60: number;
  /** 指数移动平均-N=90 */
  ema_bfq_90: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  emv_bfq: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  maemv_bfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_12_bfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_50_bfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_bfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_d_bfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_k_bfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_down_bfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_mid_bfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_upper_bfq: number;
  /** LOWRANGE(LOW)表示当前最低价是近多少周期内最低价的最小值 */
  lowdays: number;
  /** TOPRANGE(HIGH)表示当前最高价是近多少周期内最高价的最大值 */
  topdays: number;
  /** 简单移动平均-N=10 */
  ma_bfq_10: number;
  /** 简单移动平均-N=20 */
  ma_bfq_20: number;
  /** 简单移动平均-N=250 */
  ma_bfq_250: number;
  /** 简单移动平均-N=30 */
  ma_bfq_30: number;
  /** 简单移动平均-N=5 */
  ma_bfq_5: number;
  /** 简单移动平均-N=60 */
  ma_bfq_60: number;
  /** 简单移动平均-N=90 */
  ma_bfq_90: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_bfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dea_bfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dif_bfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  mass_bfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  ma_mass_bfq: number;
  /** MFI指标是成交量的RSI指标-CLOSE, HIGH, LOW, VOL, N=14 */
  mfi_bfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtm_bfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtmma_bfq: number;
  /** 能量潮指标-CLOSE, VOL */
  obv_bfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psy_bfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psyma_bfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  roc_bfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  maroc_bfq: number;
  /** RSI指标-CLOSE, N=12 */
  rsi_bfq_12: number;
  /** RSI指标-CLOSE, N=24 */
  rsi_bfq_24: number;
  /** RSI指标-CLOSE, N=6 */
  rsi_bfq_6: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_down_bfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_mid_bfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_up_bfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trix_bfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trma_bfq: number;
  /** VR容量比率-CLOSE, VOL, M1=26 */
  vr_bfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr_bfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr1_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td1_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td2_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td3_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td4_bfq: number;
}

export interface IdxFactorProParams {
  /** 指数代码(大盘指数 申万指数 中信指数) */
  ts_code?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
  /** 交易日期 */
  trade_date?: string;
}
