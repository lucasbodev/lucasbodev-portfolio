import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/app/[locale]/project-details/project-details.module.css";
import Image from "next/image";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import { Link } from "@/i18n/routing";
import BulletedList from "@/components/bulleted-list/bulleted-list.component";
import TechLink, { TechLinkProps } from "@/components/tech-link/tech-link.component";
import RevealMotion from "@/components/reveal-motion/reveal-motion";
import { getRevealVariants, From } from "@/components/reveal-motion/variants";

const ProjectDetails = () => {

    return (
        <>
            <RevealMotion variants={getRevealVariants(From.LEFT)} className={`${bentoStyles.bentoCell} ${styles.projectPin}`}>
                <div className={`${styles.pinHead}`}>
                    <Link href={'/projects'} className={`${styles.backLink}`}>
                        <Image src={'/icons/arrow-left.svg'} height={16} width={16} alt="Back icon" />
                        <span>Back to projects</span>
                    </Link>

                    <div className={`${styles.pinContent}`}>
                        <Heading type={HeadingTypes.H2}>Memory Wall</Heading>
                        <p>As a creative developer, I blend code and design to build unique, user-centric experiences. Let's turn your ideas into a dynamic and engaging digital reality!</p>
                        <div className={`${styles.projectLink}`}>
                            <span><strong>Lien vers le projet:</strong></span>
                            <span className={`${styles.link}`}>https://memory-wall-sepia.vercel.app/</span>
                        </div>
                    </div>
                </div>

                <div className={`${styles.pinFooter}`}>
                    <div className={`${styles.pinFooterCell}`}>
                        <label>Client:</label>
                        <span>La Taverne au Carré</span>
                    </div>
                    <div className={`${styles.pinFooterCell}`}>
                        <label>Industrie:</label>
                        <span>Horeca</span>
                    </div>
                    <div className={`${styles.pinFooterCell}`}>
                        <label>Services:</label>
                        <span>Ui design, development</span>
                    </div>
                    <div className={`${styles.pinFooterCell}`}>
                        <label>Year:</label>
                        <span>2025</span>
                    </div>
                </div>
            </RevealMotion>
            <div className={`${styles.projectDetails}`}>
                <RevealMotion variants={getRevealVariants(From.TOP, 0.1)} mobileVariants={getRevealVariants(From.BOTTOM, 0.1)} className={`${styles.imgContainer}`}>
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={'/images/memory-wall-thumbnail.png'}
                    />
                </RevealMotion>
                <RevealMotion variants={getRevealVariants(From.RIGHT, 0.2)} mobileVariants={getRevealVariants(From.BOTTOM, 0.2)}className={`${styles.imgContainer}`}>
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={'/images/memory-wall-list.png'}
                    />
                </RevealMotion>
                <RevealMotion variants={getRevealVariants(From.BOTTOM, 0.4)} className={`${bentoStyles.bentoCell} ${styles.descriptionBox}`}>
                    <div className={`${styles.description}`}>
                        <Heading type={HeadingTypes.H3}>Problème à résoudre:</Heading>
                        <p>L’entreprise dispose d’un grand nombre de photos d’époque dans son établissement et veut attirer de la clientèle grâce à celles-ci. </p>
                    </div>
                    <div className={`${styles.bulletPointBox}`}>
                        <label>Défis:</label>
                        <BulletedList lineHeight="25px" icon="/icons/star.svg" bullets={
                            [
                                'Traduction des données encodées en base de données',
                                'Création de QR codes téléchargeables destinés à l’impression de stickers',
                                'Création d’un design correspondant à l’ambiance de la seconde guerre mondiale'
                            ]
                        } />
                    </div>
                </RevealMotion>
                <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${styles.imgContainer} ${styles.fullWidth}`}>
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={'/images/soldier-details-1.png'}
                    />
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={'/images/soldier-details-2.png'}
                    />
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={'/images/soldier-details-2.png'}
                    />
                </RevealMotion>
                <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${styles.descriptionBox}`}>
                    <div className={`${styles.description}`}>
                        <Heading type={HeadingTypes.H3}>Solution apportée:</Heading>
                        <p>Grâce au concept de mur interactif arborant des QR codes sous les photos des soldats, des partenariats sont maintenant possibles avec les musées de la ville afin de rediriger les fin de visites vers le bar.</p>
                    </div>
                    <div className={`${styles.bulletPointBox}`}>
                        <label>Apports clés:</label>
                        <BulletedList lineHeight="25px" icon="/icons/star.svg" bullets={
                            [
                                'Système multi linguiste',
                                'QR codes téléchargeables représentant la marque de l’établissement',
                                'Design inspiré directement de la 101e Division Airborne et des journaux d’époque.'
                            ]
                        } />
                    </div>
                </RevealMotion>
                <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${styles.imgContainer}`}>
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={'/images/memory-wall-languages.png'}
                    />
                </RevealMotion>
                <RevealMotion variants={getRevealVariants(From.BOTTOM, 0.2)} className={`${styles.imgContainer}`}>
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={'/images/memory-wall-qr.png'}
                    />
                </RevealMotion>
                <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${styles.techBox}`}>
                    <Heading type={HeadingTypes.H3}>Technologies utilisées:</Heading>
                    <div className={`${styles.techList}`}>
                        {
                            ([
                                { logo: '/images/next.svg', name: 'Next.js' },
                                { logo: '/images/prisma.svg', name: 'Prisma' },
                                { logo: '/images/auth0.svg', name: 'Auth0' },
                                { logo: '/images/zod.svg', name: 'Zod' },
                                { logo: '/images/next-intl.svg', name: 'Next-intl' },
                                { logo: '/images/cloud-translation.svg', name: 'Cloud Translation' },
                                { logo: '/images/github.svg', name: 'GitHub' },
                                { logo: '/images/figma.svg', name: 'Figma' },
                                { logo: '/images/vercel.svg', name: 'Vercel' },
                            ] as TechLinkProps[]).map((tech, index) => (
                                <TechLink key={index} logo={tech.logo} name={tech.name} />
                            ))
                        }
                    </div>
                </RevealMotion>
            </div>
        </>
    );
}

export default ProjectDetails;