import React from "react";
import styles from "@/components/menu/menu.module.css";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Menu = () => {

    const t = useTranslations('Menu');

    return (
        <div className={styles.menu}>
            <Link href={'/'} className={styles.menuLink}>
                <Image
                    width={500}
                    height={500}
                    src={'/icons/home.svg'}
                    alt='School image'
                    className={styles.menuIcon}
                />
                <span className={styles.menuLabel}>{t('home')}</span>
            </Link>
            <Link href={'/projects'} className={styles.menuLink}>
                <Image
                    width={500}
                    height={500}
                    src={'/icons/projects.svg'}
                    alt='School image'
                    className={styles.menuIcon}
                />
                <span className={styles.menuLabel}>{t('projects')}</span>
            </Link>
            <Link href={'/contact'} className={styles.menuLink}>
                <Image
                    width={500}
                    height={500}
                    src={'/icons/contact.svg'}
                    alt='School image'
                    className={styles.menuIcon}
                />
                <span className={styles.menuLabel}>{t('contact')}</span>
            </Link >
        </div>
    );
}

export default Menu;