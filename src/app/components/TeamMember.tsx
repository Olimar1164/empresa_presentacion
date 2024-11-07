// src/app/components/TeamMember.tsx
'use client';

import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember = ({ name, role, imageUrl }: TeamMemberProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image 
          src={imageUrl} 
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
};

export default TeamMember;