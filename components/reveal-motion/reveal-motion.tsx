"use client";

import React, { forwardRef } from "react";
import { HTMLMotionProps, motion } from "motion/react";
import { useIsMobile } from "@/lib/context/MobileContext";
import { RevealVariants } from "./variants";

interface RevealMotionProps extends HTMLMotionProps<"div"> {
    mobileVariants?: RevealVariants,
    children: React.ReactNode
}

const RevealMotion = forwardRef<HTMLDivElement, RevealMotionProps>(({ mobileVariants, children, ...props }, ref) => {

    const { variants, initial = "hidden", whileInView = "visible", viewport = { once: true, amount: 0.2 }, className, style } = props;
    const isMobile = useIsMobile();

    return (
        <motion.div
            ref={ref}
            variants={isMobile && mobileVariants ? mobileVariants : variants}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
});

export default RevealMotion;