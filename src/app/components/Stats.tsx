// src/app/components/Stats.tsx
'use client';

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-gray-800 rounded-lg transform hover:scale-105 transition-all duration-300">
          <h3 className="text-4xl font-bold text-blue-500">100+</h3>
          <p className="mt-2">Clientes Satisfechos</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg transform hover:scale-105 transition-all duration-300">
          <h3 className="text-4xl font-bold text-blue-500">50+</h3>
          <p className="mt-2">Proyectos Completados</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg transform hover:scale-105 transition-all duration-300">
          <h3 className="text-4xl font-bold text-blue-500">24/7</h3>
          <p className="mt-2">Soporte Técnico</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;