export type Trend = "up" | "down" | "flat";
export type Severity = "high" | "medium" | "low";
export type AgentStatus = "normal" | "working" | "review" | "blocked";

export type Metric = {
  label: string;
  value: string;
  note: string;
  trend: Trend;
};

export type ApprovalItem = {
  id: string;
  title: string;
  category: string;
  risk: Severity;
  impact: string;
  owner: string;
  issueUrl: string;
};

export type Agent = {
  name: string;
  role: string;
  status: AgentStatus;
  today: string;
  queue: number;
};

export type RiskItem = {
  title: string;
  count: number;
  severity: Severity;
  action: string;
};

export type ProductSuggestion = {
  product: string;
  signal: string;
  suggestion: string;
  priority: Severity;
};

export const metrics: Metric[] = [
  { label: "今日 GMV", value: "¥28,460", note: "较昨日 +12.4%", trend: "up" },
  { label: "订单数", value: "186", note: "待处理 23 单", trend: "up" },
  { label: "退款率", value: "3.8%", note: "较昨日 -0.6%", trend: "down" },
  { label: "待发货", value: "42", note: "超 24h：6 单", trend: "flat" },
  { label: "低库存 SKU", value: "8", note: "2 个高风险", trend: "up" },
  { label: "待审批", value: "5", note: "含 2 个高风险", trend: "flat" },
];

export const approvals: ApprovalItem[] = [
  {
    id: "AP-001",
    title: "商务增高鞋建议改价：239 → 219",
    category: "改价建议",
    risk: "high",
    impact: "预计提升转化，但会压缩约 7% 毛利",
    owner: "商品优化 Agent",
    issueUrl: "#",
  },
  {
    id: "AP-002",
    title: "爆款黑色 42 码建议补货 80 双",
    category: "库存调整",
    risk: "medium",
    impact: "当前库存 7，近 7 日日均销量 11",
    owner: "库存补货 Agent",
    issueUrl: "#",
  },
  {
    id: "AP-003",
    title: "退款单 20260629-018 建议同意退款",
    category: "售后处理",
    risk: "high",
    impact: "客户已上传有效凭证，建议减少差评风险",
    owner: "售后客服 Agent",
    issueUrl: "#",
  },
  {
    id: "AP-004",
    title: "商品标题新增“商务正装”关键词",
    category: "标题优化",
    risk: "low",
    impact: "匹配近期搜索词，预计提升自然流量",
    owner: "商品优化 Agent",
    issueUrl: "#",
  },
];

export const agents: Agent[] = [
  { name: "AI 店长", role: "调度 / 验收 / 风控", status: "working", today: "已分配 14 个任务，等待 5 个审批", queue: 5 },
  { name: "数据日报 Agent", role: "日报 / 异常发现", status: "normal", today: "日报已完成，发现 6 个异常", queue: 0 },
  { name: "商品优化 Agent", role: "标题 / 详情页 / 主图建议", status: "review", today: "生成 3 个优化草稿", queue: 3 },
  { name: "订单异常 Agent", role: "未发货 / 物流异常", status: "working", today: "正在处理 6 个超时订单", queue: 6 },
  { name: "库存补货 Agent", role: "低库存 / 滞销 / 补货", status: "review", today: "提交 2 个补货建议", queue: 2 },
  { name: "售后客服 Agent", role: "退款 / 差评 / 回复草稿", status: "blocked", today: "1 个高风险退款等待确认", queue: 4 },
];

export const risks: RiskItem[] = [
  { title: "48 小时未发货", count: 6, severity: "high", action: "已分配给订单异常 Agent" },
  { title: "低库存 SKU", count: 8, severity: "medium", action: "2 个进入待审批补货" },
  { title: "退款率异常商品", count: 2, severity: "high", action: "已创建售后分析任务" },
  { title: "高点击低转化商品", count: 3, severity: "medium", action: "等待商品优化草稿" },
];

export const productSuggestions: ProductSuggestion[] = [
  {
    product: "商务增高男鞋 黑色款",
    signal: "点击率高于店均 31%，转化低于店均 18%",
    suggestion: "主图加入脚感、防滑、增高不累脚卖点；详情页前 3 屏强化通勤场景。",
    priority: "high",
  },
  {
    product: "轻奢 18K 金珠耳钉",
    signal: "收藏加购率上升，但咨询集中在材质和售后",
    suggestion: "补充 18K 材质说明、佩戴场景和保养说明，降低客服重复解释。",
    priority: "medium",
  },
  {
    product: "OWALA 风格保温杯",
    signal: "搜索词有增长，详情页停留时间偏低",
    suggestion: "把吸嘴、防漏、保温时长和清洗便利性做成首屏四卖点。",
    priority: "medium",
  },
];

export const dailySummary = {
  title: "AI 店长日报摘要",
  body: "今日店铺整体表现偏正向，GMV 和订单数均上涨。主要风险集中在 48 小时未发货、退款率异常商品和低库存 SKU。建议优先审批 2 个高风险事项：商务增高鞋改价建议、退款单 20260629-018 处理建议。",
  nextActions: [
    "优先确认 5 个待审批事项",
    "复查 6 个超时未发货订单",
    "让商品优化 Agent 完成 3 个标题 / 主图草稿",
    "确认爆款黑色 42 码是否补货",
  ],
};
