import React from 'react';
import { Github, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0b0f] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 text-white/70">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-semibold">Alumni Platform</h4>
            <p className="text-sm mt-1">Clean, flat, and modern dark UI with gradients.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10"
            >
              <Globe className="h-4 w-4" /> Docs
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
        <p className="text-xs mt-6">© {new Date().getFullYear()} Alumni Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}
