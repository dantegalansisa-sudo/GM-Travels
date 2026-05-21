import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../components/RevealText';
import { staggerChildren, fadeInUp } from '../utils/easings';
import './TeamSection.css';

// Fotos del equipo de ventas. El nombre y la función se mostrarán
// como "Próximamente" hasta que la agencia los proporcione.
const team = [
  '/imagenes/vendedora.png',
  '/imagenes/vendedor.png',
  '/imagenes/vendedora1.png',
  '/imagenes/vendedor1.png',
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="team" ref={ref}>
      <div className="section-container">
        <div className="team__header">
          <span className="section-eyebrow">Nuestro Equipo</span>
          <RevealText tag="h2" className="section-title">
            Las Personas Detrás De Tu Viaje
          </RevealText>
          <p className="section-subtitle">
            Conoce a quienes hacen posible que cada experiencia sea inolvidable.
          </p>
        </div>

        <motion.div
          className="team__content"
          variants={staggerChildren(0.15)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* CEO / Dirección */}
          <motion.div className="team-card team-card--leadership" variants={fadeInUp}>
            <div className="team-card__image-wrap">
              <img
                src="/imagenes/logo.png"
                alt="CEO"
                className="team-card__image team-card__image--logo"
                loading="lazy"
              />
              <div className="team-card__image-accent" />
            </div>
            <div className="team-card__body">
              <div className="team-card__member">
                <span className="team-card__role">CEO</span>
                <h3 className="team-card__name">Próximamente</h3>
                <p className="team-card__bio">
                  Foto e información del CEO próximamente.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Equipo de trabajo */}
          <div className="team__grid team__grid--four">
            {team.map((photo, i) => (
              <motion.div className="team-card" key={i} variants={fadeInUp}>
                <div className="team-card__image-wrap">
                  <img
                    src={photo}
                    alt="Miembro del equipo"
                    className="team-card__image"
                    loading="lazy"
                  />
                  <div className="team-card__image-accent" />
                </div>
                <div className="team-card__body">
                  <span className="team-card__role">Próximamente</span>
                  <h3 className="team-card__name">Próximamente</h3>
                  <p className="team-card__bio">Nombre y función próximamente.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
