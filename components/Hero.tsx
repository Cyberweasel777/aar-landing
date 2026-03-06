'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const installCommand = 'npm install @botindex/aar';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="pt-10 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="glass-card neon-border mx-auto max-w-4xl p-8 sm:p-12"
      >
        <p className="mb-5 inline-flex rounded-full border border-cyanAccent/40 bg-cyanAccent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-cyanAccent">
          Agent Action Receipt
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          <span className="gradient-text">Verifiable Agent Actions</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-gray-300 sm:text-xl">
          Cryptographically signed AI agent receipts make every autonomous action auditable,
          portable, and trusted across merchants, wallets, and protocols.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="https://github.com/botindex/aar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-cyanAccent/60 bg-cyanAccent/15 px-5 text-sm font-medium text-cyanAccent transition hover:bg-cyanAccent/25"
          >
            Read the Spec
          </Link>
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex h-11 items-center justify-center rounded-lg border border-magentaAccent/60 bg-magentaAccent/15 px-5 font-mono text-sm text-magentaAccent transition hover:bg-magentaAccent/25"
          >
            {copied ? 'Copied' : installCommand}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
