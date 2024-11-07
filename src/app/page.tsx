import Head from 'next/head';
import Layout from '../app/components/Layout';
import Hero from '../app/components/Hero';
import Section from '../app/components/Section';
import ServiceCard from '../app/components/ServiceCard';
import Stats from '../app/components/Stats';
import TeamMember from '../app/components/TeamMember';
import ContactForm from '../app/components/ContactForm';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Empresa XYZ - Soluciones Innovadoras</title>
        <meta name="description" content="Ofrecemos servicios de desarrollo de software, consultoría y soporte técnico" />
      </Head>

      <Hero />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="servicios" className="py-12">
          <Section title="Nuestros Servicios">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Desarrollo Web"
                description="Creamos sitios web modernos y responsivos"
                icon="💻"
              />
              <ServiceCard
                title="Consultoría IT"
                description="Asesoramiento experto en tecnología"
                icon="📊"
              />
              <ServiceCard
                title="Soporte 24/7"
                description="Asistencia técnica continua"
                icon="🔧"
              />
            </div>
          </Section>
        </div>

        <div className="py-12">
          <Section title="Nuestro Impacto">
            <Stats />
          </Section>
        </div>
        <div id="equipo" className="py-12">
          <Section title="Nuestro Equipo">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMember
                name="Ana García"
                role="CEO"
                imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              />
              <TeamMember
                name="Carlos Rodríguez"
                role="CTO"
                imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              />
              <TeamMember
                name="Laura Martínez"
                role="Lead Developer"
                imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              />
            </div>
          </Section>
        </div>

        <div id="contacto" className="py-12">
          <Section title="Contáctanos">
            <ContactForm />
          </Section>
        </div>

        <div className="py-12">
          <Section title="Ubicación">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6167468641087!2d-3.703544684610799!3d40.416729979364385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d6da3df33%3A0x6a8347d40e0b9c3e!2sPuerta%20del%20Sol%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Section>
        </div>
      </main>
    </Layout>
  );
}