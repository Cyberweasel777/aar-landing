import Link from 'next/link';

export function CTA() {
  return (
    <section className="scroll-mt-20">
      <div className="glass-card neon-border px-6 py-10 text-center sm:px-10">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ship Trust Into Every Agent Transaction</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 sm:text-base">
          Adopt AAR to standardize verification, reduce integration risk, and unlock interoperable agent commerce.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="https://github.com/botindex/aar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-cyanAccent/60 bg-cyanAccent/15 px-5 text-sm font-medium text-cyanAccent transition hover:bg-cyanAccent/25"
          >
            Read the Spec
          </Link>
          <Link
            href="#integration"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-magentaAccent/60 bg-magentaAccent/15 px-5 text-sm font-medium text-magentaAccent transition hover:bg-magentaAccent/25"
          >
            Explore Integration
          </Link>
        </div>
      </div>
    </section>
  );
}
