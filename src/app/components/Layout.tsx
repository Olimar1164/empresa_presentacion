// src/app/components/Layout.tsx
import TopBar from './TopBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <TopBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;