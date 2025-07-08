import { Variant, Variants } from "motion/react";

export interface RevealVariants extends Variants {
    hidden: Variant,
    visible: Variant
}

export enum From {
    TOP = 'top',
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right'
}

interface Translation { x: number, y: number };

export const getRevealVariants = (direction: From, delay = 0, px = 100): RevealVariants => {
    return {
        hidden: { opacity: 0, ...getTranslation(direction, 56) },
        visible: { opacity: 1, x: 0, y: 0, transition: { delay: delay, duration: 0.4, ease: "easeOut" as const } },
    }
};

const getTranslation = (direction: From, value: number): Translation => {
    const translation: Translation = { x: 0, y: 0 };
    switch (direction) {
        case From.TOP:
            translation.y = -value;
            break;
        case From.BOTTOM:
            translation.y = value;
            break;
        case From.LEFT:
            translation.x = -value;
            break;
        case From.RIGHT:
            translation.x = value;
            break;
        default:
            break;
    }
    return translation;
}