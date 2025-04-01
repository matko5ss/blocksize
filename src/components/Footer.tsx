import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <p>Vaša Firma d.o.o.</p>
            <p>Ulica i broj</p>
            <p>10000 Zagreb</p>
            <p>Tel: +385 12 345 6789</p>
            <p>Email: info@vasafirma.hr</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Radno vrijeme</h3>
            <p>Pon - Pet: 09:00 - 17:00</p>
            <p>Sub: 09:00 - 13:00</p>
            <p>Ned: Zatvoreno</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Pratite nas</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Vaša Firma d.o.o. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
