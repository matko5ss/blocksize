export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">O nama</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Naša priča</h2>
          <p className="text-gray-600 mb-4">
            Osnovani 2014. godine, izgradili smo reputaciju pouzdanog partnera koji svojim
            klijentima pruža vrhunske usluge. Naš tim stručnjaka posvećen je izvrsnosti
            i kontinuiranom unapređenju kvalitete usluga.
          </p>
          <p className="text-gray-600">
            Kroz godine rada, uspješno smo realizirali brojne projekte i izgradili
            dugoročne odnose s našim klijentima temeljene na povjerenju i profesionalnosti.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Naše vrijednosti</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">•</span>
              <div>
                <h3 className="font-semibold">Integritet</h3>
                <p className="text-gray-600">Poslujemo transparentno i etično</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">•</span>
              <div>
                <h3 className="font-semibold">Inovativnost</h3>
                <p className="text-gray-600">Kontinuirano unapređujemo naše usluge</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">•</span>
              <div>
                <h3 className="font-semibold">Izvrsnost</h3>
                <p className="text-gray-600">Težimo najvišim standardima kvalitete</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Naš tim</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Ivan Horvat</h3>
            <p className="text-gray-600">Direktor</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Ana Kovač</h3>
            <p className="text-gray-600">Voditeljica prodaje</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Marko Novak</h3>
            <p className="text-gray-600">Tehnički direktor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
