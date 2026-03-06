const steps = [
  {
    step: '01',
    title: 'Intent Created',
    detail: 'Agent assembles action intent with actor identity, scope, and policy constraints.'
  },
  {
    step: '02',
    title: 'Execution Performed',
    detail: 'The action runs against a target API, payment rail, or application workflow.'
  },
  {
    step: '03',
    title: 'Receipt Signed',
    detail: 'AAR payload is canonicalized and signed with cryptographic keys tied to the agent identity.'
  },
  {
    step: '04',
    title: 'Receipt Distributed',
    detail: 'Receipts are shared with counterparties, trust layers, or storage providers.'
  },
  {
    step: '05',
    title: 'Verification',
    detail: 'Any verifier validates signature, schema, and policy proofs before accepting outcomes.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20">
      <h2 className="section-title">How AAR Works</h2>
      <p className="section-subtitle">Five deterministic steps produce an interoperable trust artifact.</p>
      <ol className="mt-8 grid gap-4 md:grid-cols-5">
        {steps.map((item) => (
          <li key={item.step} className="glass-card p-4">
            <p className="font-mono text-xs tracking-widest text-cyanAccent">{item.step}</p>
            <h3 className="mt-2 text-sm font-semibold sm:text-base">{item.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:text-sm">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
