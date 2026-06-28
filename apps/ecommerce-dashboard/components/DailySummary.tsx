import type { dailySummary } from "../lib/mock-data";

type Summary = typeof dailySummary;

export function DailySummary({ summary }: { summary: Summary }) {
  return (
    <section className="panel summary-panel">
      <div className="panel__header">
        <div>
          <p className="eyebrow">Daily Brief</p>
          <h2>{summary.title}</h2>
        </div>
      </div>

      <p className="summary-panel__body">{summary.body}</p>
      <div className="next-actions">
        <h3>下一步动作</h3>
        <ul>
          {summary.nextActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
