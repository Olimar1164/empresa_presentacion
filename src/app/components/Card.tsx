// src/app/components/Card.tsx
'use client';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
      {icon && <div className="text-blue-500 text-3xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;