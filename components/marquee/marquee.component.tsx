import React from "react";
import styles from "@/components/marquee/marquee.module.css";

export enum MarqueeDirection {
    LEFT = 0,
    RIGHT = 1
}

interface MarqueeProps {
    children: React.ReactNode,
    direction: MarqueeDirection,
    gap?: number, 
    stopsOnHover?: boolean
}

const Marquee = ({ children, direction, gap, stopsOnHover }: MarqueeProps) => {

    return (
        <div className={styles.shadowWrapper}>
            <div className={`${styles.marqueeContainer} ${stopsOnHover ? styles.stopsOnHover : null}`}>
                <div className={`${styles.marquee} ${direction ? styles.toRight : styles.toLeft}`} style={{gap: `${gap}px`, paddingRight: `${gap}px`}}>
                    {children}
                </div>
                <div className={`${styles.marquee} ${direction ? styles.toRight : styles.toLeft}`} style={{gap: `${gap}px`, paddingRight: `${gap}px`}}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Marquee;