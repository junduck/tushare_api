/**
 * 股票技术面因子(专业版）
 * 获取股票每日技术面因子数据，用于跟踪股票当前走势情况，数据由Tushare社区自产，覆盖全历史；输出参数_bfq表示不复权，_qfq表示前复权 _hfq表示后复权，描述中说明了因子的默认传参，如需要特殊参数或者更多因子可以联系管理员评估限量：单次调取最多返回10000条数据，可以通过日期参数循环积分：5000积分每分钟可以请求30次，8000积分以上每分钟500次，具体请参阅积分获取办法
 */
export const StkFactorProApi = "stk_factor_pro"

export interface StkFactorProItem {
  /** 股票代码 */
  ts_code: string;
  /** 交易日期 */
  trade_date: string;
  /** 开盘价 */
  open: number;
  /** 开盘价（后复权） */
  open_hfq: number;
  /** 开盘价（前复权） */
  open_qfq: number;
  /** 最高价 */
  high: number;
  /** 最高价（后复权） */
  high_hfq: number;
  /** 最高价（前复权） */
  high_qfq: number;
  /** 最低价 */
  low: number;
  /** 最低价（后复权） */
  low_hfq: number;
  /** 最低价（前复权） */
  low_qfq: number;
  /** 收盘价 */
  close: number;
  /** 收盘价（后复权） */
  close_hfq: number;
  /** 收盘价（前复权） */
  close_qfq: number;
  /** 昨收价(前复权)--为daily接口的pre_close,以当时复权因子计算值跟前一日close_qfq对不上，可不用 */
  pre_close: number;
  /** 涨跌额 */
  change: number;
  /** 涨跌幅 （未复权，如果是复权请用 通用行情接口 ） */
  pct_chg: number;
  /** 成交量 （手） */
  vol: number;
  /** 成交额 （千元） */
  amount: number;
  /** 换手率（%） */
  turnover_rate: number;
  /** 换手率（自由流通股） */
  turnover_rate_f: number;
  /** 量比 */
  volume_ratio: number;
  /** 市盈率（总市值/净利润， 亏损的PE为空） */
  pe: number;
  /** 市盈率（TTM，亏损的PE为空） */
  pe_ttm: number;
  /** 市净率（总市值/净资产） */
  pb: number;
  /** 市销率 */
  ps: number;
  /** 市销率（TTM） */
  ps_ttm: number;
  /** 股息率 （%） */
  dv_ratio: number;
  /** 股息率（TTM）（%） */
  dv_ttm: number;
  /** 总股本 （万股） */
  total_share: number;
  /** 流通股本 （万股） */
  float_share: number;
  /** 自由流通股本 （万） */
  free_share: number;
  /** 总市值 （万元） */
  total_mv: number;
  /** 流通市值（万元） */
  circ_mv: number;
  /** 复权因子 */
  adj_factor: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asi_bfq: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asi_hfq: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asi_qfq: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asit_bfq: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asit_hfq: number;
  /** 振动升降指标-OPEN, CLOSE, HIGH, LOW, M1=26, M2=10 */
  asit_qfq: number;
  /** 真实波动N日平均值-CLOSE, HIGH, LOW, N=20 */
  atr_bfq: number;
  /** 真实波动N日平均值-CLOSE, HIGH, LOW, N=20 */
  atr_hfq: number;
  /** 真实波动N日平均值-CLOSE, HIGH, LOW, N=20 */
  atr_qfq: number;
  /** BBI多空指标-CLOSE, M1=3, M2=6, M3=12, M4=20 */
  bbi_bfq: number;
  /** BBI多空指标-CLOSE, M1=3, M2=6, M3=12, M4=21 */
  bbi_hfq: number;
  /** BBI多空指标-CLOSE, M1=3, M2=6, M3=12, M4=22 */
  bbi_qfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias1_bfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias1_hfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias1_qfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias2_bfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias2_hfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias2_qfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias3_bfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias3_hfq: number;
  /** BIAS乖离率-CLOSE, L1=6, L2=12, L3=24 */
  bias3_qfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_lower_bfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_lower_hfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_lower_qfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_mid_bfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_mid_hfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_mid_qfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_upper_bfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_upper_hfq: number;
  /** BOLL指标，布林带-CLOSE, N=20, P=2 */
  boll_upper_qfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_ar_bfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_ar_hfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_ar_qfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_br_bfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_br_hfq: number;
  /** BRAR情绪指标-OPEN, CLOSE, HIGH, LOW, M1=26 */
  brar_br_qfq: number;
  /** 顺势指标又叫CCI指标-CLOSE, HIGH, LOW, N=14 */
  cci_bfq: number;
  /** 顺势指标又叫CCI指标-CLOSE, HIGH, LOW, N=14 */
  cci_hfq: number;
  /** 顺势指标又叫CCI指标-CLOSE, HIGH, LOW, N=14 */
  cci_qfq: number;
  /** CR价格动量指标-CLOSE, HIGH, LOW, N=20 */
  cr_bfq: number;
  /** CR价格动量指标-CLOSE, HIGH, LOW, N=20 */
  cr_hfq: number;
  /** CR价格动量指标-CLOSE, HIGH, LOW, N=20 */
  cr_qfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_dif_bfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_dif_hfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_dif_qfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_difma_bfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_difma_hfq: number;
  /** 平行线差指标-CLOSE, N1=10, N2=50, M=10 */
  dfma_difma_qfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adx_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adx_hfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adx_qfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adxr_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adxr_hfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_adxr_qfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_mdi_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_mdi_hfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_mdi_qfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_pdi_bfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_pdi_hfq: number;
  /** 动向指标-CLOSE, HIGH, LOW, M1=14, M2=6 */
  dmi_pdi_qfq: number;
  /** 连跌天数 */
  downdays: number;
  /** 连涨天数 */
  updays: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  dpo_bfq: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  dpo_hfq: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  dpo_qfq: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  madpo_bfq: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  madpo_hfq: number;
  /** 区间震荡线-CLOSE, M1=20, M2=10, M3=6 */
  madpo_qfq: number;
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
  /** 指数移动平均-N=10 */
  ema_hfq_10: number;
  /** 指数移动平均-N=20 */
  ema_hfq_20: number;
  /** 指数移动平均-N=250 */
  ema_hfq_250: number;
  /** 指数移动平均-N=30 */
  ema_hfq_30: number;
  /** 指数移动平均-N=5 */
  ema_hfq_5: number;
  /** 指数移动平均-N=60 */
  ema_hfq_60: number;
  /** 指数移动平均-N=90 */
  ema_hfq_90: number;
  /** 指数移动平均-N=10 */
  ema_qfq_10: number;
  /** 指数移动平均-N=20 */
  ema_qfq_20: number;
  /** 指数移动平均-N=250 */
  ema_qfq_250: number;
  /** 指数移动平均-N=30 */
  ema_qfq_30: number;
  /** 指数移动平均-N=5 */
  ema_qfq_5: number;
  /** 指数移动平均-N=60 */
  ema_qfq_60: number;
  /** 指数移动平均-N=90 */
  ema_qfq_90: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  emv_bfq: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  emv_hfq: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  emv_qfq: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  maemv_bfq: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  maemv_hfq: number;
  /** 简易波动指标-HIGH, LOW, VOL, N=14, M=9 */
  maemv_qfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_12_bfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_12_hfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_12_qfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_50_bfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_50_hfq: number;
  /** EMA指数平均数指标-CLOSE, N1=12, N2=50 */
  expma_50_qfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_bfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_hfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_qfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_d_bfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_d_hfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_d_qfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_k_bfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_k_hfq: number;
  /** KDJ指标-CLOSE, HIGH, LOW, N=9, M1=3, M2=3 */
  kdj_k_qfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_down_bfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_down_hfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_down_qfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_mid_bfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_mid_hfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_mid_qfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_upper_bfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_upper_hfq: number;
  /** 肯特纳交易通道, N选20日，ATR选10日-CLOSE, HIGH, LOW, N=20, M=10 */
  ktn_upper_qfq: number;
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
  /** 简单移动平均-N=10 */
  ma_hfq_10: number;
  /** 简单移动平均-N=20 */
  ma_hfq_20: number;
  /** 简单移动平均-N=250 */
  ma_hfq_250: number;
  /** 简单移动平均-N=30 */
  ma_hfq_30: number;
  /** 简单移动平均-N=5 */
  ma_hfq_5: number;
  /** 简单移动平均-N=60 */
  ma_hfq_60: number;
  /** 简单移动平均-N=90 */
  ma_hfq_90: number;
  /** 简单移动平均-N=10 */
  ma_qfq_10: number;
  /** 简单移动平均-N=20 */
  ma_qfq_20: number;
  /** 简单移动平均-N=250 */
  ma_qfq_250: number;
  /** 简单移动平均-N=30 */
  ma_qfq_30: number;
  /** 简单移动平均-N=5 */
  ma_qfq_5: number;
  /** 简单移动平均-N=60 */
  ma_qfq_60: number;
  /** 简单移动平均-N=90 */
  ma_qfq_90: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_bfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_hfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_qfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dea_bfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dea_hfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dea_qfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dif_bfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dif_hfq: number;
  /** MACD指标-CLOSE, SHORT=12, LONG=26, M=9 */
  macd_dif_qfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  mass_bfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  mass_hfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  mass_qfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  ma_mass_bfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  ma_mass_hfq: number;
  /** 梅斯线-HIGH, LOW, N1=9, N2=25, M=6 */
  ma_mass_qfq: number;
  /** MFI指标是成交量的RSI指标-CLOSE, HIGH, LOW, VOL, N=14 */
  mfi_bfq: number;
  /** MFI指标是成交量的RSI指标-CLOSE, HIGH, LOW, VOL, N=14 */
  mfi_hfq: number;
  /** MFI指标是成交量的RSI指标-CLOSE, HIGH, LOW, VOL, N=14 */
  mfi_qfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtm_bfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtm_hfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtm_qfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtmma_bfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtmma_hfq: number;
  /** 动量指标-CLOSE, N=12, M=6 */
  mtmma_qfq: number;
  /** 能量潮指标-CLOSE, VOL */
  obv_bfq: number;
  /** 能量潮指标-CLOSE, VOL */
  obv_hfq: number;
  /** 能量潮指标-CLOSE, VOL */
  obv_qfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psy_bfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psy_hfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psy_qfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psyma_bfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psyma_hfq: number;
  /** 投资者对股市涨跌产生心理波动的情绪指标-CLOSE, N=12, M=6 */
  psyma_qfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  roc_bfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  roc_hfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  roc_qfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  maroc_bfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  maroc_hfq: number;
  /** 变动率指标-CLOSE, N=12, M=6 */
  maroc_qfq: number;
  /** RSI指标-CLOSE, N=12 */
  rsi_bfq_12: number;
  /** RSI指标-CLOSE, N=24 */
  rsi_bfq_24: number;
  /** RSI指标-CLOSE, N=6 */
  rsi_bfq_6: number;
  /** RSI指标-CLOSE, N=12 */
  rsi_hfq_12: number;
  /** RSI指标-CLOSE, N=24 */
  rsi_hfq_24: number;
  /** RSI指标-CLOSE, N=6 */
  rsi_hfq_6: number;
  /** RSI指标-CLOSE, N=12 */
  rsi_qfq_12: number;
  /** RSI指标-CLOSE, N=24 */
  rsi_qfq_24: number;
  /** RSI指标-CLOSE, N=6 */
  rsi_qfq_6: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_down_bfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_down_hfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_down_qfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_mid_bfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_mid_hfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_mid_qfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_up_bfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_up_hfq: number;
  /** 唐安奇通道(海龟)交易指标-HIGH, LOW, 20 */
  taq_up_qfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trix_bfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trix_hfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trix_qfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trma_bfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trma_hfq: number;
  /** 三重指数平滑平均线-CLOSE, M1=12, M2=20 */
  trma_qfq: number;
  /** VR容量比率-CLOSE, VOL, M1=26 */
  vr_bfq: number;
  /** VR容量比率-CLOSE, VOL, M1=26 */
  vr_hfq: number;
  /** VR容量比率-CLOSE, VOL, M1=26 */
  vr_qfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr_bfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr_hfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr_qfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr1_bfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr1_hfq: number;
  /** W&R 威廉指标-CLOSE, HIGH, LOW, N=10, N1=6 */
  wr1_qfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td1_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td1_hfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td1_qfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td2_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td2_hfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td2_qfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td3_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td3_hfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td3_qfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td4_bfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td4_hfq: number;
  /** 薛斯通道II-CLOSE, HIGH, LOW, N=102, M=7 */
  xsii_td4_qfq: number;
}

export interface StkFactorProParams {
  /** 股票代码 */
  ts_code?: string;
  /** 交易日期(格式：yyyymmdd，下同) */
  trade_date?: string;
  /** 开始日期 */
  start_date?: string;
  /** 结束日期 */
  end_date?: string;
}
