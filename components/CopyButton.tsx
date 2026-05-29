'use client';

import { useState } from 'react';

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" className="fill-current">
    <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
  </svg>
);

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex items-center">
      {copied && (
        <span className="absolute right-6 font-body text-[10px] tracking-wide text-white bg-[#003d47] px-2 py-1 whitespace-nowrap pointer-events-none">
          Copied!
          <span className="absolute top-1/2 -right-[5px] -translate-y-1/2 border-4 border-transparent border-l-[#003d47]" />
        </span>
      )}
      <button
        title="Copy to clipboard"
        onClick={handleCopy}
        className={`transition-colors cursor-pointer ${copied ? 'text-[#00b1ca]' : 'text-gray-300 hover:text-[#00b1ca]'}`}
      >
        <CopyIcon />
      </button>
    </div>
  );
}
