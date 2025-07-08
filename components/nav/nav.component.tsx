import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/components/nav/nav.module.css";
import Avatar from "../avatar/avatar.component";
import Icon, { IconSizes } from "../icon/icon.component";
import RevealMotion from "../reveal-motion/reveal-motion";
import { From, getRevealVariants } from "../reveal-motion/variants";

interface NavProps {
    reveal: From
}

const Nav = ({ reveal }: NavProps) => {

    return (
        <RevealMotion variants={getRevealVariants(reveal, 0.4, 20)} className={`${bentoStyles.bentoCell} ${bentoStyles.fullWidth} ${styles.nav}`}>
            <div className={`${styles.profile}`}>
                <Avatar src="/images/avatar.png" />
                <div className={`${styles.infos}`}>
                    <span className={`${styles.name}`}>Lucas Bodet</span>
                    <span className={`${styles.job}`}>Full Stack Developer</span>
                </div>
            </div>
            <div className={`${styles.languageSwitcher}`}>
                <span>FR</span>
                <Icon src="/icons/arrow-up.svg" size={IconSizes.MEDIUM} />
            </div>
        </RevealMotion>
    );
}

export default Nav;