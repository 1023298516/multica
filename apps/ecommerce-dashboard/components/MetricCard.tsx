import type { Metric } from "../lib/mock-data";

const trendLabel: Record<Metric["trend"], string> = {
  up: "上升",
  down: "下降",
  flat: "持平",
};

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="metric-card">
      <div className="metric-card__header">
        <span>{metric.label}</span>
        <span className={`trend trend--${metric.trend}`}>{trendLabel[metric.trend]}</span>
      </div>
      <strong>{metric.value}</strong>
      <p>{metric.note}</p>
    </article>
  );
}
