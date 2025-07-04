import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/app/[locale]/projects/projects.module.css";
import Bulleted from "@/components/bulleted/bulleted.component";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import { IconSizes } from "@/components/icon/icon.component";
import Image from "next/image";
import Avatar from "@/components/avatar/avatar.component";
import ProjectCard from "@/components/project-card/project-card.component";
import ContactSection from "@/components/contact-section/contact-section.component";

interface ProjectCard {
  img: string,
  name: string,
  description: string
}

const Projects = () => {

    return (
        <>
            <div className={`${bentoStyles.bentoCell} ${styles.hero}`}>
                <Avatar src="/images/thumbsup-inverted.png" />
                <div className={`${styles.heroContent}`}>
                    <Heading type={HeadingTypes.H1}>
                        Take a look at the <span className={styles.orange}>Projects</span><br />
                        I realized with <span className={styles.orange}>Passion</span>
                    </Heading>
                    <p>As a creative developer, I blend code and design to build unique, user-centric experiences. Let's turn your ideas into a dynamic and engaging digital reality!</p>
                </div>
            </div>

            <div className={`${bentoStyles.bentoCell} ${styles.tiptop}`}>
                <Image
                    width={500}
                    height={500}
                    src={'/images/tiptop.png'}
                    alt='School image'
                    className={styles.tiptopAvatar}
                />
            </div>
            <div className={styles.projectList}>
                {
                    ([
                        { img: '/images/hec-thumbnail.png', name: 'My Skills Logbook', description: 'Internship, development' },
                        { img: '/images/memory-wall-thumbnail.png', name: 'Memory Wall', description: 'Ui design, development' },
                        { img: '/images/h2a-thumbnail.png', name: 'H2A', description: 'Development' },
                        { img: '/images/next-starter.png', name: 'Next Starter', description: 'Development' },
                    ] as ProjectCard[]).map((project, index) => (
                        <ProjectCard key={index} img={project.img} name={project.name} description={project.description} vertical={true}/>
                    ))
                }
            </div>
            <ContactSection/>
        </>
    );
}

export default Projects;