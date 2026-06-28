"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { NavServicesMenuDesktop, NavServicesMenuMobile } from "./NavServicesMenu";

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 60);
 onScroll();
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 useEffect(() => {
 setOpen(false);
 }, [pathname]);

 useEffect(() => {
 document.body.style.overflow = open ? "hidden" : "";
 return () => {
 document.body.style.overflow = "";
 };
 }, [open]);

 const isActive = (href: string) =>
 href === "/" ? pathname === "/" : pathname.startsWith(href);

 const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

 return (
 <>
 <header
 className={cn(
 "fixed inset-x-0 top-0 z-50 bg-[#FBF6EF] transition-[border-color] duration-300 ease-hover",
 scrolled ? "border-b border-line" : "border-b border-transparent"
 )}
 >
 <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20">
 <Logo />

 <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
 {nav.map((item) => {
 if (item.href === "/services") {
 return <NavServicesMenuDesktop key={item.href} active={servicesActive} />;
 }

 const active = isActive(item.href);
 return (
 <Link
 key={item.href}
 href={item.href}
 className={cn(
 "relative inline-flex h-10 items-center rounded-lg px-3 text-[14px] font-medium text-ink/80 transition-colors duration-200 hover:text-ink",
 active && "text-ink"
 )}
 >
 <span>{item.label}</span>
 <span
 aria-hidden
 className={cn(
 "absolute inset-x-3 -bottom-[3px] h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300",
 active && "scale-x-100"
 )}
 />
 </Link>
 );
 })}
 </nav>

 <div className="hidden items-center gap-3 lg:flex">
 <Button href="/contact" size="sm" variant="primary" arrow>
 Get in touch
 </Button>
 </div>

 <button
 type="button"
 aria-label={open ? "Close menu" : "Open menu"}
 aria-expanded={open}
 onClick={() => setOpen((v) => !v)}
 className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg-card text-ink lg:hidden"
 >
 {open ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
 </button>
 </div>
 </header>

 <div
 className={cn(
 "fixed inset-0 z-40 bg-[#FBF6EF] transition-opacity duration-300 lg:hidden",
 open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
 )}
 aria-hidden={!open}
 >
 <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24">
 <nav className="flex flex-col gap-1" aria-label="Mobile">
 {nav.map((item, index) => {
 if (item.href === "/services") {
 return (
 <NavServicesMenuMobile
 key={item.href}
 active={servicesActive}
 onNavigate={() => setOpen(false)}
 />
 );
 }

 const active = isActive(item.href);
 return (
 <Link
 key={item.href}
 href={item.href}
 className={cn(
 "flex items-center justify-between border-b border-line py-5 text-[22px] font-serif transition-colors",
 active ? "text-accent" : "text-ink"
 )}
 >
 <span>{item.label}</span>
 <span className="font-mono text-[11px] tracking-eyebrow text-ink-muted">
 0{index + 1}
 </span>
 </Link>
 );
 })}
 </nav>
 <div className="mt-auto pt-10">
 <Button href="/contact" size="lg" className="w-full" arrow>
 Get in touch
 </Button>
 <p className="mt-4 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 Built in India · Deployed globally
 </p>
 </div>
 </div>
 </div>
 </>
 );
}
