// src/app/components/Header.tsx
'use client';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container-section flex justify-between items-center">
        <h1 className="text-2xl font-bold">Empresa XYZ</h1>
        <nav className="space-x-4">
          <a href="#servicios" className="hover:text-gray-400">Servicios</a>
          <a href="#equipo" className="hover:text-gray-400">Equipo</a>
          <a href="#contacto" className="hover:text-gray-400">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;