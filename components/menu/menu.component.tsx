import React from "react";
import styles from "@/components/menu/menu.module.css";
import Image from "next/image";
import { Link } from "@/i18n/routing";


const Menu = () => {

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
                <span className={styles.menuLabel}>Home</span>
            </Link>
            <Link href={'/projects'} className={styles.menuLink}>
                <Image
                    width={500}
                    height={500}
                    src={'/icons/projects.svg'}
                    alt='School image'
                    className={styles.menuIcon}
                />
                <span className={styles.menuLabel}>Projects</span>
            </Link>
            <Link href={'/contact'} className={styles.menuLink}>
                <Image
                    width={500}
                    height={500}
                    src={'/icons/contact.svg'}
                    alt='School image'
                    className={styles.menuIcon}
                />
                <span className={styles.menuLabel}>Contact</span>
            </Link >
        </div>
    );
}

export default Menu;