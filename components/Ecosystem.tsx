const badges = [
  'Mastercard Verifiable Intent',
  'x402 Coinbase',
  'FIDO Alliance',
  'W3C',
  'IETF'
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="scroll-mt-20">
      <h2 className="section-title">Ecosystem</h2>
      <p className="section-subtitle">
        AAR aligns with existing standards and emerging network primitives for portable machine trust.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-100 shadow-[0_0_20px_rgba(0,240,255,0.08)]"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
