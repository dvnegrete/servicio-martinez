import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  const phoneNumber = "5217771419006"; // Format: country code (52) + phone number without spaces or symbols
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios en el taller.");
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
                <p>Ignacio Allende No. #, Col. El Estribo, Temixco</p>
              </div>
            </div>
            <div className="flex items-center">
              <a href="tel:7771419006"></a> <Phone className="w-6 h-6 mr-4" />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p>+52 (777) 141 9006</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-4" />
              <div>
                <h3 className="font-semibold">Horario</h3>
                <p>Lunes a Sábado: 8:30 AM - 6:00 PM</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236.02486664801245!2d-99.23686604450167!3d18.8249691591445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1741891923417!5m2!1ses-419!2smx" ></iframe>

            <button className='bg-slate-300 hover:bg-slate-400 text-gray-800 text-lg rounded-2xl w-48'>
              <a
                href='https://www.google.com/maps/dir/?api=1&destination=18.824944,-99.236884'
                className='flex items-center p-4 justify-evenly'
              >
                <img src="/src/assets/route.png" alt="Ruta" className='h-6 px-2' />
                <span>Mostrar Ruta</span>
              </a>
            </button>
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