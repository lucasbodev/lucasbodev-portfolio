import React from "react";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/components/nav/nav.module.css";
import Avatar from "../avatar/avatar.component";
import Icon, { IconSizes } from "../icon/icon.component";

const Nav = () => {

    return (
        <div className={`${bentoStyles.bentoCell} ${bentoStyles.fullWidth} ${styles.nav}`}>
            <div className={`${styles.profile}`}>
                <Avatar src="/images/avatar.png"/>
                <div className={`${styles.infos}`}>
                    <span className={`${styles.name}`}>Lucas Bodet</span>
                    <span className={`${styles.job}`}>Full Stack Developer</span>
                </div>
            </div>
            <div className={`${styles.languageSwitcher}`}>
                <span>Français (FR)</span>
                <Icon src="/icons/arrow-up.svg" size={IconSizes.MEDIUM}/>
            </div>
        </div>
    );
}

export default Nav;