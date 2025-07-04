import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/app/[locale]/contact/contact.module.css";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import Image from "next/image";
import TechLink from "@/components/tech-link/tech-link.component";
import Button from "@/components/button/button.component";


const Contact = () => {

    return (
        <div className={`${styles.contactGrid}`}>
            <div className={`${bentoStyles.bentoCell} ${styles.contactLinks}`}>
                <div className={styles.cellHead}>
                    <Heading type={HeadingTypes.H1} startIcon={'/icons/connect.svg'}>
                        Let's <span className={styles.orange}>Connect!</span>
                    </Heading>
                    <p>
                        Don’t just take our word for it—see what others are saying about how this template transformed their online presence.
                    </p>
                </div>
                <TechLink logo={'/images/linkedin.svg'} name='Linkedin' />
            </div>
            <div className={`${bentoStyles.bentoCell} ${styles.contactFormCell}`}>
                <div className={styles.cellHead}>
                    <Heading type={HeadingTypes.H1} startIcon={'/icons/mail.svg'}>
                        Get in <span className={styles.orange}>Touch:</span>
                    </Heading>
                    <p>
                        Don’t just take our word for it—see what others are saying about how this template transformed their online presence.
                    </p>
                </div>
                <form className={`${styles.contactForm}`}>
                    <div className={`${styles.inputs}`}>
                        <input className={styles.input} type="text" placeholder="Your name" />
                        <input className={styles.input} type="text" placeholder="Your email" />
                        <textarea className={styles.input} rows={5} placeholder="Leave me a message..." />
                    </div>
                    <Button text="Send message" />
                </form>
            </div>
            <div className={`${bentoStyles.bentoCell} ${styles.contactImg}`}>
                <Image
                    width={1080}
                    height={1080}
                    alt='Avatar'
                    src={'/images/bye.png'}
                    className={styles.bye}
                />
            </div>
        </div>
    );
};

export default Contact;