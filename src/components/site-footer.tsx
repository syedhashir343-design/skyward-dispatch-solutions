import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-3 w-fit">
            <img src={logo} alt="Skywards Solution" className="h-14 w-auto" width={56} height={56} />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Premium truck dispatch services for owner-operators and carriers across the United States.
            Headquartered in Toledo, Ohio.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578192783412", label: "Facebook" },
              { Icon: Instagram, href: "https://www.instagram.com/skywardssolution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/skywards-solution/", label: "LinkedIn" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-brand-light hover:text-brand-foreground hover:border-transparent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/locations" className="hover:text-white">Locations</Link></li>
            <li><Link to="/carrier-setup" className="hover:text-white">Carrier Setup</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/dry-van-dispatch" className="hover:text-white">Dry Van Dispatch</Link></li>
            <li><Link to="/reefer-dispatch" className="hover:text-white">Reefer Dispatch</Link></li>
            <li><Link to="/flatbed-dispatch" className="hover:text-white">Flatbed Dispatch</Link></li>
            <li><Link to="/step-deck-dispatch" className="hover:text-white">Step Deck Dispatch</Link></li>
            <li><Link to="/power-only-dispatch" className="hover:text-white">Power Only Dispatch</Link></li>
            <li><Link to="/hotshot-dispatch" className="hover:text-white">Hotshot Dispatch</Link></li>
            <li><Link to="/box-truck-dispatch" className="hover:text-white">Box Truck Dispatch</Link></li>
            <li><Link to="/owner-operator-dispatch" className="hover:text-white">Owner Operator Dispatch</Link></li>
            <li><Link to="/small-fleet-dispatch" className="hover:text-white">Small Fleet Dispatch</Link></li>
            <li><Link to="/dedicated-dispatcher" className="hover:text-white">Dedicated Dispatcher</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>317 Locust St, Toledo, OH 43604</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <a href="tel:+16142090850" className="hover:text-white">(614) 209-0850</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>sam@skywardssolution.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Skywards Solution. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}