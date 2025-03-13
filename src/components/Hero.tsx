import { Phone } from 'lucide-react';

export function Hero() {
  return (
    <div 
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Servicio Automotríz Martínez</h1>
            <h3>El Estribo, Temixco Morelos</h3>
            <p className="text-xl mb-8">Su taller de confianza con más de 20 años de experiencia en reparación y mantenimiento automotriz</p>
            <a href="#contacto" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}