import React from "react";
import styles from "@/components/nav/nav.module.css";
import bentoStyles from "@/styles/ui/bento.module.css";
import Avatar from "../avatar/avatar.component";
import Icon, { IconSizes } from "../icon/icon.component";
import RevealMotion from "../reveal-motion/reveal-motion";
import { From, getRevealVariants } from "../reveal-motion/variants";
import Languages from "../languages/languages.component";

export enum DropdownPosition {
    TOP = "top",
    BOTTOM = "bottom"
}

interface NavProps {
    reveal: From,
    dropdownPosition: DropdownPosition
}

const Nav = ({ reveal, dropdownPosition }: NavProps) => {

    return (
        <RevealMotion variants={getRevealVariants(reveal, 0.4, 20)} className={`${bentoStyles.bentoCell} ${bentoStyles.fullWidth} ${styles.nav}`}>
            <div className={`${styles.profile}`}>
                <Avatar src="/images/avatar.png" />
                <div className={`${styles.infos}`}>
                    <span className={`${styles.name}`}>Lucas Bodet</span>
                    <span className={`${styles.job}`}>Full Stack Developer</span>
                </div>
            </div>
            <Languages position={dropdownPosition}/>
        </RevealMotion>
    );
}

export default Nav;