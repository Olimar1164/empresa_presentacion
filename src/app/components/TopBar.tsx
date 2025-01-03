// src/app/components/TopBar.tsx
const TopBar = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center">
        <span>Email: contacto@empresaxyz.com</span>
        <span className="ml-0 sm:ml-4">Teléfono: +123 456 7890</span>
      </div>
      <div className="flex mt-2 sm:mt-0">
        <a href="https://facebook.com" className="ml-4">Facebook</a>
        <a href="https://twitter.com" className="ml-4">Twitter</a>
        <a href="https://linkedin.com" className="ml-4">LinkedIn</a>
      </div>
    </div>
  );
};

export default TopBar;