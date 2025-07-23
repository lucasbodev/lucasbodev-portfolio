'use client';

import React, { useEffect, useRef, useState } from 'react';
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
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const currentLocale = useLocale();

    const pathname = usePathname();

    const params = useParams();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            if (
                open &&
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <>
            <button ref={buttonRef} className={`${styles.languageSwitcher}`} onClick={() => setOpen((prev) => !prev)}>
                <span>{currentLocale.toUpperCase()}</span>
                <Icon src="/icons/arrow-up.svg" size={IconSizes.MEDIUM} className={`${styles.arrowIcon} ${position === DropdownPosition.TOP ? styles.top : styles.bottom} ${open ? styles.open : null}`} />
            </button>
            <div ref={dropdownRef} className={`${bentoStyles.bentoCell} ${styles.languagesDropdown} ${position === DropdownPosition.TOP ? styles.top : styles.bottom} ${open ? styles.open : null}`}>
                {routing.locales.map((locale) => (
                    <Link key={locale} locale={locale} className={styles.languageItem} href={{
                        pathname: pathname as any,
                        params: params as any,
                    }}>
                        {LanguageLabels[locale]}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Languages;
