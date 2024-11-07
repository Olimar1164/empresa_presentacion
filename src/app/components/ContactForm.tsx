// src/app/components/ContactForm.tsx
'use client';

const ContactForm = () => {
  return (
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Mensaje"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none h-32"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
  );
};

export default ContactForm;