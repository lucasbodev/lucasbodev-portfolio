import React from "react";
import Image from "next/image";
import bentoStyles from "@/styles/ui/bento.module.css";
import styles from "@/components/project-card/project-card.module.css";
import Heading, { HeadingTypes } from "../heading/heading.component";
import { Link } from "@/i18n/routing";
import Icon, { IconSizes } from "../icon/icon.component";

interface ProjectCardProps {
    img: string,
    name: string,
    description: string,
    vertical?: boolean
}

const ProjectCard = ({ img, name, description, vertical = false }: ProjectCardProps) => {

    return (
        <Link href="/project-details" className={`${bentoStyles.bentoCell} ${styles.projectCardContainer}`}>
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
                        <Heading type={HeadingTypes.H3}>{name}</Heading>
                        <p>{description}</p>
                    </div>
                    <div className={`${styles.arrowBtn}`}>
                        <Image
                            width={1080}
                            height={1080}
                            alt='Project Link'
                            src={'/icons/arrow-top-right.svg'}
                            className={styles.projectLinkIcon}
                        />
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