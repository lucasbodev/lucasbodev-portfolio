import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/app/[locale]/projects/projects.module.css";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import Image from "next/image";
import Avatar from "@/components/avatar/avatar.component";
import ProjectCard from "@/components/project-card/project-card.component";
import ContactSection from "@/components/contact-section/contact-section.component";
import RevealMotion from "@/components/reveal-motion/reveal-motion";
import { getRevealVariants, From } from "@/components/reveal-motion/variants";
import { useTranslations } from "next-intl";

interface ProjectCard {
    id?: string;
    img: string,
    name: string,
    description: string
}

const Projects = () => {

    const t = useTranslations('Projects');

    const richTranslation = (name: string) => {
        return t.rich(name, {
            orange: (chunks) => <span className={styles.orange}>{chunks}</span>,
            br: () => <br />
        });
    }

    return (
        <>
            <RevealMotion variants={getRevealVariants(From.LEFT)} className={`${bentoStyles.bentoCell} ${styles.hero}`}>
                <Avatar src="/images/thumbsup-inverted.png" />
                <div className={`${styles.heroContent}`}>
                    <Heading type={HeadingTypes.H1} style={{ lineHeight: '125%' }}>
                        {richTranslation('projectsPageTitle')}
                    </Heading>
                    <p>{t('projectsPageSubtitle')}</p>
                </div>
            </RevealMotion>

            <RevealMotion
                variants={getRevealVariants(From.TOP, 0.1)}
                mobileVariants={getRevealVariants(From.BOTTOM, 0.1)}
                className={`${bentoStyles.bentoCell} ${styles.tiptop}`}
            >
                <Image
                    width={500}
                    height={500}
                    src={'/images/tiptop.png'}
                    alt='School image'
                    className={styles.tiptopAvatar}
                />
            </RevealMotion>
            <div className={styles.projectList}>
                {
                    ([
                        { id: 'my-skills-logbook', img: '/images/hec-thumbnail.png', name: 'My Skills Logbook', description: 'Internship, development' },
                        { id: 'memory-wall', img: '/images/memory-wall-thumbnail.png', name: 'Memory Wall', description: 'Ui design, development' },
                        { id: 'h2a', img: '/images/h2a-thumbnail.png', name: 'H2A', description: 'Development' },
                        { id: 'next-starter', img: '/images/next-starter.png', name: 'Next Starter', description: 'Development' },
                    ] as ProjectCard[]).map((project, index) => (
                        <RevealMotion key={index} variants={getRevealVariants(From.BOTTOM, 0.4 + index / 10)}>
                            <ProjectCard id={project.id} img={project.img} name={project.name} description={project.description} vertical={true} />
                        </RevealMotion>
                    ))
                }
            </div>
            <ContactSection />
        </>
    );
}

export default Projects;