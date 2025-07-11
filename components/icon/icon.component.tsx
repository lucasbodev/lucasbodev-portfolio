import React, { HtmlHTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';

export enum IconSizes {
    SMALLEST = 0.5,
    SMALLER = 1,
    MEDIUM = 1.25,
    LARGER = 2,
    LARGEST = 2.125,
}

interface IconProps extends HtmlHTMLAttributes<HTMLImageElement> {
    src?: string;
    size: IconSizes,
}

const Icon = ({ src, size, ...props }: IconProps) => {
    const { className } = props;
    return (
        src &&
        <Image
            src={src}
            alt="Icon"
            width={size * 16}
            height={size * 16}
            className={className}

            style={{
                width: `${size}rem`,
                minWidth: `${size}rem`,
                maxWidth: `${size}rem`,
                objectFit: 'contain',
            }}
        />
    );
};

export default Icon;