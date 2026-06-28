import { AgentStatusPanel } from "../components/AgentStatusPanel";
import { ApprovalQueue } from "../components/ApprovalQueue";
import { DailySummary } from "../components/DailySummary";
import { MetricCard } from "../components/MetricCard";
import { ProductSuggestionList } from "../components/ProductSuggestionList";
import { RiskPanel } from "../components/RiskPanel";
import {
  agents,
  approvals,
  dailySummary,
  metrics,
  productSuggestions,
  risks,
} from "../lib/mock-data";

export default function EcommerceDashboardPage() {
  return (
    <main className="dashboard-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Taobao AI Operation Center</p>
          <h1>淘宝 AI 运营首页</h1>
          <p>
            老板视角总览：销售、异常、AI 员工状态、待审批事项和今日运营建议。
          </p>
        </div>
        <div className="hero__actions">
          <a href="#approvals">查看待审批</a>
          <a className="secondary" href="https://github.com/1023298516/multica">
            返回 Multica 仓库
          </a>
        </div>
      </section>

      <section className="metrics-grid" aria-label="核心数据">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="dashboard-grid dashboard-grid--primary">
        <div id="approvals">
          <ApprovalQueue items={approvals} />
        </div>
        <div className="stack">
          <RiskPanel risks={risks} />
          <AgentStatusPanel agents={agents} />
        </div>
      </section>

      <section className="dashboard-grid">
        <ProductSuggestionList suggestions={productSuggestions} />
        <DailySummary summary={dailySummary} />
      </section>
    </main>
  );
}
