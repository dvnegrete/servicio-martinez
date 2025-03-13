import { Wrench, CheckCircle, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Experiencia",
      description: "Más de 20 años reparando vehículos de todas las marcas"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Garantía",
      description: "Garantizamos todos nuestros trabajos y usamos repuestos originales"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Puntualidad",
      description: "Respetamos los tiempos de entrega acordados"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-red-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}