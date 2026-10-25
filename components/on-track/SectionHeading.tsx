import { motion } from 'framer-motion';
import { EASE_OUT } from '@/constants/animations';
import styles from '@/app/on-track/on-track.module.css';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className={styles.sectionHeading}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
    >
      <div>
        <p className={styles.eyebrow}><span>{index}</span>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </motion.div>
  );
}
