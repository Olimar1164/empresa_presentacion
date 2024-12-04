import '../app/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Empresa XYZ',
  description: 'Página de presentación de Empresa XYZ',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/empresa_presentacion/favicon.ico" />
      </head>
      <body className="bg-gray-900">
        {children}
      </body>
    </html>
  );
}