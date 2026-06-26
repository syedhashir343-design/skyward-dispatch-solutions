import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/carrier-setup", label: "Carrier Setup" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Skywards Solution" className="h-12 w-auto" width={48} height={48} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-brand"
              activeProps={{ className: "text-brand bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+16142090850"
            className="flex items-center gap-2 text-sm font-semibold text-brand"
          >
            <Phone className="h-4 w-4" /> (614) 209-0850
          </a>
          <Link
            to="/carrier-setup"
            className="bg-gradient-brand text-brand-foreground inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-soft transition-transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-brand bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/carrier-setup"
              onClick={() => setOpen(false)}
              className="bg-gradient-brand text-brand-foreground mt-2 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-soft"
            >
              Get Started
            </Link>
            <a
              href="tel:+16142090850"
              className="mt-1 flex items-center justify-center gap-2 rounded-full border border-border py-2 text-sm font-semibold text-brand"
            >
              <Phone className="h-4 w-4" /> (614) 209-0850
            </a>
          </div>
        </div>
      )}
    </header>
  );
}