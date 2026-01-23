import { SectionAboutProps } from '@/components/SectionAbout/SectionAbout.props';
import styles from './SectionAbout.module.css';
import { Htag } from '@/components';
import { P } from '@/components';
import Image from 'next/image';

export const SectionAbout = ({
  title,
  image,
  imageAlt,
  description,
}: SectionAboutProps) => {
  return (
    <div className={styles.sectionUs}>
      <Htag tag="h2" className={styles.hsect}>
        {title}
      </Htag>
      <Image src={image} alt={imageAlt} className={styles.imageSection} />
      <P size="m" className={styles.textus}>
        {description}
      </P>
    </div>
  );
};
