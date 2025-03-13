import React from 'react';
import { Car } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Car className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Servicio Martínez</span>
        </div>
        <p className="text-gray-400">© {new Date().getFullYear()} Servicio Martínez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}