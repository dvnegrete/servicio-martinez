import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  const phoneNumber = "525551234567"; // Format: country code (52) + phone number without spaces or symbols
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section className="bg-gray-900 text-white py-20" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p>Av. Principal #123, Ciudad</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4" />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p>+52 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-4" />
              <div>
                <h3 className="font-semibold">Horario</h3>
                <p>Lunes a Sábado: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </a>
          </div>
          <div className="bg-white rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}