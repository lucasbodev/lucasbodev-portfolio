import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import styles from "@/components/button/button.module.css";
import { Link } from "@/i18n/routing";

export enum ButtonDesign {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    design?: ButtonDesign,
    text: string,
    onClick?: () => void,
    href?: string
}

const Button = ({ design, text, onClick, href, ...props }: ButtonProps) => {

    const { type } = props;
    if (!design) {
        design = ButtonDesign.PRIMARY;
    }

    return (
        href ?
        <Link className={`${styles.button} ${styles[design]}`} href={href as any}>{text}</Link> :
        <button {...props} className={`${styles.button} ${styles[design]}`} onClick={onClick}>{text}</button>
    );
};

export default Button;