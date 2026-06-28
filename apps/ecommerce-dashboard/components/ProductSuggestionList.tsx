import type { ProductSuggestion } from "../lib/mock-data";

export function ProductSuggestionList({ suggestions }: { suggestions: ProductSuggestion[] }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="eyebrow">Product</p>
          <h2>商品优化建议</h2>
        </div>
      </div>

      <div className="suggestion-list">
        {suggestions.map((item) => (
          <article className="suggestion-card" key={item.product}>
            <div className="suggestion-card__title">
              <h3>{item.product}</h3>
              <span className={`badge badge--${item.priority}`}>{item.priority}</span>
            </div>
            <p className="suggestion-card__signal">{item.signal}</p>
            <p>{item.suggestion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
