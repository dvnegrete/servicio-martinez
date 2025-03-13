import React from 'react';
import { Settings, Battery, File as Oil, Cake as Brake } from 'lucide-react';

export function Services() {
  const services = [
    { icon: <Settings className="w-10 h-10" />, title: "Mantenimiento General" },
    { icon: <Battery className="w-10 h-10" />, title: "Sistema Eléctrico" },
    { icon: <Oil className="w-10 h-10" />, title: "Cambio de Aceite" },
    { icon: <Brake className="w-10 h-10" />, title: "Sistema de Frenos" },
  ];

  return (
    <section className="py-20 bg-gray-50" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-red-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}