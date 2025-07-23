import React from "react";
import Project, { ProjectDTO } from "@/components/project/project.component";

const ProjectDetails = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    const projects: ProjectDTO[] = [
        {
            id: 'memory-wall',
            title: 'Memory Wall',
            description: "Depuis plus de 20 ans, la Taverne Au Carré alimente un mur de la mémoire, en récoltant des photos d'époque des vétérans de la 2e guerre mondiale.<br>Plus les années passent, plus le mur est orné de protraits originaux, offerts et signés par les vétérans eux-mêmes.<br>Naquit alors l'idée d'arborer des QR codes sous les portraits, permettant aux visiteurs d'en savoir plus sur l'histoire de chacun de ces héros.",
            url: 'https://memory-wall-sepia.vercel.app/',
            client: 'La Taverne Au Carré',
            industry: 'Horeca',
            services: ['Ui design', 'développement'],
            year: 2025,
            headingImages: ['/images/memory-wall-thumbnail.png', '/images/memory-wall-list.png'],
            problem: "L’entreprise dispose d’un grand nombre de portraits de vétérans dans son établissement et elle voudrait rendre l'expérience plus riche en exposant des détails sur le parcours de chacun de ces héros. Problème: le mur est tellement remplis qu'il n'y a plus de place pour afficher des informations supplémentaires.",
            challenges: [
                'Traduction des données encodées en base de données',
                'Création de QR codes téléchargeables destinés à l’impression de stickers',
                'Création d’un design correspondant à l’ambiance de la seconde guerre mondiale'
            ],
            midImages: ['/images/soldier-details-1.png', '/images/soldier-details-2.png', '/images/soldier-details-3.png'],
            solution: "Grâce au concept de mur interactif arborant des QR codes, les visiteurs peuvent désormais parcourir les portraits des vétérans et en apprendre davantage sur chacunes de leurs histoires. De plus, des partenariats sont maintenant possibles avec les musées de la ville ne disposant pas d'autant de pièces originales.",
            benefits: [
                'Système multi-linguiste',
                'QR codes téléchargeables représentant la marque de l’établissement',
                'Design inspiré directement de la 101e Division Airborne et des journaux d’époque.'
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
            description: "Cette application permet aux étudiants d'HEC Liège de créer, consulter et enrichir des activités (importées ou créées), en ajoutant des impressions, compétences acquises et documents.<br>Ils auront accès à un agenda d’ateliers ('Workshops') pour s’y inscrire, un profil regroupant leurs activités (exportables), ainsi qu’un bilan graphique de leurs compétences acquises, également exportable.<br>L'accès étant réservé aux étudiants, pour plus de détails, consultez le lien vers le projet afin d'accéder à mon mémoire de fin d'études.",
            url: '/docs/Juin 2024 INF BODET Lucas.pdf',
            client: 'HEC Liège',
            industry: 'Éducation',
            services: ['Stage', 'développement'],
            year: 2023,
            headingImages: ['/images/hec-thumbnail.png', '/images/hec-graphs.png'],
            problem: "L’école HEC Liège manquait d’un outil pour que les étudiants puissent conserver et valoriser les activités réalisées durant leur cursus.<br>L’application vise donc à combler ce vide, en aidant les étudiants à mieux valoriser leur parcours, tout en renforçant l’image et la qualité perçue de l’enseignement à HEC Liège.",
            challenges: [
                "Intégration des interfaces (Mobile first) et création du responsive",
                "Création de mon propre cadre de travail à partir de technologies vanilla",
                'Uniformisation des données provenants des différentes bases de données existantes'
            ],
            midImages: ['/images/hec-responsive.png'],
            solution: "L'application permet aux étudiants de rassembler et exporter leurs expériences (activités, séjours, projets) afin de mieux les valoriser en entretien d'embauche. Avant cela, ils n’avaient aucun moyen de conserver ces traces.<br>Ce service renforce leur employabilité tout en améliorant l’attractivité de HEC Liège et ses chances d’obtenir ou conserver des accréditations.",
            benefits: [
                'Étudiants : conserver et valoriser leurs expériences.',
                'Emploi : renforcer leur profil et l’impact en entretien.',
                'HEC Liège : accroître attractivité et accréditations.'
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
            title: 'H2A - Ingénieur Architecte & Associés',
            description: "H2A – Ingénieur Architecte & Associés est une association qui regroupe tous les acteurs de la conception de projets au sein d’une même structure pluridisciplinaire : lr Architectes, Architectes, Architectes d’Intérieurs, Ingénieurs, Designers.",
            url: 'https://h2a-architectes.be/',
            client: 'RHMedias',
            industry: 'Immobilier',
            services: ['Développement', 'intégration'],
            year: 2025,
            headingImages: ['/images/h2a-home-desktop.png', '/images/h2a-open-desktop.png'],
            problem: "L'association manquait d'un site web afin de présenter ses réalisations. Celle-ci souhaitait une galerie en ligne qu'elle pourrait administrer facilement grâce à Wordpress. L'objectif étant que, pour chaque projet, elle puisse définir des images, des vidéos, des explications et des cartes Google maps.",
            challenges: [
                "Intégration du design dans Wordpress grâce à React",
                "Gestion des données et métadonnées grâce à JetEngine",
                "Gestion du responsive pour l'affichage des caroussels et du système de drag"
            ],
            midImages: ['/images/h2a-responsive.png'],
            solution: "Le site web, fidèle au design prévu et adapté aux différentes tailles d'écrans, permet aux membres de l'association d'ajouter tout ce qu'ils souhaitent dans les caroussels facilement grâce à Wordpress. Ainsi, grâce à cette vitrine, ils sont en mesure de présenter en détails leurs réalisations et leurs manières de procéder.",
            benefits: [
                'Présence en ligne permettant le partage de leur savoir-faire',
                "Administration simple",
                "Design correspondant à l'identité de l'entreprise"

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
            description: "Afin de faciliter le développement de futures applications web, une solide base était nécessaire. C'est dans ce but que ce projet a été créé, il fallut analyser les besoins des sites web d'aujourd'hui et y répondre avec les technologies les plus appropriées, permettant de construire des solutions robustes et au goût du jour.",
            url: 'https://next-starter-five-murex.vercel.app/',
            client: 'Moi-même',
            industry: 'Développement',
            services: ['Développement'],
            year: 2024,
            headingImages: ['/images/next-starter.png', '/images/next-starter-light.png'],
            problem: "Déjà familiarisé à React.js grâce à mon cursus scolaire et étant conscient qu'une vaste étendue de technologies ne demandent qu'à être découvertes, il fallut mettre le pied à l'étrier afin d'en tirer le maximum de bénéfices et pouvoir se tenir à jour face à toutes les offres existantes.<br>De plus, il était important que ces technos offrent une expérience développeur agréable et qu'elles soient suffisamment bien ancrée dans le paysage pour assurer une documentation riche et un haut potentiel de scalabilité.",
            challenges: [
                'Analyser les différentes technologies disponibles sur le marché et faire des choix',
                'Comprendre et réussir à assembler ces différentes technos',
                'Concevoir une base de code pouvant couvrir le plus de cas de figures possibles pour les futurs projets'
            ],
            midImages: ['/images/next-starter-responsive.png'],
            solution: "Grâce aux technologies choisies et implémentées, ce projet de base permet de construire des solutions optimisées et modernes capables d'évoluer avec le temps. De plus, les choix ayant été faits et la base étant construite de manière synthétique permettent d'accélérer et d'améliorer le développement de futurs projets.",
            benefits: [
                'Optimisation du SEO et des performances grâce à Next.js et au Server Side Rendering',
                'Implémentation simple, robuste et personnalisable de la sécurité grâce à Auth0',
                'Traduction pré-configurée grâce à Next-intl',
                "Manipulation des données facilitée grâce à Prisma et ses objets typés",
                "Gestion d'états de l'application simple et efficace grâce à Zustand",
                "Validation des formulaires plus confortable grâce à Zod lié à Conform",
                "Animations fluides grâce à Framer Motion et/ou GSAP",
                "Déploiement aisé et outils de statistiques disponibles grâce à l'écosystème de Vercel"
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