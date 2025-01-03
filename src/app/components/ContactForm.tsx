"use client";

import { useState, useEffect } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [csrfToken, setCsrfToken] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/csrf/`, {
        credentials: 'include',
      });
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    };

    fetchCsrfToken();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Por favor, completa el CAPTCHA');
      return;
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({ ...formData, captchaToken }),
      });
      if (response.ok) {
        alert('Mensaje enviado con éxito');
        setFormData({ nombre: '', email: '', mensaje: '' });
        setCaptchaToken('');
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch {
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 focus:outline-none h-32"
        />
      </div>
      <div className="mb-4 w-full">
        <div className="w-full flex justify-center">
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ''}
            onVerify={setCaptchaToken}
          />
        </div>
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