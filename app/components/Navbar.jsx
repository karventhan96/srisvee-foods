"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="SrisVee Foods" onClick={closeMenu}>
        <Image
          src="/srisvee-logo.png"
          alt="SrisVee Foods"
          width={170}
          height={72}
          className="siteLogo"
          priority
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="navDesktop" aria-label="Main Navigation">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#products">Our Products</a>
        <a href="#benefits">Benefits</a>
        <a href="#process">How It's Made</a>
        <a href="#recipes">Recipes</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Header Actions */}
      <div className="headerActions">
        <a className="cart" href="#products" aria-label="Shop our products">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobileMenuBtn"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div className="mobileBackdrop" onClick={closeMenu} aria-hidden="true" />
          <nav className="mobileDrawer open" aria-label="Mobile Navigation">
            <div className="mobileNavLinks">
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About Us</a>
              <a href="#products" onClick={closeMenu}>Our Products</a>
              <a href="#benefits" onClick={closeMenu}>Benefits</a>
              <a href="#process" onClick={closeMenu}>How It's Made</a>
              <a href="#recipes" onClick={closeMenu}>Recipes</a>
              <a href="#faq" onClick={closeMenu}>FAQ</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
            <div className="mobileNavCta">
              <a className="button primary full" href="#contact" onClick={closeMenu}>
                Order Now →
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

