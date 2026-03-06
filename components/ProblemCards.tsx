const problems = [
  {
    title: 'Opaque Agent Behavior',
    description:
      'Actions are executed by autonomous systems, but counterparties cannot verify intent, inputs, and outcomes.'
  },
  {
    title: 'Fragmented Trust',
    description:
      'Each platform rebuilds assurance independently, creating expensive and inconsistent trust assumptions.'
  },
  {
    title: 'Weak Auditability',
    description:
      'Without signed receipts, dispute resolution and compliance reviews rely on incomplete internal logs.'
  }
];

export function ProblemCards() {
  return (
    <section id="problem" className="scroll-mt-20">
      <h2 className="section-title">Problem</h2>
      <p className="section-subtitle">
        AI agents can move money, call APIs, and trigger workflows, but counterparties still lack a shared,
        tamper-evident proof of what actually happened.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {problems.map((item) => (
          <article key={item.title} className="glass-card p-5">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm text-gray-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
