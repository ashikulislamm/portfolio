import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 text-neutral-100 font-mono">
      <div className="max-w-md w-full rounded border border-border-subtle bg-secondary-bg p-6 text-left">
        <div className="flex items-center gap-2 border-b border-[#202020] pb-3 mb-4 text-neutral-400 text-xs">
          <Terminal size={14} className="text-accent" />
          <span>404 - page_not_found</span>
        </div>
        <h1 className="text-4xl font-bold text-accent mb-2">404</h1>
        <p className="text-sm text-neutral-300 mb-4">
          Error: Requested route does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Button variant="primary" href="/" isMono>
            return_home()
          </Button>
        </div>
      </div>
    </div>
  );
}
