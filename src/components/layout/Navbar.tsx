"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about", description: "Learn who we are and our mission" },
      { label: "Our Team", href: "/about/team", description: "Meet the people behind Zedjah" },
      { label: "Our Impact", href: "/about/impact", description: "See the difference we make" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Farm Consultancy", href: "/services", description: "Expert agricultural guidance" },
      { label: "Soil & Nutrition", href: "/services/soil-nutrition", description: "Soil health and plant nutrition" },
      { label: "Market Linkage", href: "/services/market-linkage", description: "Connect to buyers and markets" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const canHover = useRef(true);

  /* Track scroll for sticky bg */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /* Detect hover capability */
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    canHover.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => { canHover.current = e.matches; };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (!canHover.current) return;
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    if (!canHover.current) return;
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="main-navigation"
    >
      <div className={styles.inner}>
        {/* Logo — far left */}
        <Link href="/" className={styles.logo} id="nav-logo">
          <Image
            src="/images/zedjahLogo.svg"
            alt="Zedjah logo"
            width={40}
            height={40}
            className={styles.logoIcon}
            priority
          />

        </Link>

        {/* Nav links — centered */}
        <ul className={`${styles.navLinks} ${mobileOpen ? styles.navLinksOpen : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
              onMouseLeave={() => item.dropdown && handleDropdownLeave()}
            >
              {item.dropdown ? (
                <>
                  <button
                    className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    id={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                    <svg
                      className={`${styles.chevron} ${activeDropdown === item.label ? styles.chevronOpen : ""}`}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`${styles.dropdown} ${activeDropdown === item.label ? styles.dropdownOpen : ""}`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.dropdownItem}
                        id={`nav-dropdown-${sub.label.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        <span className={styles.dropdownLabel}>{sub.label}</span>
                        {sub.description && (
                          <span className={styles.dropdownDesc}>{sub.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
                  id={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          {/* Mobile CTA — visible only in drawer */}
          <li className={styles.mobileCta}>
            <Link
              href="/contact"
              className={styles.mobileCtaLink}
              onClick={() => setMobileOpen(false)}
              id="nav-mobile-cta"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* CTA button — far right */}
        <Link href="/contact" className={styles.ctaBtn} id="nav-cta">
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)} />
      )}
    </nav>
  );
}
