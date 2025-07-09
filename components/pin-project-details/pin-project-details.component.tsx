"use client";

import React, { useLayoutEffect, useRef } from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/app/[locale]/project-details/project-details.module.css";
import Image from "next/image";
import Heading, { HeadingTypes } from "@/components/heading/heading.component";
import { Link } from "@/i18n/routing";
import RevealMotion from "@/components/reveal-motion/reveal-motion";
import { getRevealVariants, From } from "@/components/reveal-motion/variants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useIsMobile } from "@/lib/context/MobileContext";

interface PinProjectDetailsProps {
    children: React.ReactNode
}

const PinProjectDetails = ({ children }: PinProjectDetailsProps) => {
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
            </div>

            <div className={`${styles.projectDetails}`}>
                {children}
            </div>
        </div>
    );
}

export default PinProjectDetails;