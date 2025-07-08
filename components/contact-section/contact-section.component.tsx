import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/components/contact-section/contact-section.module.css";
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
                        <label>Contact</label>
                        <div className={`${styles.arrowBtn}`}>
                            <Image
                                width={1080}
                                height={1080}
                                alt='Project Link'
                                src={'/icons/arrow-top-right.svg'}
                                className={styles.contactLinkIcon}
                            />
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