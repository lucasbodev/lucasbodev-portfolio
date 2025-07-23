import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/components/project/project.module.css";
import Image from "next/image";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import BulletedList from "@/components/bulleted-list/bulleted-list.component";
import TechLink, { TechLinkProps } from "@/components/tech-link/tech-link.component";
import RevealMotion from "@/components/reveal-motion/reveal-motion";
import { getRevealVariants, From } from "@/components/reveal-motion/variants";
import PinProjectDetails from "@/components/pin-project-details/pin-project-details.component";
import { useTranslations } from "next-intl";

export interface ProjectDTO {
    id: string;
    title: string;
    description: string;
    url?: string;
    client: string;
    industry: string;
    services: string[];
    year: number;
    headingImages: string[];
    problem: string;
    challenges: string[];
    midImages: string[];
    solution: string;
    benefits: string[];
    endImages: string[];
    technologies: TechLinkProps[];
}

export interface ProjectProps extends ProjectDTO { }

const Project = ({ id, headingImages, problem, challenges, midImages, solution, benefits, endImages, technologies, ...props }: ProjectProps) => {

    const t = useTranslations('Project');

    return (
        <PinProjectDetails {...props}>
            <RevealMotion variants={getRevealVariants(From.TOP, 0.1)} mobileVariants={getRevealVariants(From.BOTTOM, 0.1)} className={`${styles.imgContainer}`}>
                <Image
                    width={1080}
                    height={1080}
                    alt='Project thumbnail'
                    src={headingImages[0]}
                />
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.RIGHT, 0.2)} mobileVariants={getRevealVariants(From.BOTTOM, 0.2)} className={`${styles.imgContainer}`}>
                <Image
                    width={1080}
                    height={1080}
                    alt='Project thumbnail'
                    src={headingImages[1]}
                />
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.BOTTOM, 0.4)} className={`${bentoStyles.bentoCell} ${styles.descriptionBox}`}>
                <div className={`${styles.description}`}>
                    <Heading type={HeadingTypes.H3}>{t('problem')}</Heading>
                    <p dangerouslySetInnerHTML={{ __html: problem }}></p>
                </div>
                <div className={`${styles.bulletPointBox}`}>
                    <label>{t('challenges')}</label>
                    <BulletedList lineHeight="25px" icon="/icons/star.svg" bullets={challenges} />
                </div>
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${styles.imgContainer} ${styles.fullWidth}`}>
                {
                    midImages.map((img, index) => (
                        <Image
                            key={index}
                            width={1080}
                            height={1080}
                            alt='Project thumbnail'
                            src={img}
                        />
                    ))
                }
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${styles.descriptionBox}`}>
                <div className={`${styles.description}`}>
                    <Heading type={HeadingTypes.H3}>{t('solution')}</Heading>
                    <p dangerouslySetInnerHTML={{ __html: solution }}></p>
                </div>
                <div className={`${styles.bulletPointBox}`}>
                    <label>{t('benefits')}</label>
                    <BulletedList lineHeight="25px" icon="/icons/star.svg" bullets={benefits} />
                </div>
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${styles.imgContainer}`}>
                <Image
                    width={1080}
                    height={1080}
                    alt='Project thumbnail'
                    src={endImages[0]}
                />
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.BOTTOM, 0.2)} className={`${styles.imgContainer}`}>
                <Image
                    width={1080}
                    height={1080}
                    alt='Project thumbnail'
                    src={endImages[1]}
                />
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${styles.techBox}`}>
                <Heading type={HeadingTypes.H3}>{t('technologies')}</Heading>
                <div className={`${styles.techList}`}>
                    {
                        technologies.map((tech, index) => (
                            <TechLink key={index} logo={tech.logo} name={tech.name} url={tech.url}/>
                        ))
                    }
                </div>
            </RevealMotion>
        </PinProjectDetails>
    );
}

export default Project;