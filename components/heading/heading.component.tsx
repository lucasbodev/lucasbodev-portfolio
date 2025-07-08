import React, { HtmlHTMLAttributes } from "react";
import styles from "@/components/heading/heading.module.css";
import Bulleted from "@/components/bulleted/bulleted.component";
import { IconSizes } from "@/components/icon/icon.component";

export enum HeadingTypes {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
}

export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    type?: HeadingTypes,
    startIcon?: string,
    endIcon?: string,
    children: React.ReactNode,
}

const Heading = ({ type, startIcon, endIcon, children, ...props }: HeadingProps) => {

    const { style, className } = props;

    if (!type) {
        type = HeadingTypes.H1;
    }

    const iconSize = () => {
        switch (type) {
            case HeadingTypes.H1:
                return IconSizes.LARGEST;
            case HeadingTypes.H2:
                return IconSizes.LARGER;
            case HeadingTypes.H3:
                return IconSizes.MEDIUM;
            case HeadingTypes.H4:
                return IconSizes.LARGER;
            case HeadingTypes.H5:
                return IconSizes.SMALLEST;
            default:
                return IconSizes.LARGER;
        }
    }

    const currentHeading = (content: React.ReactNode) => {
        switch (type) {
            case HeadingTypes.H1:
                return <h1 className={`${styles.heading} ${styles[type]} ${className}`} style={style}>{content}</h1>;
            case HeadingTypes.H2:
                return <h2 className={`${styles.heading} ${styles[type]} ${className}`} style={style}>{content}</h2>;
            case HeadingTypes.H3:
                return <h3 className={`${styles.heading} ${styles[type]} ${className}`} style={style}>{content}</h3>;
            case HeadingTypes.H4:
                return <h4 className={`${styles.heading} ${styles[type]} ${className}`} style={style}>{content}</h4>;
            case HeadingTypes.H5:
                return <h5 className={`${styles.heading} ${styles[type]} ${className}`} style={style}>{content}</h5>;
            default:
                return <h1 className={`${styles.heading} ${styles[type]} ${className}`} style={style}>{content}</h1>;
        }
    }

    return (
        startIcon || endIcon ?
            <Bulleted startIcon={startIcon} endIcon={endIcon} iconSize={iconSize()}>
                {currentHeading(children)}
            </Bulleted> :
            currentHeading(children)
    );
};

export default Heading;