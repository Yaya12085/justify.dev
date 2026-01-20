import { Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-muted-foreground pt-12 pb-6 mt-auto border-t">
      <div className="space-y-3">
        <p>Built for fun. Not responsible for consequences 😈</p>
        <Link href="https://github.com/yaya12085/justify.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="underline underline-offset-4">View on GitHub</span>
        </Link>
      </div>
    </footer>
  );
}
