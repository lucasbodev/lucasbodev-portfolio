import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/app/[locale]/contact/contact.module.css";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import Image from "next/image";
import TechLink from "@/components/tech-link/tech-link.component";
import RevealMotion from "@/components/reveal-motion/reveal-motion";
import { getRevealVariants, From } from "@/components/reveal-motion/variants";
import ContactForm from "@/components/contact-form/contact-form.component";
import { useTranslations } from "next-intl";


const Contact = () => {

    const t = useTranslations('Contact');

    const richTranslation = (name: string) => {
        return t.rich(name, {
            orange: (chunks) => <span className={styles.orange}>{chunks}</span>,
            br: () => <br />
        });
    }

    return (
        <div className={`${styles.contactGrid}`}>
            <RevealMotion variants={getRevealVariants(From.LEFT, 0.1)} className={`${bentoStyles.bentoCell} ${styles.contactLinks}`}>
                <div className={styles.cellHead}>
                    <Heading type={HeadingTypes.H1} startIcon={'/icons/connect.svg'}>
                        {richTranslation('connect')}
                    </Heading>
                    <p>
                        {t('connectSubtitle')}
                    </p>
                </div>
                <TechLink logo={'/images/linkedin.svg'} name='Linkedin' url="https://www.linkedin.com/in/lucas-bodet-20044326a/"/>
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.RIGHT, 0.2)} className={`${bentoStyles.bentoCell} ${styles.contactFormCell}`}>
                <div className={styles.cellHead}>
                    <Heading type={HeadingTypes.H1} startIcon={'/icons/mail.svg'}>
                        {richTranslation('getInTouchTitle')}
                    </Heading>
                    <p>
                        {t('getInTouchSubtitle')}
                    </p>
                </div>
                <ContactForm />
            </RevealMotion>
            <RevealMotion variants={getRevealVariants(From.BOTTOM, 0.3)} className={`${bentoStyles.bentoCell} ${styles.contactImg}`}>
                <Image
                    width={1080}
                    height={1080}
                    alt='Avatar'
                    src={'/images/bye.png'}
                    className={styles.bye}
                />
            </RevealMotion>
        </div>
    );
};

export default Contact;