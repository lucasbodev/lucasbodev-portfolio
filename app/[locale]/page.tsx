import React from 'react';
import bentoStyles from '@/styles/ui/bento.module.css';
import styles from '@/app/[locale]/home.module.css';
import { getTranslations } from 'next-intl/server';
import Bulleted from '@/components/bulleted/bulleted.component';
import Icon, { IconSizes } from '@/components/icon/icon.component';
import Heading, { HeadingTypes } from '@/components/heading/heading.component';
import Image from 'next/image';
import Marquee, { MarqueeDirection } from '@/components/marquee/marquee.component';
import ProjectCard from '@/components/project-card/project-card.component';
import TechLink from '@/components/tech-link/tech-link.component';
import Avatar from '@/components/avatar/avatar.component';
import Testimonial from '@/components/testimonial/testimonial.component';
import ContactSection from '@/components/contact-section/contact-section.component';

interface Collaboration {
  logo: string,
  name: string
}

interface ProjectCard {
  img: string,
  name: string,
  description: string
}

const Home = async () => {

  const t = await getTranslations('Home');

  return (
    <>
      <div className={`${bentoStyles.bentoCell} ${styles.hero}`}>
        <Bulleted startIcon='/icons/calendar.svg' iconSize={IconSizes.LARGER}>
          <span className={styles.disponibility}>Available for hire</span>
        </Bulleted>
        <div className={`${styles.heroContent}`}>
          <Heading type={HeadingTypes.H1} style={{lineHeight: '125%'}}>
            Hello, <span className={styles.orange}>I’m Lucas -</span><br />
            Full Stack Developer
          </Heading>
          <p>As a creative developer, I blend code and design to build unique, user-centric experiences. Let's turn your ideas into a dynamic and engaging digital reality!</p>
        </div>
        <Bulleted startIcon='/icons/location.svg' iconSize={IconSizes.LARGER}>
          <span className={styles.disponibility}>Bastogne, Belgium</span>
        </Bulleted>
      </div>

      <div className={`${styles.heroSide}`}>
        <div className={`${bentoStyles.bentoCell} ${styles.degree}`}>
          <div className={`${styles.cellHead}`}>
            <Heading type={HeadingTypes.H4} startIcon='/icons/degree.svg'>
              Ma <span className={styles.orange}>Formation</span>
            </Heading>
            <p>Bachelier en développement d’applications</p>
          </div>
          <Image
            width={500}
            height={500}
            src={'/images/degree-avatar.png'}
            alt='School image'
            className={styles.degreeAvatar}
          />
        </div>
        <div className={`${bentoStyles.bentoCell} ${styles.collaborations}`}>
          <div className={styles.collabsHead}>
            <Heading type={HeadingTypes.H4} startIcon='/icons/collab.svg'>
              Mes <span className={styles.orange}>Collaborations</span>
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
        </div>
      </div>

      <div className={`${bentoStyles.bentoCell} ${styles.projectsHeading}`}>
        <div className={`${styles.cellHead} ${styles.projectsTitle}`}>
          <Heading type={HeadingTypes.H2} startIcon='/icons/project.svg'>
            The projects <span className={styles.orange}>I realized</span>
          </Heading>
          <p>As a creative developer, I blend code and design to build unique, user-centric experiences. Let's turn your ideas into a dynamic and engaging digital reality!</p>
        </div>
        <Image
          width={1080}
          height={1080}
          alt='Avatar'
          src={'/images/thumbsup.png'}
          className={styles.thumbsUp}
        />
      </div>

      <div className={`${styles.projectsList}`}>
        {
          ([
            { img: '/images/hec-thumbnail.png', name: 'My Skills Logbook', description: 'Internship, development' },
            { img: '/images/memory-wall-thumbnail.png', name: 'Memory Wall', description: 'Ui design, development' },
            { img: '/images/h2a-thumbnail.png', name: 'H2A', description: 'Development' },
          ] as ProjectCard[]).map((project, index) => (
            <ProjectCard key={index} img={project.img} name={project.name} description={project.description} />
          ))
        }
      </div>

      <div className={`${bentoStyles.bentoCell} ${bentoStyles.fullWidth} ${styles.skills}`}>
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
      </div>

      <div className={`${bentoStyles.bentoCell} ${bentoStyles.halfWidth} ${styles.techSection}`}>
        <div className={`${styles.cellHead}`}>
          <Heading type={HeadingTypes.H2} startIcon='/icons/toolkit.svg'>
            My development <span className={styles.orange}>Toolkit</span>
          </Heading>
          <p>Explore the powerful tools and technologies I use to bring ideas to life.</p>
        </div>
        <div className={`${styles.technologies}`}>
          {/* <div className={`${styles.row}`}> */}
            <TechLink logo='/images/next.svg' name='Next.js' />
            <TechLink logo='/images/prisma.svg' name='Prisma' />
          {/* </div> */}
          {/* <div className={`${styles.row}`}> */}
            <TechLink className={`${styles.third} ${styles.full}`} logo='/images/github.svg' name='GitHub' />
            <TechLink className={styles.third} logo='/images/figma.svg' name='Figma' />
            <TechLink className={styles.third} logo='/images/notion.svg' name='Notion' />
          {/* </div> */}
        </div>
      </div>

      <div className={`${bentoStyles.bentoCell} ${bentoStyles.halfWidth} ${styles.testimonialsSection}`}>
        <div className={`${styles.cellHead} ${styles.testimonialsHead}`}>
          <Heading type={HeadingTypes.H2} startIcon='/icons/stars.svg'>
            Some <span className={styles.orange}>Testimonials</span>
          </Heading>
          <p>Don’t just take our word for it—see what others are saying about how this template transformed their online presence.</p>
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
      </div>

      <ContactSection/>
    </>
  );
};

export default Home;
