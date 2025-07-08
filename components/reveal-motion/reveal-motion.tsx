"use client";

import React from "react";
import { HTMLMotionProps, motion } from "motion/react";
import { useIsMobile } from "@/lib/context/MobileContext";
import { RevealVariants } from "./variants";

interface RevealMotionProps extends HTMLMotionProps<"div"> {
    mobileVariants?: RevealVariants,
    children: React.ReactNode
}

const RevealMotion = ({ mobileVariants, children, ...props }: RevealMotionProps) => {

    const { variants, initial = "hidden", whileInView = "visible", viewport = { once: true, amount: 0.2 }, className } = props;
    const isMobile = useIsMobile();
    if (isMobile === undefined) {
        return <div className={className} style={{ visibility: 'hidden' }}>{children}</div>
    }

    return (
        <motion.div
            variants={isMobile && mobileVariants ? mobileVariants : variants}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default RevealMotion;