export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">
          Dobrodošli u Blocksize d.o.o.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Vaš pouzdani partner u poslovanju već više od 10 godina
        </p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Naše usluge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Usluga 1</h3>
              <p className="text-gray-600">
                Opis vaše prve ključne usluge i kako ona pomaže klijentima.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Usluga 2</h3>
              <p className="text-gray-600">
                Opis vaše druge ključne usluge i kako ona pomaže klijentima.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Usluga 3</h3>
              <p className="text-gray-600">
                Opis vaše treće ključne usluge i kako ona pomaže klijentima.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Zašto odabrati nas?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="text-blue-600">✓</div>
            <div>
              <h3 className="font-semibold">Iskustvo</h3>
              <p className="text-gray-600">
                Više od 10 godina iskustva u industriji
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-blue-600">✓</div>
            <div>
              <h3 className="font-semibold">Kvaliteta</h3>
              <p className="text-gray-600">
                Vrhunska kvaliteta usluge i podrške
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-blue-600">✓</div>
            <div>
              <h3 className="font-semibold">Pouzdanost</h3>
              <p className="text-gray-600">
                Uvijek ispunjavamo dogovorene rokove
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-blue-600">✓</div>
            <div>
              <h3 className="font-semibold">Stručnost</h3>
              <p className="text-gray-600">Tim stručnjaka s bogatim znanjem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nova sekcija - Statistike */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Naši Uspjesi u Brojkama
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Zadovoljnih klijenata</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">Završenih projekata</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Stručnih zaposlenika</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <p className="text-gray-600">Godina iskustva</p>
          </div>
        </div>
      </section>

      {/* Nova sekcija - Projekti */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Izdvojeni Projekti</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">Projekt 1</h3>
              <p className="text-gray-600">
                Opis prvog projekta i njegovih ključnih postignuća. Ovaj projekt
                je pokazao našu stručnost u...
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">Projekt 2</h3>
              <p className="text-gray-600">
                Opis drugog projekta i njegovih ključnih postignuća. Ovaj
                projekt je demonstrirao našu sposobnost...
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">Projekt 3</h3>
              <p className="text-gray-600">
                Opis trećeg projekta i njegovih ključnih postignuća. Kroz ovaj
                projekt smo pokazali...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nova sekcija - Testimoniali */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Što Kažu Naši Klijenti</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-600 mb-4">
              "Izuzetno smo zadovoljni suradnjom. Tim je pokazao visoku razinu
              profesionalnosti i stručnosti u realizaciji našeg projekta."
            </div>
            <div className="font-semibold">Ana Horvat</div>
            <div className="text-gray-500 text-sm">
              Direktorica, Firma d.o.o.
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-600 mb-4">
              "Najbolja odluka koju smo donijeli za naše poslovanje. Rezultati
              su premašili naša očekivanja."
            </div>
            <div className="font-semibold">Marko Kovač</div>
            <div className="text-gray-500 text-sm">
              Vlasnik, InTech Solutions
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-600 mb-4">
              "Vrhunska usluga, odlična komunikacija i još bolji rezultati.
              Definitivno preporučujemo!"
            </div>
            <div className="font-semibold">Ivan Novak</div>
            <div className="text-gray-500 text-sm">CEO, Nova d.d.</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-600 mb-4">
              "Impresioniran sam brzinom i kvalitetom izvedbe. Sigurno ćemo
              nastaviti suradnju."
            </div>
            <div className="font-semibold">Petra Matić</div>
            <div className="text-gray-500 text-sm">
              Voditeljica projekata, PM Grupa
            </div>
          </div>
        </div>
      </section>

      {/* Nova sekcija - CTA */}
      <section className="mb-12 bg-blue-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Spremni ste za suradnju?</h2>
        <p className="text-xl mb-8">
          Kontaktirajte nas danas i započnimo rad na vašem projektu
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Kontaktirajte nas
        </a>
      </section>
    </div>
  );
}
