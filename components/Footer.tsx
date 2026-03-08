export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-8">
      <div className="flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">AAR Protocol</p>
        <div className="flex items-center gap-4">
          <p>Built for the agent economy</p>
          <span className="text-gray-600">·</span>
          <a href="https://botindex.dev/#pricing" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition hover:text-gray-300">Hosted signing &amp; anchoring →</a>
        </div>
      </div>
    </footer>
  );
}
