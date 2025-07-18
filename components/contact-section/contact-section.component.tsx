import React from "react";
import styles from "@/components/contact-section/contact-section.module.css";
import bentoStyles from "@/styles/ui/bento.module.css";
import Heading, { HeadingTypes } from "../heading/heading.component";
import TechLink from "../tech-link/tech-link.component";
import Image from "next/image";
import RevealMotion from "../reveal-motion/reveal-motion";
import { From, getRevealVariants } from "../reveal-motion/variants";
// import { fromBottomVariants, fromRightVariants } from "../reveal-motion/variants";

const ContactSection = () => {

    return (
        <>
            <RevealMotion variants={getRevealVariants(From.BOTTOM)} className={`${bentoStyles.bentoCell} ${styles.contact}`}>
                <div className={`${styles.cellHead}`}>
                    <Heading type={HeadingTypes.H1} startIcon='/icons/mail.svg'>
                        Let's <span className={styles.orange}>Get in touch !</span>
                    </Heading>
                    <p>Don’t just take our word for it—see what others are saying about how this template transformed their online presence.</p>
                </div>
                <div className={styles.contactLinks}>
                    <TechLink logo={'/images/linkedin.svg'} name='Linkedin' />
                    <div className={styles.contactLink}>
                        <label className={styles.contactLabel}>Contact</label>
                        <div className={`${styles.arrowBtn}`}>
                            <svg className={styles.contactLinkIcon} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.1698 15.085L15.0848 30.1699M30.1698 15.085L30.1698 26.3987M30.1698 15.085L18.8561 15.085" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.RIGHT, 0.2)} className={`${bentoStyles.bentoCell} ${styles.contactImg}`}>
                <Image
                    width={1080}
                    height={1080}
                    alt='Avatar'
                    src={'/images/bye.png'}
                    className={styles.bye}
                />
            </RevealMotion>
        </>
    );
}

export default ContactSection;