'use client';

import { useMemo, useState } from 'react';

type Tab = 'Express' | 'FastAPI' | 'Verify';

const receiptJson = `{
  "aar_version": "1.0.0",
  "receipt_id": "aar_01HV9K0CG7B6R8KQ2X4N",
  "timestamp": "2026-03-06T15:20:11.902Z",
  "actor": {
    "agent_id": "agent_risk_router_v2",
    "did": "did:key:z6Mkh..."
  },
  "action": {
    "type": "payment.authorize",
    "target": "merchant_api",
    "amount": "125.00",
    "currency": "USD"
  },
  "result": {
    "status": "approved",
    "latency_ms": 183
  },
  "proof": {
    "alg": "EdDSA",
    "kid": "key-2026-03",
    "signature": "z4Yf..."
  }
}`;

const snippets: Record<Tab, string> = {
  Express: `import express from "express";
import { createReceipt } from "@botindex/aar";

const app = express();
app.use(express.json());

app.post("/pay", async (req, res) => {
  const result = await chargeCard(req.body);

  const receipt = await createReceipt({
    actor: { agent_id: "agent_risk_router_v2" },
    action: { type: "payment.authorize", target: "merchant_api" },
    result
  });

  res.json({ result, receipt });
});`,
  FastAPI: `from fastapi import FastAPI
from botindex_aar import create_receipt

app = FastAPI()

@app.post("/trade")
async def place_trade(payload: dict):
    result = await execute_trade(payload)
    receipt = create_receipt(
        actor={"agent_id": "agent_exec_v1"},
        action={"type": "order.place", "target": "exchange"},
        result=result,
    )
    return {"result": result, "receipt": receipt}`,
  Verify: `import { verifyReceipt } from "@botindex/aar";

const verified = await verifyReceipt(receipt, {
  expectedActor: "agent_risk_router_v2",
  expectedAction: "payment.authorize"
});

if (!verified.ok) {
  throw new Error("Untrusted receipt");
}

console.log("Receipt verified", verified.payload.receipt_id);`
};

function syntaxHighlightJSON(json: string) {
  return json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let color = 'text-cyan-200';
        if (/^".*":$/.test(match)) color = 'text-pink-300';
        else if (/^"/.test(match)) color = 'text-emerald-300';
        else if (/true|false/.test(match)) color = 'text-fuchsia-300';
        else if (/null/.test(match)) color = 'text-gray-400';
        return `<span class="${color}">${match}</span>`;
      }
    );
}

export function CodeSnippets() {
  const [tab, setTab] = useState<Tab>('Express');

  const highlightedJson = useMemo(() => syntaxHighlightJSON(receiptJson), []);

  return (
    <section id="integration" className="scroll-mt-20">
      <h2 className="section-title">Integration</h2>
      <p className="section-subtitle">
        Start with an SDK call in your stack, then verify receipts before downstream execution.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="glass-card overflow-hidden">
          <div className="border-b border-white/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-cyanAccent">
            Real Receipt JSON
          </div>
          <pre
            className="max-h-[28rem] overflow-auto p-4 font-mono text-xs leading-relaxed sm:text-sm"
            dangerouslySetInnerHTML={{ __html: highlightedJson }}
          />
        </article>

        <article className="glass-card overflow-hidden">
          <div className="border-b border-white/10 p-2">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(snippets) as Tab[]).map((name) => (
                <button
                  type="button"
                  key={name}
                  onClick={() => setTab(name)}
                  className={`rounded-md px-3 py-1.5 font-mono text-xs transition ${
                    tab === name
                      ? 'bg-cyanAccent/20 text-cyanAccent'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          <pre className="max-h-[28rem] overflow-auto p-4 font-mono text-xs leading-relaxed text-gray-100 sm:text-sm">
            <code>{snippets[tab]}</code>
          </pre>
        </article>
      </div>
    </section>
  );
}
