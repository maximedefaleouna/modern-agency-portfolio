import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,


  //Clients images import
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "./assets";
import blog1 from "./assets/blog6.webp";
import blog2 from "./assets/blog5.jpg";
import blog3 from "./assets/blog4.webp";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

// export const whyChooseUs = [
//   {
//     title: "Proven Expertise",
//     imageIcon: shieldImage,
//     description: `With years of experience across multiple industries, our team
//                 brings deep knowledge and technical expertise to every project,
//                 ensuring solutions that are both innovative and reliable.`,
//   },
//   {
//     title: "Customized Solutions",
//     imageIcon: pencilImage,
//     description: `We understand that every business is unique. Our solutions are
//                 tailored to fit each client's specific needs, providing maximum
//                 flexibility and scalability for the future.`,
//   },
//   {
//     title: "Exceptional Support",
//     imageIcon: headsetImage,
//     description: `Our commitment doesn’t end at project delivery. We provide
//                 dedicated, ongoing support to ensure your business continues to
//                 succeed with our solutions.`,
//   },
// ];


export const whyChooseUs = [
  {
    title: "Expertise Avérée",
    imageIcon: shieldImage,
    description: `Fort de plusieurs années d'expérience dans divers secteurs, notre équipe
                apporte une connaissance approfondie et une expertise technique à chaque projet,
                garantissant des solutions à la fois innovantes et fiables.`,
  },
  {
    title: "Solutions Personnalisées",
    imageIcon: pencilImage,
    description: `Nous comprenons que chaque entreprise est unique. Nos solutions sont
                adaptées aux besoins spécifiques de chaque client, offrant une flexibilité maximale
                et une évolutivité pour l'avenir.`,
  },
  {
    title: "Support Exceptionnel",
    imageIcon: headsetImage,
    description: `Notre engagement ne s'arrête pas à la livraison du projet. Nous fournissons
                un support dédié et continu pour garantir que votre entreprise continue de
                prospérer avec nos solutions.`,
  },
];


// export const ourApproaches = [
//   {
//     title: "Client-Centered Collaboration",
//     icon: FaHandshake,
//     description: `We prioritize close collaboration, working directly with
//                   clients to fully understand their vision and challenges. This
//                   partnership ensures each solution is perfectly aligned with
//                   their business goals.`,
//   },
//   {
//     title: "Innovation-Driven Solutions",
//     icon: HiOutlineLightBulb,
//     description: `Innovation is at the heart of everything we do. We apply the
//                   latest technologies and creative problem-solving to develop
//                   solutions that drive long-term growth and competitiveness.`,
//   },
//   {
//     title: "Agile and Adaptive",
//     icon: GrSync,
//     description: `Our agile approach keeps us flexible and ready to adapt to
//                   changing needs. This method allows us to deliver scalable
//                   solutions that grow alongside your business.`,
//   },
// ];

export const ourApproaches = [
  {
    title: "Collaboration Centrée sur le Client",
    icon: FaHandshake,
    description: `Nous privilégions une collaboration étroite, en travaillant directement avec
                  les clients pour bien comprendre leur vision et leurs défis. Ce partenariat
                  garantit que chaque solution est parfaitement alignée avec
                  leurs objectifs commerciaux.`,
  },
  {
    title: "Solutions Axées sur l'Innovation",
    icon: HiOutlineLightBulb,
    description: `L'innovation est au cœur de tout ce que nous faisons. Nous appliquons les
                  technologies les plus récentes et une approche créative pour développer
                  des solutions qui favorisent la croissance à long terme et la compétitivité.`,
  },
  {
    title: "Agile et Adaptatif",
    icon: GrSync,
    description: `Notre approche agile nous permet de rester flexibles et prêts à nous adapter
                  aux besoins changeants. Cette méthode nous permet de fournir des
                  solutions évolutives qui se développent avec votre entreprise.`,
  },
];

// export const services = [
//   {
//     title: "Cloud Solutions",
//     description:
//       "Secure and scalable cloud solutions tailored to fit your business needs, enabling seamless data access and collaboration from anywhere.",
//     icon: WiDayCloudyGusts,
//   },
//   {
//     title: "Cybersecurity",
//     description:
//       "Protect your business with robust cybersecurity solutions that safeguard data and prevent unauthorized access, ensuring peace of mind.",
//     icon: BsShieldLock,
//   },
//   {
//     title: "Custom Software Development",
//     description:
//       "Develop custom software solutions that enhance efficiency and align perfectly with your business processes and goals.",
//     icon: FaCode,
//   },
//   {
//     title: "IT Consulting",
//     description:
//       " Leverage our expertise to make strategic IT decisions that drive growth and optimize your technology investments.",
//     icon: FaRegLightbulb,
//   },
//   {
//     title: "Data Analytics",
//     description:
//       "Turn raw data into actionable insights with advanced analytics that inform smarter business decisions.",
//     icon: BsBarChartLine,
//   },
//   {
//     title: "Network Infrastructure",
//     description:
//       "Optimize your business connectivity with reliable, high-speed network infrastructure solutions designed to keep your operations seamless and resilient.",
//     icon: IoGitNetworkSharp,
//   },
// ];

export const services = [
  {
    title: "Solutions Cloud",
    description:
      "Des solutions cloud sécurisées et évolutives, permettant un accès fluide aux données et une collaboration optimisée, où que vous soyez.",
    icon: WiDayCloudyGusts,
  },
  {
    title: "Cybersécurité",
    description:
      "Assurez la protection de vos données et prévenez les accès non autorisés grâce à des solutions de cybersécurité efficaces et fiables.",
    icon: BsShieldLock,
  },
  {
    title: "Développement de logiciels",
    description:
      "Concevez des logiciels site et applications qui optimisent l'efficacité de vos processus et soutiennent vos objectifs à long terme.",
    icon: FaCode,
  },
  {
    title: "Conseil en IT",
    description:
      "Profitez de notre expertise pour prendre des décisions technologiques stratégiques qui favorisent la croissance et l'optimisation de vos ressources.",
    icon: FaRegLightbulb,
  },
  {
    title: "Analyse de données",
    description:
      "Exploitez vos données pour en extraire des informations clés, permettant de guider des décisions stratégiques et éclairées.",
    icon: BsBarChartLine,
  },
  {
    title: "Infrastructure réseau",
    description:
      "Renforcez la connectivité et la résilience de vos opérations avec des solutions d'infrastructure réseau rapides et fiables.",
    icon: IoGitNetworkSharp,
  },
];




export const portfolio = [
  {
    title: "Plateforme E-Commerce Sécurisée",
    description:
      "Création d'une plateforme e-commerce simple et sécurisée pour des transactions en ligne fiables et efficaces.",
    image: portfolio1,
  },
  {
    title: "Migration vers le Cloud et hebergement",
    description:
      "Aide à la migration de données vers le cloud pour améliorer l'accès et la flexibilité tout en réduisant les coûts.",
    image: portfolio2,
  },
  {
    title: "Tableau de Bord d'Analyse en Temps Réel",
    description:
      "Conception d'un tableau de bord interactif pour analyser les données en temps réel et prendre des décisions plus rapidement.",
    image: portfolio3,
  },
  {
    title: "Solution CRM Sur-Mesure",
    description:
      "Développement d'un CRM personnalisé pour faciliter la gestion des clients et améliorer les relations commerciales.",
    image: portfolio4,
  },
  {
    title: "Surveillance Cybersécurité avec IA",
    description:
      "Mise en place d'un système de cybersécurité intelligent pour détecter et réagir aux menaces rapidement et efficacement.",
    image: portfolio5,
  },
  {
    title: "Creé votre portofolio",
    description:
      "Aide à la création de votre portfolio en ligne pour mettre en valeur vos compétences, projets et réalisations, afin de mieux présenter votre expertise et attirer l'attention des recruteurs ou clients.",
    image: portfolio6,
  },
  {
    title: "Site Web pour Hôtel",
    description:
      "Création d'un site web moderne pour un hôtel, incluant la gestion des réservations en ligne et un système de paiement sécurisé.",
    image: portfolio11,
  },
  {
    title: "Application Web de Chat",
    description:
      "Développement d'une application web de chat en temps réel, idéale pour les équipes et les entreprises souhaitant améliorer leur communication interne.",
    image: portfolio7,
  },
  {
    title: "Installation Wi-Fi pour Entreprises",
    description:
      "Mise en place de solutions Wi-Fi fiables et sécurisées adaptées aux besoins des entreprises, garantissant une connectivité continue.",
    image: portfolio8,
  },
  {
    title: "Câblage Réseau pour Bureaux",
    description:
      "Installation et optimisation du câblage réseau pour assurer une connectivité stable et rapide dans les espaces de travail.",
    image: portfolio9,
  },
  {
    title: "Formation aux Outils d'IA",
    description:
      "Organisation de formations pratiques pour apprendre à utiliser des outils d'IA et de machine learning, afin d'optimiser les processus d'entreprise.",
    image: portfolio10,
  },
];


// export const contactInfo = [
//   {
//     title: "Envoyez nous un mail",
//     description: "Fast and Reliable Support",
//     value: "maximedefa@gmail.com",
//     icon: MdOutlineAlternateEmail,
//   },
//   {
//     title: "Our Address",
//     description: "Come visit us in our office",
//     value: "First Avenue, Gwarinpa, Abuja Nigeria",
//     icon: FaLocationCrosshairs,
//   },
//   {
//     title: "Phone number",
//     description: "Give Us a call",
//     value: "+234 814 912 1918",
//     icon: FiPhoneCall,
//   },
// ];

export const contactInfo = [
  {
    title: "Envoyez-nous un email",
    description: "Support rapide et fiable",
    value: "maximedefa@gmail.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Notre adresse",
    description: "Venez nous rendre visite ",
    value: "Université de kara LPSIC",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Numéro de téléphone",
    description: "Appelez-nous pour toute question",
    value: "+228 90094164",
    icon: FiPhoneCall,
  },
];


export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
   
  },
  {
    name: "Instagram",
    icon: FaInstagram,
   
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    
  },
 
];

export const blogPost = [
  {
    title:
      "Qu'est-ce qu'une application mobile d'entreprise ?",
    content:
      "Une application mobile d'entreprise est une application développée spécifiquement pour une entreprise dans le but de répondre à une problématique précise. Partie intégrante du SI de l'entreprise, l'application vise à servir un objectif particulier, par exemple, la gestion de commerciaux ou d'agents sur le terrain.",
    image: blog1,
    link:"https://www.axopen.com/developpement-dapplication-mobile-pour-entreprise/"
  },
  {
    title:
      " la sécurité des données !!",
    content:
      "Aujourd'hui, les données digitales sont indispensables aux entreprises, et le marché du Big Data devrait peser 103 milliards de dollars d'ici 2027.",
    image: blog2,
    link:"https://www.talend.com/fr/resources/what-is-data-security/"
  },
  {
    title:
      "Le e-commerce en plein essor au Togo",
    content:
      "Au Togo, le secteur du commerce électronique a le vent en poupe et commence même par entrer dans les mœurs. De plus en plus de Togolais l’ont intégré dans leur quotidien. ",
    image: blog3,
    link:"https://www.lepoint.fr/afrique/le-e-commerce-en-plein-essor-au-togo-12-09-2021-2442758_3826.php#11"
  },
];

// export const clientsReviews = [
//   {
//     content:
//       "Datawave transformed our outdated systems into a seamless, secure infrastructure. Their team is exceptionally skilled and always available to assist.",
//     name: "Sophia Roberts",
//     jobTitle: "IT Manager, TechNova",
//     rating: 4,
//     image: client1,
//   },
//   {
//     content:
//       "Partnering with Datawave has been a game-changer for our digital operations. Their innovative approach helped us scale effortlessly.",
//     name: "Rajesh Patel",
//     jobTitle: "CEO, Alpha Logistics",
//     rating: 4,
//     image: client2,
//   },
//   {
//     content:
//       "Datawave’s cloud solutions have boosted our productivity significantly. I can’t recommend their services enough!",
//     name: "Emily Nguyen",
//     jobTitle: "Operations Manager, Zenith Retail",
//     rating: 3,
//     image: client3,
//   },
//   {
//     content:
//       "Our cybersecurity has never been stronger. Datawave identified vulnerabilities we didn’t know existed and resolved them efficiently.",
//     name: "James O’Connor",
//     jobTitle: "CTO, Shield Financial Group",
//     rating: 5,
//     image: client4,
//   },
//   {
//     content:
//       "The team at Datawave delivered ahead of schedule and exceeded expectations. Their professionalism and expertise are unmatched.",
//     name: "Fatima Yusuf",
//     jobTitle: "Project Lead, GreenTech Solutions",
//     rating: 4,
//     image: client5,
//   },
//   {
//     content:
//       "Datawave provided scalable solutions that have supported our rapid growth. Their ongoing support ensures we’re always ahead.",
//     name: "Liam Carter",
//     jobTitle: "Founder, BrightSpark Media",
//     rating: 4,
//     image: client6,
//   },
// ];

export const clientsReviews = [
  {
    content:
      "Cette équipe a transformé nos systèmes obsolètes en une infrastructure fluide et sécurisée. Leur équipe est exceptionnellement compétente et toujours disponible pour nous assister.",
    name: "Sophia Roberts",
    jobTitle: "Responsable IT, TechNova",
    rating: 4,
    image: client1,
  },
  {
    content:
      "S'associer avec Cette équipe a été un véritable tournant pour nos opérations numériques. Leur approche innovante nous a permis de croître sans effort.",
    name: "Rajesh Patel",
    jobTitle: "Directeur, Alpha Logistics",
    rating: 4,
    image: client2,
  },
  {
    content:
      "Les solutions cloud de Cette équipe ont considérablement boosté notre productivité. Je ne peux que recommander leurs services !",
    name: "Emily Nguyen",
    jobTitle: "Responsable des opérations, Zenith Retail",
    rating: 3,
    image: client3,
  },
  {
    content:
      "Notre cybersécurité n'a jamais été aussi solide. Cette équipe a identifié des vulnérabilités que nous ne connaissions pas et les a résolues efficacement.",
    name: "James O’Connor",
    jobTitle: "Responsable IT, Shield Financial Group",
    rating: 5,
    image: client4,
  },
  {
    content:
      " Cette équipe a livré avant les délais et a dépassé nos attentes. Leur professionnalisme et expertise sont incomparables.",
    name: "Fatima Yusuf",
    jobTitle: "Chef de projet, GreenTech Solutions",
    rating: 4,
    image: client5,
  },
  {
    content:
      "Cette équipe a fourni des solutions évolutives qui ont soutenu notre croissance rapide. Leur soutien continu garantit que nous restons toujours en avance.",
    name: "Liam Carter",
    jobTitle: "Responsable des opérations, BrightSpark Media",
    rating: 4,
    image: client6,
  },
];


export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "about",
      },
      {
        title: "Services",
        id: "services",
      },
      {
        title: "Testimonials",
        id: "testimonials",
      },
      {
        title: "Portfolio",
        id: "portfolio",
      },
    ],
  },
  {
    title: "Services",
    subRoutes: [
      {
        title: "Cloud Solutions",
        id: "",
      },
      {
        title: "Cybersecurity",
        id: "",
      },
      {
        title: "Software Development",
        id: "",
      },
      {
        title: "IT Consulting",
        id: "",
      },
    ],
  },
];
