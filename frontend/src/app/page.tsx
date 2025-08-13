'use client';
import { useState } from 'react';

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

export default function Home() {
  const [status, setStatus] = useState<string>('Not checked');

  const ping = async () => {
    try {
      const r = await fetch(`${BACKEND}/health`);
      const j = await r.json();
      setStatus(JSON.stringify(j));
    } catch (e:unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setStatus(`Error: ${msg}`)
    }
  };

  return (
    <main className="mx-auto max-w-xl p-8 space-y-4">
      <h1 className="text-2xl font-bold">FastStack • Day 1</h1>
      <p className="text-sm text-gray-600">
        Frontend ↔ Backend health check
      </p>
      <button
        onClick={ping}
        className="rounded bg-black text-white px-4 py-2"
      >
        Ping backend
      </button>
      <pre className="border rounded p-3 whitespace-pre-wrap">
        {status}
      </pre>
    </main>
  );
}
