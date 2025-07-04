import React, { HtmlHTMLAttributes } from "react";
import styles from "@/components/tech-link/tech-link.module.css";
import Image from "next/image";

export interface TechLinkProps extends HtmlHTMLAttributes<HTMLDivElement> {
  logo: string,
  name: string,
  url?: string
}

const TechLink = ({ logo, name, url, ...props }: TechLinkProps) => {

  const { style, className } = props;

  return (
    <div className={`${styles.techLink} ${className}`} style={style}>
      <div className={styles.techLogoContainer}>
        <Image className={styles.techLogo} width={64} height={64} src={logo} alt="Tech logo" />
      </div>
      <div className={styles.techInfos}>
        <label>{name}</label>
        <div className={styles.techLinkIconContainer}>
          <Image
            width={1080}
            height={1080}
            alt='Tech Link'
            src={'/icons/arrow-top-right.svg'}
            className={styles.techLinkIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default TechLink;