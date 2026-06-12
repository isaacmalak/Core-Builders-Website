"use client";

import { LanguageProvider } from "@/lib/language-context";
import { ShellContent } from "@/components/shell-content";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <LanguageProvider>
      <ShellContent>{children}</ShellContent>
    </LanguageProvider>
  );
}
