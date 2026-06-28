import type { ApprovalItem, Severity } from "../lib/mock-data";

const severityLabel: Record<Severity, string> = {
  high: "高风险",
  medium: "中风险",
  low: "低风险",
};

export function ApprovalQueue({ items }: { items: ApprovalItem[] }) {
  return (
    <section className="panel panel--tall">
      <div className="panel__header">
        <div>
          <p className="eyebrow">Approval</p>
          <h2>待老板审批</h2>
        </div>
        <span className="panel__count">{items.length} 项</span>
      </div>

      <div className="approval-list">
        {items.map((item) => (
          <article className="approval-card" key={item.id}>
            <div className="approval-card__topline">
              <span>{item.category}</span>
              <span className={`badge badge--${item.risk}`}>{severityLabel[item.risk]}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.impact}</p>
            <div className="approval-card__footer">
              <span>{item.owner}</span>
              <a href={item.issueUrl}>进入任务</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
