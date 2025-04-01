import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Blocksize d.o.o.
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-200">
              Početna
            </Link>
            <Link href="/o-nama" className="hover:text-blue-200">
              O nama
            </Link>
            <Link href="/kontakt" className="hover:text-blue-200">
              Kontakt
            </Link>
            <a href="tel:+385123456789" className="hover:text-blue-200">
              ☎️ +385 99 44 111 44
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
