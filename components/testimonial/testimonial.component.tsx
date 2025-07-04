import React from "react";
import styles from "@/components/testimonial/testimonial.module.css";
import Avatar from "../avatar/avatar.component";
import Image from "next/image";

interface TestimonialProps {
    note: number,
    quote: string,
    authorName: string,
    authorJob: string
}

const Testimonial = ({ note, quote, authorName, authorJob }: TestimonialProps) => {

    return (
        <div className={styles.testimonialCard}>
            <div className={styles.testimonialCardHead}>
                <span className={styles.note}>{note}/5</span>
                <Image className={styles.quoteIcon} width={64} height={64} src="/icons/quote.svg" alt="Quote icon" />
            </div>
            <p className={styles.quote}>{quote}</p>
            <div className={styles.author}>
                <Avatar src='/images/author.png' />
                <div className={styles.authorInfos}>
                    <label className={styles.authorName}>{authorName}</label>
                    <span className={styles.authorJob}>{authorJob}</span>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;