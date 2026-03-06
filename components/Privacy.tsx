export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20">
      <h2 className="section-title">Privacy</h2>
      <p className="section-subtitle">Selective Disclosure keeps sensitive fields private while preserving proof integrity.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="glass-card p-5">
          <h3 className="text-sm font-semibold text-cyanAccent">Selective Disclosure</h3>
          <p className="mt-2 text-sm text-gray-300">
            Reveal only required claims to each counterparty, with cryptographic binding to the signed receipt.
          </p>
        </article>
        <article className="glass-card p-5">
          <h3 className="text-sm font-semibold text-cyanAccent">Policy-Bound Claims</h3>
          <p className="mt-2 text-sm text-gray-300">
            Enforce least-privilege proofs for compliance, fraud controls, and jurisdiction-specific checks.
          </p>
        </article>
        <article className="glass-card p-5">
          <h3 className="text-sm font-semibold text-cyanAccent">Composable Security</h3>
          <p className="mt-2 text-sm text-gray-300">
            Combine zero-knowledge disclosures, signature verification, and revocation checks in one trust flow.
          </p>
        </article>
      </div>
    </section>
  );
}
