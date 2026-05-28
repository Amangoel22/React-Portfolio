export const personalInfo = {
  name: 'Aman Goel',
  initials: 'AG',
  title: 'Full-Stack Developer & AI Enthusiast',
  tagline: `I craft fast, accessible, and delightfully animated web experiences
 turning ideas into pixel-perfect products.`,
  location: 'Delhi, India',
  github: 'Github',
  githuburl: 'https://github.com/Amangoel22',
  linkedinUrl: 'https://www.linkedin.com/in/aman-goel2203/',
  linkedinLabel: 'LinkedIn',
  leetcodeUrl: 'https://leetcode.com/u/aman_goel/',
  portfolioImage: '/profile/profile.jpeg',
  email: 'aman.goelmg@gmail.com'
}

export const workExperience = [
  {
    id: 'we-1',
    period: 'June 2025 — August 2025',
    title: 'SDE Intern',
    organisation: 'DRDO, Ministry of Defence, Govt. of India',
    description:
      'Developed and deployed a full-stack Complaint Management Portal. Built a responsive dashboard, integrated dynamic complaint tracking and streamlined workflows.',
  }
]

export const positionsOfResponsibility = [
  {
    id: 'por-1',
    period: 'March 2026 - Present',
    title: 'Head - Student Grievance Committee',
    organisation: 'Guru Tegh Bahadur 4th Centenary Engineering College',
    description: [
      'Personally recommended by the Dean of college for appointment as Head of the Student Grievance Committee.'
    ],
  },
  {
    id: 'por-2',
    period: 'September 2024 - Present',
    title: 'Executive (Former Social Media Lead & Event Manager)',
    organisation: 'CodeGeeks - Coding Society',
    bullets: [
      'Hosted multiple tech events, workshops and seminars.',
      'Spearheaded 3 national level hackathons.',
      "Managed the society's social media presence.",
    ],
  },
  {
    id: 'por-3',
    period: 'March 2025 - Present',
    title: 'Core Placement Coordinator',
    organisation: 'GTB4CEC Training and Placement Cell',
    description: [
      'Gaining exposure to the corporate world and developing professionalism while assisting with placement drives and corporate interactions.'
    ],
  },
  {
    id: 'por-4',
    period: 'March 2025 - Present',
    title: 'Content Team Member',
    organisation: 'Wordsmith - Literary Club',
    bullets: [
      'Organised Vakyasangram 2025 and AnimeXcon.',
      'Actively contributed towards the monthly college newsletter.'
    ],
  },
]

export const education = [
  {
    id: 'ed-1',
    period: 'September 2023 — 2027',
    title: 'Bachelor of Technology (B.Tech) - Computer Science and Engineering',
    institution: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    grade: 'CGPA: 8.63',
  },
  {
    id: 'ed-2',
    period: 'March 2008 — June 2022',
    title: 'Secondary School Education',
    institution: 'Goodley Public School',
    grade: 'Percentage: 90.8%',
  },
]

export const projects = [
  {
    id: 'p-1',
    title: 'Portfolio Website v2',
    description:
      'An upscale of the previously built portfolio website with upgraded styling, react framework and more with backend integration to store visitors responses.',
    icon: 'fa-solid fa-user',
    image: '/projects/portfoliov2.png',
    liveUrl: 'https://react-portfolio-d0au.onrender.com/',
  },
  {
    id: 'p-2',
    title: 'DeepTrace',
    description:
      'An AI powered web application aimed just not at detecting deepfake videos but also providing in depth analysis of the video to determine its authenticity, supporting multiple features.',
    icon: 'fa-solid fa-user-secret',
    image: '/projects/deeptrace.png',
    // liveUrl: '#',
  },
  {
    id: 'p-3',
    title: 'Complaint Management (CMS)',
    description:
      'A full stack complaint management system developed to help an organization log, manage and resolve complaints quickly and efficiently.',
    icon: 'fa-solid fa-screwdriver-wrench',
    image: '/projects/cms.png',
  },
  {
    id: 'p-4',
    title: 'shop.com',
    description:
      'An e-commerce website built with the PERN stack, featuring user authentication, product browsing, shopping cart functionality, and a secure checkout process with Razorpay integration.',
    icon: 'fa-solid fa-cart-shopping',
    image: '/projects/shop.png',
    liveUrl: 'https://shop-com-frontend.onrender.com/',
  },
]

export const minorProjects = [
  {
    id: 'mp-1',
    title: 'Air Pollution Tracker',
    icon: 'fa-solid fa-smog',
    description: 'IoT based air pollution monitor. Powered by Arduino.',
    image: '/projects/iot.png',
  },
  {
    id: 'mp-2',
    title: 'Memory Card Game',
    description: 'A fun and interactive Memory Card Game built to challenge focus and recall. Flip cards, find matching pairs, and beat your best score.',
    icon: 'fa-solid fa-brain',
    image: '/projects/memory_card.png',
    liveUrl: 'https://pair-card-game.vercel.app/',
    codeUrl: 'https://github.com/Amangoel22/Memory-Card-Game',
  },
  {
    id: 'mp-3',
    title: 'Simon Game',
    description: 'A web-based implementation of the classic Simon Game. Gameplay involves replicating increasingly complex sequences of colors and sounds.',
    icon: 'fa-solid fa-cubes',
    image: '/projects/simon.png',
    codeUrl: 'https://github.com/Amangoel22/Simon-Game',
    liveUrl: 'https://simon-game-iota-seven.vercel.app/',
  },
  {
    id: 'mp-4',
    title: 'Crypto Price Tracker',
    description: 'A live API powered crypto price tracker which provides a detailed analysis of each crypto currency.',
    icon: 'fa-solid fa-arrow-trend-up',
    image: '/projects/crypto.png',
    codeUrl: 'https://github.com/Amangoel22/Live-Crypto-Price-Tracker',
    liveUrl: 'https://crypto-price-tracker-live.vercel.app/',
  },
]

import {
  faReact,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faPython,
  faJava,
  faGitAlt,
  faGithub,
  faTailwindCss,
} from '@fortawesome/free-brands-svg-icons'

import {
  faPeopleGroup,
  faLightbulb,
  faClock,
  faComments,
  faChessKing,
  faCompass,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'

import {
  SiVercel,
  SiRender,
  SiNetlify,
  SiPhpmyadmin,
  SiXampp,
  SiC,
  SiCplusplus,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPhp,
  SiCanva,
  SiClaude,
  SiChatbot,
  SiGooglegemini,
  SiRailway,
  SiSupabase,
  SiJsonwebtokens,
  SiPrisma,
} from 'react-icons/si'

import { TbApi } from 'react-icons/tb'

export const skills = {
  'Web Dev': {
    Frontend: [
      { name: 'HTML', icon: faHtml5 },
      { name: 'CSS', icon: faCss3Alt },
      { name: 'JavaScript', icon: faJs },
      { name: 'Bootstrap', icon: faBootstrap },
      { name: 'React.js', icon: faReact },
      { name: 'Tailwind CSS', icon: faTailwindCss },
    ],

    Backend: [
      { name: 'Node.js', icon: faNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Rest API', icon: TbApi },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'JWT Authentication', icon: SiJsonwebtokens },
    ],
  },

  Languages: [
    { name: 'C', icon: SiC },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: faJava },
    { name: 'Php', icon: SiPhp },
    { name: 'Python', icon: faPython },
    { name: 'JavaScript', icon: faJs },
  ],

  'Soft Skills': [
    { name: 'Communication', icon: faComments },
    { name: 'Problem Solving', icon: faLightbulb },
    { name: 'Team Collaboration', icon: faPeopleGroup },
    { name: 'Leadership', icon: faChessKing },
    { name: 'Adaptability', icon: faCompass },
    { name: 'Time Management', icon: faClock },
  ],

  Other: [
    { name: 'Git', icon: faGitAlt },
    { name: 'Github', icon: faGithub },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Render', icon: SiRender },
    { name: 'Netlify', icon: SiNetlify },
    { name: 'Railway', icon: SiRailway },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'PhpMyAdmin', icon: SiPhpmyadmin },
    { name: 'WAMP / XAMPP', icon: SiXampp },
    { name: 'Canva', icon: SiCanva },
    { name: 'Claude', icon: SiClaude },
    { name: 'ChatGPT', icon: SiChatbot },
    { name: 'Gemini', icon: SiGooglegemini },
  ],
}

export const certificates = [
  {
    id: 'c-1',
    title: 'Intern at CFEES, DRDO',
    issuer: 'CFEES, DRDO',
    date: 'Aug 2025',
    description:
      'Completed 8 weeks of internship at CFEES, DRDO.',
    image: '/certificates/drdo.jpeg',
  },
  {
    id: 'c-2',
    title: 'Python Bootcamp',
    issuer: 'Udemy',
    date: 'July 2024',
    description:
      'Completed python bootcamp from udemy, diving deep into the language.',
    image: '/certificates/python.jpeg',
  },
  {
    id: 'c-3',
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'May 2026',
    description:
      'Understood web development concepts in PERN stack.',
    image: '/certificates/web.jpg',
  },
]

export const achievements = [
  'Top 19% at Leetcode Contents (As of May 2026)',
  'Smart India Hackathon - Internal Hackathon Winner',
  'House Prefect - Captain',
  '7 Days DSA Challenge - CodeGeeks',
  'Literary Competition Winner - Story Telling',
  'Academic Rank Holder',
  'NSO Rank Holder',
]

export const tracks = [
  {
    title: "Como Vamos",
    artist: "Casa Rosa",
    src: "/music/Como Vamos.mp3"
  },
  {
    title: "Fields of fariness",
    artist: "Patrick Jordan",
    src: "/music/Fields of fariness.mp3"
  },
  {
    title: "Icelandic Arpeggios",
    artist: "Div Kid",
    src: "/music/Icelandic Arpeggios.mp3"
  }
]
