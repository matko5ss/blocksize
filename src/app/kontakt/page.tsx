'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ovdje dodajte logiku za slanje forme
    console.log('Form submitted:', formData);
    alert('Hvala na poruci! Kontaktirat ćemo vas uskoro.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Kontaktirajte nas</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Naši kontakt podaci</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Adresa</h3>
                <p className="text-gray-600">Ulica i broj</p>
                <p className="text-gray-600">10000 Zagreb</p>
              </div>
              <div>
                <h3 className="font-semibold">Telefon</h3>
                <p className="text-gray-600">+385 12 345 6789</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@vasafirma.hr</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Radno vrijeme</h3>
              <p className="text-gray-600">Pon - Pet: 09:00 - 17:00</p>
              <p className="text-gray-600">Sub: 09:00 - 13:00</p>
              <p className="text-gray-600">Ned: Zatvoreno</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Pošaljite nam poruku</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Poruka
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Pošalji poruku
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
