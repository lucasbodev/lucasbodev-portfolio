import React from "react";
import Image from "next/image";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/components/project-card/project-card.module.css";
import Heading, { HeadingTypes } from "../heading/heading.component";
import { Link } from "@/i18n/routing";
import Icon, { IconSizes } from "../icon/icon.component";

interface ProjectCardProps {
    id?: string;
    img: string,
    name: string,
    description: string,
    vertical?: boolean
}

const ProjectCard = ({ id, img, name, description, vertical = false }: ProjectCardProps) => {

    return (
        <Link href={`/project-details/${id}` as any} className={`${bentoStyles.bentoCell} ${styles.projectCardContainer}`}>
            <div className={`${styles.projectCard} ${vertical ? styles.vertical : null}`}>
                <div className={`${styles.projectImgContainer} ${vertical ? styles.vertical : null}`}>
                    <Image
                        width={1080}
                        height={1080}
                        alt='Project thumbnail'
                        src={img}
                        className={`${styles.projectImg}`}
                    />
                </div>
                <div className={`${styles.projectContent}`}>
                    <div className={`${styles.projectInfos}`}>
                        <Heading type={HeadingTypes.H3} className={styles.projectTitle}>{name}</Heading>
                        <p>{description}</p>
                    </div>
                    <div className={`${styles.arrowBtn}`}>
                        <svg className={styles.projectLinkIcon} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.1698 15.085L15.0848 30.1699M30.1698 15.085L30.1698 26.3987M30.1698 15.085L18.8561 15.085" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <button className={styles.mobileBtn}>
                <span>View details</span>
                <Icon src="/icons/arrow-top-right-orange.svg" size={IconSizes.SMALLER} />
            </button>
        </Link>
    );
}

export default ProjectCard;