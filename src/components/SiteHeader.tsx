"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const NAV = [
  { href: "/movement", label: "Movement" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/mind", label: "Mind" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-40">
      <div className="bg-sky">
        <div className="flex items-center justify-between gap-6 py-5 pl-5 pr-5 sm:pl-6 sm:pr-8">
          <Wordmark
            variant="blue"
            width="clamp(150px, 18vw, 215px)"
            className="shrink-0"
          />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`inline-flex h-10 items-center rounded-full px-4 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-navy transition-colors duration-150 hover:bg-butter ${
                      isActive(item.href) ? "bg-butter" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 items-center rounded-full border border-navy/20 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="border-t border-navy/10 px-5 pb-5 md:hidden"
          >
            <ul className="flex flex-col gap-1 pt-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex h-11 items-center rounded-full px-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-navy ${
                      isActive(item.href) ? "bg-butter" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>

    </header>
  );
}
