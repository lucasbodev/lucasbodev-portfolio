import React from 'react';
import bentoStyles from '@/styles/ui/bento.module.css';
import styles from '@/app/[locale]/home.module.css';
import Bulleted from '@/components/bulleted/bulleted.component';
import { IconSizes } from '@/components/icon/icon.component';
import Heading, { HeadingTypes } from '@/components/heading/heading.component';
import Image from 'next/image';
import Marquee, { MarqueeDirection } from '@/components/marquee/marquee.component';
import ProjectCard from '@/components/project-card/project-card.component';
import TechLink from '@/components/tech-link/tech-link.component';
import Testimonial from '@/components/testimonial/testimonial.component';
import ContactSection from '@/components/contact-section/contact-section.component';
import RevealMotion from '@/components/reveal-motion/reveal-motion';
import { From, getRevealVariants } from '@/components/reveal-motion/variants';
import { useTranslations } from 'next-intl';

interface Collaboration {
  logo: string,
  name: string
}

interface ProjectCard {
  id?: string;
  img: string,
  name: string,
  description: string
}

const Home = () => {

  const t = useTranslations('Home');

  const richTranslation = (name: string) => {
    return t.rich(name, {
      orange: (chunks) => <span className={styles.orange}>{chunks}</span>,
      br: () => <br />
    });
  }

  return (
    <>
      <RevealMotion variants={getRevealVariants(From.LEFT)} className={`${bentoStyles.bentoCell} ${styles.hero}`}>
        <Bulleted startIcon='/icons/calendar.svg' iconSize={IconSizes.LARGER}>
          <span className={styles.disponibility}>{t('hireMe')}</span>
        </Bulleted>
        <div className={`${styles.heroContent}`}>
          <Heading type={HeadingTypes.H1} style={{ lineHeight: '125%' }}>
            {richTranslation('mainTitle')}
          </Heading>
          <p>{t('mainSubtitle')}</p>
        </div>
        <Bulleted startIcon='/icons/location.svg' iconSize={IconSizes.LARGER}>
          <span className={styles.disponibility}>{t('location')}</span>
        </Bulleted>
      </RevealMotion>

      <div className={`${styles.heroSide}`}>
        <RevealMotion
          variants={getRevealVariants(From.TOP, 0.1)}
          mobileVariants={getRevealVariants(From.BOTTOM, 0.1)}
          className={`${bentoStyles.bentoCell} ${styles.degree}`}
        >
          <div className={`${styles.cellHead}`}>
            <Heading type={HeadingTypes.H4} startIcon='/icons/degree.svg'>
              {richTranslation('formationTitle')}
            </Heading>
            <p>{t('formationSubtitle')}</p>
          </div>
          <Image
            width={500}
            height={500}
            src={'/images/degree-avatar.png'}
            alt='School image'
            className={styles.degreeAvatar}
          />
        </RevealMotion>
        <RevealMotion variants={getRevealVariants(From.RIGHT, 0.15)} className={`${bentoStyles.bentoCell} ${styles.collaborations}`}>
          <div className={styles.collabsHead}>
            <Heading type={HeadingTypes.H4} startIcon='/icons/collab.svg'>
              {richTranslation('collabTitle')}
            </Heading>
          </div>
          <Marquee gap={32} direction={MarqueeDirection.LEFT}>
            {
              ([
                { logo: '/images/rhmedias.png', name: 'RHMedias' },
                { logo: '/images/taverne.svg', name: 'La Taverne Au Carré' },
                { logo: '/images/h2a.png', name: 'H2A – Ingénieur Architecte & Associés' },
                { logo: '/images/hec.png', name: 'HEC Liège' },
                { logo: '/images/bwm.png', name: 'Bastogne War Museum' }
              ] as Collaboration[]).map((collab, index) => (
                <div key={index} className={styles.collab}>
                  <Image className={styles.collabImg} src={collab.logo} width={500} height={500} alt='Collaboration Logo' />
                  <span className={styles.collabName}>{collab.name}</span>
                </div>
              ))
            }
          </Marquee>
        </RevealMotion>
      </div>

      <RevealMotion variants={getRevealVariants(From.LEFT, 0.2)} className={`${bentoStyles.bentoCell} ${styles.projectsHeading}`}>
        <div className={`${styles.cellHead} ${styles.projectsTitle}`}>
          <Heading type={HeadingTypes.H2} startIcon='/icons/project.svg'>
            {richTranslation('projectsTitle')}
          </Heading>
          <p>{t('projectsSubtitle')}</p>
        </div>
        <Image
          width={1080}
          height={1080}
          alt='Avatar'
          src={'/images/thumbsup.png'}
          className={styles.thumbsUp}
        />
      </RevealMotion>

      <div className={`${styles.projectsList}`}>
        {
          ([
            { id: 'my-skills-logbook', img: '/images/hec-thumbnail.png', name: 'My Skills Logbook', description: t('hecServices') },
            { id: 'memory-wall', img: '/images/memory-wall-thumbnail.png', name: 'Memory Wall', description: t('mwServices') },
            { id: 'h2a', img: '/images/h2a-thumbnail.png', name: 'H2A', description: t('h2aServices') },
          ] as ProjectCard[]).map((project, index) => (
            <RevealMotion key={index} variants={getRevealVariants(From.RIGHT, (index === 0 ? 0.4 : 0) + index / 10)} className={styles.cardLayout}>
              <ProjectCard id={project.id} img={project.img} name={project.name} description={project.description} />
            </RevealMotion>
          ))
        }
      </div>

      <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${bentoStyles.fullWidth} ${styles.skills}`}>
        <Marquee gap={48} direction={MarqueeDirection.RIGHT}>
          {
            ['Frontend', 'Backend', 'Agile', 'SCRUM', 'Analyze', 'Ui Design', 'Prototyping'].map((skill, i) => (
              <React.Fragment key={i}>
                <div className={styles.skill}>
                  {skill}
                </div>
                <Image className={styles.skillDivider} width={64} height={64} src="/icons/star.svg" alt="" />
              </React.Fragment>
            ))
          }
        </Marquee>
      </RevealMotion>

      {/* <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${bentoStyles.fullWidth} ${styles.techSection}`}>
        <div className={`${styles.cellHead}`}>
          <Heading type={HeadingTypes.H2} startIcon='/icons/toolkit.svg'>
            {richTranslation('toolkitTitle')}
          </Heading>
          <p>{t('toolkitSubtitle')}</p>
        </div>
        <div className={`${styles.technologies}`}>
          <TechLink logo='/images/next.svg' name='Next.js' url='https://nextjs.org/' />
          <TechLink logo='/images/prisma.svg' name='Prisma' url='https://www.prisma.io/'/>
          <TechLink className={`${styles.third} ${styles.full}`} logo='/images/github.svg' name='GitHub' url='https://github.com/'/>
          <TechLink className={styles.third} logo='/images/figma.svg' name='Figma' url='https://www.figma.com/'/>
          <TechLink className={styles.third} logo='/images/notion.svg' name='Notion' url='https://www.notion.com/'/>
        </div>
      </RevealMotion> */}
      <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${bentoStyles.halfWidth} ${styles.techSection}`}>
        <div className={`${styles.cellHead}`}>
          <Heading type={HeadingTypes.H2} startIcon='/icons/toolkit.svg'>
            {richTranslation('toolkitTitle')}
          </Heading>
          <p>{t('toolkitSubtitle')}</p>
        </div>
        <div className={`${styles.technologies}`}>
          <TechLink logo='/images/next.svg' name='Next.js' url='https://nextjs.org/' />
          <TechLink logo='/images/prisma.svg' name='Prisma' url='https://www.prisma.io/'/>
          <TechLink className={`${styles.third} ${styles.full}`} logo='/images/github.svg' name='GitHub' url='https://github.com/'/>
          <TechLink className={styles.third} logo='/images/figma.svg' name='Figma' url='https://www.figma.com/'/>
          <TechLink className={styles.third} logo='/images/notion.svg' name='Notion' url='https://www.notion.com/'/>
        </div>
      </RevealMotion>

      <RevealMotion variants={getRevealVariants(From.BOTTOM, 0.2)} className={`${bentoStyles.bentoCell} ${bentoStyles.halfWidth} ${styles.testimonialsSection}`}>
        <div className={`${styles.cellHead} ${styles.testimonialsHead}`}>
          <Heading type={HeadingTypes.H2} startIcon='/icons/stars.svg'>
            {richTranslation('testimonialsTitle')}
          </Heading>
          <p>{t('testimonialsSubtitle')}</p>
        </div>
        <Marquee gap={32} direction={MarqueeDirection.LEFT} stopsOnHover={true}>
          <Testimonial
            note={4}
            quote={'This portfolio template felt like it was designed specifically for me. It’s intuitive, visually stunning, and helped me communicate my ideas more effectively. Highly recommend it to anyone in design.'}
            authorName='John Doe'
            authorJob='IT Manager'
          />
          <Testimonial
            note={4}
            quote={'This portfolio template felt like it was designed specifically for me. It’s intuitive, visually stunning, and helped me communicate my ideas more effectively. Highly recommend it to anyone in design.'}
            authorName='John Doe'
            authorJob='IT Manager'
          />
          <Testimonial
            note={4}
            quote={'This portfolio template felt like it was designed specifically for me. It’s intuitive, visually stunning, and helped me communicate my ideas more effectively. Highly recommend it to anyone in design.'}
            authorName='John Doe'
            authorJob='IT Manager'
          />
        </Marquee>
      </RevealMotion>

      <ContactSection />
    </>
  );
};

export default Home;
