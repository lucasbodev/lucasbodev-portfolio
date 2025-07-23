"use client";

import React, { useLayoutEffect, useRef } from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/components/pin-project-details/pin-project-details.module.css";
import Image from "next/image";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import { Link } from "@/i18n/routing";
import RevealMotion from "@/components/reveal-motion/reveal-motion";
import { getRevealVariants, From } from "@/components/reveal-motion/variants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useIsMobile } from "@/lib/context/MobileContext";
import { useTranslations } from "next-intl";

export interface PinProjectDetailsProps {
    children: React.ReactNode;
    title: string;
    description: string;
    url?: string;
    client: string;
    industry: string;
    services: string[];
    year: number;
}

const PinProjectDetails = ({ children, title, description, url, client, industry, services, year }: PinProjectDetailsProps) => {
    const t = useTranslations('PinProjectDetails');
    const pinRef = useRef<HTMLDivElement>(null);
    const pinWrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    useLayoutEffect(() => {
        if (isMobile !== undefined && isMobile !== true) {
            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                if (!pinRef.current || !containerRef.current) return;
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: pinRef.current,
                    pinSpacing: false,
                    onEnter: () => {
                        const el = pinRef.current;
                        if (!el) return;
                        const vh = window.innerHeight;
                        const elHeight = el.offsetHeight;
                        const offset = (vh - elHeight) / 2;
                        el.style.top = `${offset}px`;
                        el.style.transform = "none";
                    },
                    onEnterBack: () => {
                        const el = pinRef.current;
                        if (!el) return;
                        const vh = window.innerHeight;
                        const elHeight = el.offsetHeight;
                        const offset = (vh - elHeight) / 2;
                        el.style.top = `${offset}px`;
                        el.style.transform = "none";
                    },
                    onLeave: () => {
                        const pin = pinRef.current;
                        const pinWrapper = pinWrapperRef.current;

                        if (pin && pinWrapper) {
                            pin.removeAttribute("style");
                            pinWrapper.style.alignItems = "end";
                        }
                    },
                    onLeaveBack: () => {
                        const pin = pinRef.current;
                        const pinWrapper = pinWrapperRef.current;

                        if (pin && pinWrapper) {
                            pin.removeAttribute("style");
                            pinWrapper.style.alignItems = "start";
                        }
                    }
                });
            });
            return () => ctx.revert();
        }
    }, [isMobile]);

    return (
        <div ref={containerRef} className={styles.detailsGrid}>
            <div ref={pinWrapperRef} className={styles.pinWrapper}>
                <RevealMotion
                    ref={pinRef}
                    variants={getRevealVariants(From.LEFT)}
                    className={`${bentoStyles.bentoCell} ${styles.projectPin}`}
                >
                    <div className={`${styles.pinHead}`}>
                        <Link href={'/projects'} className={`${styles.backLink}`}>
                            <Image src={'/icons/arrow-left.svg'} height={16} width={16} alt="Back icon" />
                            <span>{t('back')}</span>
                        </Link>

                        <div className={`${styles.pinContent}`}>
                            <Heading type={HeadingTypes.H2}>{title}</Heading>
                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                            {
                                url ?
                                    <div className={`${styles.projectLink}`}>
                                        <span><strong>{t('projectLink')}</strong></span>
                                        <a href={url} className={`${styles.link}`} target="_blank" rel="noopener noreferrer">{url}</a>
                                    </div> : null
                            }
                        </div>
                    </div>

                    <div className={`${styles.pinFooter}`}>
                        <div className={`${styles.pinFooterCell}`}>
                            <label>{t('client')}</label>
                            <span>{client}</span>
                        </div>
                        <div className={`${styles.pinFooterCell}`}>
                            <label>{t('industry')}</label>
                            <span>{industry}</span>
                        </div>
                        <div className={`${styles.pinFooterCell}`}>
                            <label>{t('services')}</label>
                            <span>
                                {services.join(', ')}
                            </span>
                        </div>
                        <div className={`${styles.pinFooterCell}`}>
                            <label>{t('year')}</label>
                            <span>{year}</span>
                        </div>
                    </div>
                </RevealMotion>
            </div>

            <div className={`${styles.projectDetails}`}>
                {children}
            </div>
        </div>
    );
}

export default PinProjectDetails;