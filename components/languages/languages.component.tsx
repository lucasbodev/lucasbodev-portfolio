'use client';

import React, { useState } from 'react';
import { Link, routing, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import Icon, { IconSizes } from '../icon/icon.component';
import bentoStyles from '@/styles/ui/bento.module.css';
import styles from '@/components/languages/languages.module.css';
import { DropdownPosition } from '../nav/nav.component';

enum LanguageLabels {
    fr = "Français (FR)",
    en = "English (EN)",
    nl = "Nederlands (NL)",
    de = "Deutsch (DE)",
    lb = "Lëtzebuergesch (LB)"
}

interface LanguagesProps {
    position: DropdownPosition
}

const Languages = ({ position }: LanguagesProps) => {

    const [open, setOpen] = useState(false);

    const currentLocale = useLocale();

    const pathname = usePathname();

    const params = useParams();

    console.log(currentLocale)
    console.log(routing.locales)

    return (
        <>
            <button className={`${styles.languageSwitcher}`} onClick={() => open ? setOpen(false) : setOpen(true)} >
                <span>{currentLocale.toUpperCase()}</span>
                <Icon src="/icons/arrow-up.svg" size={IconSizes.MEDIUM} className={`${styles.arrowIcon} ${position === DropdownPosition.TOP ? styles.top : styles.bottom} ${open ? styles.open : null}`} />
            </button>
            <div className={`${bentoStyles.bentoCell} ${styles.languagesDropdown} ${position === DropdownPosition.TOP ? styles.top : styles.bottom} ${open ? styles.open : null}`}>
                {routing.locales.map((locale) => (
                    <Link onClick={() => setOpen(false)} onBlur={() => setOpen(false)} key={locale} locale={locale} className={styles.languageItem} href={{
                        pathname: pathname as any,
                        // params: params as any,
                    }}>
                        {LanguageLabels[locale]}
                    </Link>
                ))}
            </div>
            <div className={`${styles.overlay} ${open && styles.open}`} onClick={() => setOpen(false)}></div>
        </>
        // <div className="dropdown dropdown-end">
        //     <div tabIndex={0} role="button" className="btn btn-ghost m-1">{currentLocale.toUpperCase()}</div>
        //     <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        // {routing.locales.map((locale) => (
        //     <li key={locale}>
        //         <Link locale={locale} href={{
        //             pathname: pathname as any,
        //             // params: params as any,
        //         }}>
        //             {locale.toUpperCase()}
        //         </Link>
        //     </li>
        // ))}
        //     </ul>
        // </div>
    );
};

export default Languages;
