"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-blue-600 text-white shadow-md z-10">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold">
            Blocksize d.o.o.
          </Link>

          {/* Desktop navigacija - vidljiva samo na md i većim ekranima */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/" className="text-sm lg:text-base hover:text-blue-200">
              Početna
            </Link>
            <Link href="/o-nama" className="text-sm lg:text-base hover:text-blue-200">
              O nama
            </Link>
            <Link href="/kontakt" className="text-sm lg:text-base hover:text-blue-200">
              Kontakt
            </Link>
            <a href="tel:+385981234567" className="text-sm lg:text-base hover:text-blue-200 ml-2">
              +385 98 123 4567
            </a>
          </div>

          {/* Hamburger ikona - vidljiva samo na manjim ekranima */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center p-2"
            aria-label="Otvori izbornik"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobilni izbornik - vidljiv samo kada je otvoren i na manjim ekranima */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-base hover:text-blue-200 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Početna
              </Link>
              <Link 
                href="/o-nama" 
                className="text-base hover:text-blue-200 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                O nama
              </Link>
              <Link 
                href="/kontakt" 
                className="text-base hover:text-blue-200 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <a 
                href="tel:+385981234567" 
                className="text-base hover:text-blue-200 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                +385 98 123 4567
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
