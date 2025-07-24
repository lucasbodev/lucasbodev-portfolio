import React, { HtmlHTMLAttributes } from "react";
import styles from "@/components/tech-link/tech-link.module.css";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export interface TechLinkProps extends HtmlHTMLAttributes<HTMLDivElement> {
  logo: string,
  name: string,
  url: string
}

const TechLink = ({ logo, name, url, ...props }: TechLinkProps) => {

  const { style, className } = props;

  return (
    <a href={url as any} className={`${styles.techLink} ${className}`} style={style} target="_blank" rel="noopener noreferrer">
      <div className={styles.techLogoContainer}>
        <Image className={styles.techLogo} width={64} height={64} src={logo} alt="Tech logo" />
      </div>
      <div className={styles.techInfos}>
        <label>{name}</label>
        <div className={styles.techLinkIconContainer}>
          <svg className={styles.techLinkIcon} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1698 15.085L15.0848 30.1699M30.1698 15.085L30.1698 26.3987M30.1698 15.085L18.8561 15.085" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default TechLink;