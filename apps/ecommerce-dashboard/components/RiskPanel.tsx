import type { RiskItem, Severity } from "../lib/mock-data";

const severityLabel: Record<Severity, string> = {
  high: "高",
  medium: "中",
  low: "低",
};

export function RiskPanel({ risks }: { risks: RiskItem[] }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="eyebrow">Risk</p>
          <h2>今日异常</h2>
        </div>
      </div>

      <div className="risk-grid">
        {risks.map((risk) => (
          <article className={`risk-card risk-card--${risk.severity}`} key={risk.title}>
            <div>
              <span>风险等级：{severityLabel[risk.severity]}</span>
              <h3>{risk.title}</h3>
            </div>
            <strong>{risk.count}</strong>
            <p>{risk.action}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
