import { Htag } from '@/components';
import { P } from '@/components';
import { SectionAbout } from '@/components/SectionAbout/SectionAbout';
import styles from '@/components/AboutUs/AboutUs.module.css';
import Beads from '@/components/SectionAbout/beads.png';
import Hands from '@/components/SectionAbout/hands.png';

export const AboutUs = () => {
  return (
    <>
      <div className={styles.about}>
        <Htag tag="h1" className={styles.aboutTitle}>
          О нас
        </Htag>
        <Htag tag="h3" className={styles.aboutSubtitle}>
          Мы делаем шикарные украшения для вас
        </Htag>
        <P size="m" className={styles.aboutText}>
          Duis rutrum dictum libero quis rutrum. Etiam sedneque aliquam,
          sollicitudin ante a, gravida arcu.Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magnaet,
          placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus,
          ac sodales lectus placerat quis.
        </P>
        <SectionAbout
          title="Тренды в украшениях"
          image={Beads}
          imageAlt="Бусины"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis."
        />
        <SectionAbout
          title="Сделано с любовью"
          image={Hands}
          imageAlt="Руки"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu."
        />
      </div>
    </>
  );
};
