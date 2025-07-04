import React from "react";
import styles from "@/components/avatar/avatar.module.css";
import Image from "next/image";

export interface AvatarProps {
    src: string
}

const Avatar = ({ src }: AvatarProps) => {

    return (
        <Image
            width={48}
            height={48}
            alt="Avatar"
            src={src}
            className={`${styles.avatar}`}
        />
    );
}

export default Avatar;