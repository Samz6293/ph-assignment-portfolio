"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "cn";

interface CopyButtonProps {
  text: string;
  className?: string;
}

/** Copies `text` to the clipboard; swaps to a check mark briefly on success. */
export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable (permissions / insecure context) — do nothing;
      // the email stays selectable as plain text.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : `Copy ${text}`}
      className={cn(
        "inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-highlight hover:text-highlight focus-visible:border-highlight focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
        copied && "border-highlight text-highlight",
        className
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}
