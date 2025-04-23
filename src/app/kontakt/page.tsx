"use client";

import { useState, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus(null);

    try {
      // Korištenje Fetch API-ja za slanje podataka na PHP skriptu
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("honeypot", ""); // Anti-spam polje

      // Prilagodimo URL za lokalno testiranje vs. produkciju
      // Na produkciji, PHP skripta je u root direktoriju
      const baseUrl =
        window.location.hostname === "localhost" ? "" : window.location.origin;

      const response = await fetch(`${baseUrl}/contact-form.php`, {
        method: "POST",
        body: formDataToSend,
      });

      // U slučaju da server ne vrati JSON (npr. PHP greška)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let result;
      try {
        result = await response.json();
      } catch (e) {
        console.error("Greška parsiranja JSON-a:", e);
        throw new Error(
          "Neočekivani odgovor od servera. Provjerite ima li PHP grešaka."
        );
      }

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          result.message ||
            "Hvala na poruci! Kontaktirat ćemo vas u najkraćem mogućem roku."
        );
        setFormData({ name: "", email: "", message: "" });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message ||
            "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno."
        );
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno ili nas kontaktirajte direktno putem telefona."
      );
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-2xl font-semibold mb-4">
              Pošaljite nam poruku
            </h2>
            {submitStatus && (
              <div
                className={`mb-4 p-3 rounded-md ${
                  submitStatus === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Skriveno anti-spam polje */}
              <input
                type="text"
                name="honeypot"
                className="hidden"
                tabIndex={-1}
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                } text-white py-2 px-4 rounded-md transition-colors flex justify-center items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Slanje...
                  </>
                ) : (
                  "Pošalji poruku"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
