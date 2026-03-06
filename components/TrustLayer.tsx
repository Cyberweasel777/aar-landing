const endpoints = [
  {
    method: 'POST',
    path: '/v1/receipts',
    purpose: 'Mint and sign a new AAR for an agent action.'
  },
  {
    method: 'POST',
    path: '/v1/verify',
    purpose: 'Validate signature, schema, and policy requirements.'
  },
  {
    method: 'GET',
    path: '/v1/receipts/{receipt_id}',
    purpose: 'Resolve canonical receipt payload for audits and dispute workflows.'
  },
  {
    method: 'POST',
    path: '/v1/disclosure',
    purpose: 'Issue selective-disclosure views of existing receipts.'
  }
];

export function TrustLayer() {
  return (
    <section id="trust-layer" className="scroll-mt-20">
      <h2 className="section-title">Trust Layer</h2>
      <p className="section-subtitle">
        Standardized endpoints help wallets, merchants, and agents integrate one verification contract.
      </p>
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {endpoints.map((endpoint, index) => (
          <div
            key={endpoint.path}
            className={`grid gap-2 p-4 sm:grid-cols-[100px_1fr_2fr] sm:items-center ${
              index !== endpoints.length - 1 ? 'border-b border-white/10' : ''
            }`}
          >
            <span className="font-mono text-xs text-magentaAccent">{endpoint.method}</span>
            <span className="font-mono text-xs text-cyanAccent">{endpoint.path}</span>
            <span className="text-sm text-gray-300">{endpoint.purpose}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
