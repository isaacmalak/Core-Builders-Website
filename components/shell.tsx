"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { LanguageProvider } from "@/lib/language-context";
import { ShellContent } from "@/components/shell-content";

interface ShellProps {
  children: React.ReactNode;
}

const FADE_DURATION = 0.4;

export function Shell({ children }: ShellProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Reveal the new page by fading the overlay back out once the route has changed
    isNavigatingRef.current = false;
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: FADE_DURATION,
        ease: "power2.inOut",
      });
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement)?.closest("a");
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin || isNavigatingRef.current)
        return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      )
        return;

      // Stop the click here, in the capture phase, before it ever reaches
      // next/link's own onClick — otherwise Link.preventDefault()+router.push()
      // fires first and navigates instantly, skipping our animation entirely.
      event.preventDefault();
      event.stopPropagation();
      isNavigatingRef.current = true;

      // Fade in to black first, then swap routes once fully covered
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: FADE_DURATION,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(url.pathname + url.search + url.hash);
        },
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return (
    <LanguageProvider>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-[100] pointer-events-none opacity-0"
      />
      <ShellContent>{children}</ShellContent>
    </LanguageProvider>
  );
}
