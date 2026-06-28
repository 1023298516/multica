import type { Agent, AgentStatus } from "../lib/mock-data";

const statusLabel: Record<AgentStatus, string> = {
  normal: "正常",
  working: "处理中",
  review: "待审批",
  blocked: "卡住",
};

export function AgentStatusPanel({ agents }: { agents: Agent[] }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="eyebrow">AI Team</p>
          <h2>AI 员工状态</h2>
        </div>
      </div>

      <div className="agent-list">
        {agents.map((agent) => (
          <article className="agent-row" key={agent.name}>
            <div className="agent-row__avatar">{agent.name.slice(0, 2)}</div>
            <div className="agent-row__main">
              <div className="agent-row__title">
                <strong>{agent.name}</strong>
                <span className={`status status--${agent.status}`}>{statusLabel[agent.status]}</span>
              </div>
              <p>{agent.role}</p>
              <small>{agent.today}</small>
            </div>
            <div className="agent-row__queue">
              <strong>{agent.queue}</strong>
              <span>队列</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
