import React from "react";
import Project, { ProjectDTO } from "@/components/project/project.component";
import { getTranslations } from "next-intl/server";

const ProjectDetails = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    const t = await getTranslations('ProjectDetails');

    const richTranslation = (name: string) => {
        return t.rich(name, {
            br: () => <br />
        });
    }

    const projects: ProjectDTO[] = [
        {
            id: 'memory-wall',
            title: 'Memory Wall',
            description: t('mwDescription'),
            url: 'https://memory-wall-sepia.vercel.app/',
            client: 'La Taverne Au Carré',
            industry: t('mwIndustry'),
            services: [t('uiDesign'), t('development')],
            year: 2025,
            headingImages: ['/images/memory-wall-thumbnail.png', '/images/memory-wall-list.png'],
            problem: t('mwProblem'),
            challenges: [
                t('mwChallenge1'),
                t('mwChallenge2'),
                t('mwChallenge3')
            ],
            midImages: ['/images/soldier-details-1.png', '/images/soldier-details-2.png', '/images/soldier-details-3.png'],
            solution: t('mwSolution'),
            benefits: [
                t('mwBenefit1'),
                t('mwBenefit2'),
                t('mwBenefit3')
            ],
            endImages: ['/images/memory-wall-languages.png', '/images/memory-wall-qr.png'],
            technologies: [
                { logo: '/images/next.svg', name: 'Next.js', url: 'https://nextjs.org/' },
                { logo: '/images/prisma.svg', name: 'Prisma', url: 'https://www.prisma.io/' },
                { logo: '/images/auth0.svg', name: 'Auth0', url: 'https://auth0.com/' },
                { logo: '/images/zod.svg', name: 'Zod', url: 'https://zod.dev/' },
                { logo: '/images/next-intl.svg', name: 'Next-intl', url: 'https://next-intl.dev/' },
                { logo: '/images/cloud-translation.svg', name: 'Cloud Translation', url: 'https://cloud.google.com/translate' },
                { logo: '/images/github.svg', name: 'GitHub', url: 'https://github.com/' },
                { logo: '/images/figma.svg', name: 'Figma', url: 'https://www.figma.com/' },
                { logo: '/images/vercel.svg', name: 'Vercel', url: 'https://vercel.com/home' },
            ]
        },
        {
            id: 'my-skills-logbook',
            title: 'My Skills Logbook',
            description: t('hecDescription'),
            url: '/docs/Juin 2024 INF BODET Lucas.pdf',
            client: 'HEC Liège',
            industry: t('hecIndustry'),
            services: [t('internship'), t('development')],
            year: 2023,
            headingImages: ['/images/hec-thumbnail.png', '/images/hec-graphs.png'],
            problem: t('hecProblem'),
            challenges: [
                t('hecChallenge1'),
                t('hecChallenge2'),
                t('hecChallenge3')
            ],
            midImages: ['/images/hec-responsive.png'],
            solution: t('hecSolution'),
            benefits: [
                t('hecBenefit1'),
                t('hecBenefit2'),
                t('hecBenefit3')
            ],
            endImages: ['/images/hec-pdf-skills.png', '/images/hec-pdf-timeline.png'],
            technologies: [
                { logo: '/images/php.svg', name: 'PHP', url: 'https://www.php.net/' },
                { logo: '/images/mysql.svg', name: 'MySql', url: 'https://www.mysql.com/' },
                { logo: '/images/phpUnit.svg', name: 'PHPUnit', url: 'https://phpunit.de/' },
                { logo: '/images/bootstrap.svg', name: 'Bootstrap', url: 'https://getbootstrap.com/' },
                { logo: '/images/jquery.svg', name: 'jQuery', url: 'https://jquery.com/' },
                { logo: '/images/pdfMake.svg', name: 'PdfMake', url: 'https://www.npmjs.com/package/pdfmake' },
                { logo: '/images/html2canvas.svg', name: 'html2canvas', url: 'https://html2canvas.hertzen.com/' },
                { logo: '/images/dom-to-image.svg', name: 'dom-to-image', url: 'https://www.npmjs.com/package/dom-to-image/v/2.2.1' },

            ]
        },
        {
            id: 'h2a',
            title: t('h2aTitle'),
            description: t('h2aDescription'),
            url: 'https://h2a-architectes.be/',
            client: 'RHMedias',
            industry: t('h2aIndustry'),
            services: [t('development')],
            year: 2025,
            headingImages: ['/images/h2a-home-desktop.png', '/images/h2a-open-desktop.png'],
            problem: t('h2aProblem'),
            challenges: [
                t('h2aChallenge1'),
                t('h2aChallenge2'),
                t('h2aChallenge3')
            ],
            midImages: ['/images/h2a-responsive.png'],
            solution: t('h2aSolution'),
            benefits: [
                t('h2aBenefit1'),
                t('h2aBenefit2'),
                t('h2aBenefit3')

            ],
            endImages: ['/images/h2a-side-note.png', '/images/h2a-quote.png'],
            technologies: [
                { logo: '/images/wordpress.svg', name: 'Wordpress', url: 'https://wordpress.com/' },
                { logo: '/images/react.svg', name: 'React.js', url: 'https://react.dev/' },
                { logo: '/images/react-query.svg', name: 'React Query', url: 'https://www.npmjs.com/package/react-query' },
                { logo: '/images/jetengine.svg', name: 'JetEngine', url: 'https://crocoblock.com/plugins/jetengine/' },
                { logo: '/images/php.svg', name: 'PHP', url: 'https://www.php.net/' },
                { logo: '/images/mysql.svg', name: 'MySql', url: 'https://www.mysql.com/' },
                { logo: '/images/mamp.svg', name: 'MAMP', url: 'https://www.mamp.info/en/windows/' },
            ]
        },
        {
            id: 'next-starter',
            title: 'Next Starter',
            description: t('nextDescription'),
            url: 'https://next-starter-five-murex.vercel.app/',
            client: t('nextClient'),
            industry: t('development'),
            services: [t('development')],
            year: 2024,
            headingImages: ['/images/next-starter.png', '/images/next-starter-light.png'],
            problem: t('nextProblem'),
            challenges: [
                t('nextChallenge1'),
                t('nextChallenge2'),
                t('nextChallenge3')
            ],
            midImages: ['/images/next-starter-responsive.png'],
            solution: t('nextSolution'),
            benefits: [
                t('nextBenefit1'),
                t('nextBenefit2'),
                t('nextBenefit3'),
                t('nextBenefit4'),
                t('nextBenefit5'),
                t('nextBenefit6'),
                t('nextBenefit7'),
                t('nextBenefit8')
            ],
            endImages: ['/images/next-starter-zustand.png', '/images/next-starter-admin.png'],
            technologies: [
                { logo: '/images/next.svg', name: 'Next.js', url: 'https://nextjs.org/' },
                { logo: '/images/prisma.svg', name: 'Prisma', url: 'https://www.prisma.io/' },
                { logo: '/images/auth0.svg', name: 'Auth0', url: 'https://auth0.com/' },
                { logo: '/images/zod.svg', name: 'Zod', url: 'https://zod.dev/' },
                { logo: '/images/next-intl.svg', name: 'Next-intl', url: 'https://next-intl.dev/' },
                { logo: '/images/cloud-translation.svg', name: 'Cloud Translation', url: 'https://cloud.google.com/translate' },
                { logo: '/images/daisy.svg', name: 'daisyUi', url: 'https://daisyui.com/' },
                { logo: '/images/motion.svg', name: 'Framer Motion', url: 'https://motion.dev/' },
                { logo: '/images/gsap.svg', name: 'GSAP', url: 'https://gsap.com/' },
                { logo: '/images/github.svg', name: 'GitHub', url: 'https://github.com/' },
                { logo: '/images/figma.svg', name: 'Figma', url: 'https://www.figma.com/' },
                { logo: '/images/vercel.svg', name: 'Vercel', url: 'https://vercel.com/home' },
            ]
        },
    ];

    return (
        <Project {...(projects.find((project) => project.id === id)!)} />
    );
}

export default ProjectDetails;