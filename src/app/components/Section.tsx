// src/app/components/Section.tsx
'use client';

import styles from '../styles/Section.module.css';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={`${styles.section}`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="text-lg">{children}</div>
    </section>
  );
};

export default Section;