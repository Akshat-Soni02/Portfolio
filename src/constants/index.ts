// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "achievements",
    title: "Achievements",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "https://github.com/Akshat7603/Portfolio/",
  // },
] as const;

// Services
export const SERVICES = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  // {
  //   title: "Full Stack Developer",
  //   icon: backend,
  // },
  {
    title: "Cloud Engineer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Engineer",
    company_name: "Searce Inc",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Engineered large-scale speech-to-text pipeline using Vertex AI, enabling transcription, language detection, and anxiety scoring for millions of customer audio interactions monthly, achieving >90% accuracy across multiple languages.",
      "Contributed to the development of a scalable Spring Boot microservice and privacy-compliant AI workflows on GCP (Vertex AI, GCS, Cloud DLP), securely processing sensitive data and reducing inference latency by 35%.",
      "Built and automated end-to-end API test suites (achieving 100% coverage, resulting in 40% faster regression cycles) and deployed serverless services on GCP (Cloud Run, Cloud Scheduler, queues), improving job reliability and scalability."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Espyr",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Contributed to the foundational Phase-I development of the product as part of a 4-member team, focusing on scalability and core architecture.",
      "Built robust backend features using Java, improving API performance by 30% and ensuring system reliability under load.",
      "Led the integration of 4+ third-party services and developed a complete admin dashboard, which reduced manual operations by 40%.",
    ],
  },
] as const;

// Testimonials - Removed as requested
export const TESTIMONIALS = [] as const;

// Projects
export const PROJECTS = [
  {
    name: "DocuMind",
    description:
      "A agentic usecase to auto document your project with AI",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Google ADK",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://gitlab.com/aivolve1/DocuMind",
    live_site_link: "https://gitlab.com/aivolve1/DocuMind",
  },
  {
    name: "Expenzz",
    description:
      "A comprehensive expense tracking app that helps users manage their finances effectively by categorizing expenses, setting budgets, and providing insightful analytics.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Akshat-Soni02/ExpenseTracker",
    live_site_link: "https://play.google.com/store/apps/details?id=com.dev.akshat.atharva.expenz",
  },
  {
    name: "Wordle",
    description:
      "A web-based word guessing game inspired by the popular game Wordle, but faster and more challenging, built with Svelte for a seamless user experience.",
    tags: [
      {
        name: "Svelte",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "TS",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Akshat-Soni02/word-game",
    live_site_link: "https://word-game-jade.vercel.app/",
  },
  {
    name: "Movix",
    description:
      "A movies and series rating web app that allows users to browse, search, and view details about their favorite movies and TV shows using The Movie Database (TMDb) API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      }
    ],
    image: project4,
    source_code_link: "https://github.com/Akshat-Soni02/movix",
    live_site_link: "https://movix-dhxm-30yg0s1bw-akshat-soni02.vercel.app/",
  },
  {
    name: "Chess",
    description:
      "A multiplayer chess game built using websockets for real-time interaction, allowing users to play against each other online with a sleek and responsive design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Akshat-Soni02/chess-prototype",
    live_site_link: "https://github.com/Akshat-Soni02/chess-prototype",
  }
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Akshat-Soni02",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/-akshat-soni/",
  },
  {
    name: "X",
    icon: twitter,
    link: "https://x.com/TheAkshhh",
  },
] as const;

export const CODING_PROFILES = [
  {
    name: "LeetCode",
    platform: "LeetCode",
    rating: "1600+",
    rank: "",
    link: "https://leetcode.com/u/akshatsonibhl99/",
    color: "#FFA116",
  },
  // {
  //   name: "Codeforces",
  //   platform: "Codeforces",
  //   rating: "1380+",
  //   rank: "Pupil",
  //   link: "https://codeforces.com/profile/Akshat_7603",
  //   color: "#1F8FFF",
  // },
  // {
  //   name: "AtCoder",
  //   platform: "AtCoder",
  //   rating: "17 KYU",
  //   rank: "17 KYU",
  //   link: "https://atcoder.jp/users/Akshat_7603",
  //   color: "#00C851",
  // },
  // {
  //   name: "HackerRank",
  //   platform: "HackerRank",
  //   rating: "5★ Algorithms",
  //   rank: "5★ C++, 3★ CodeChef",
  //   link: "https://www.hackerrank.com/profile/Akshatjpandya7603",
  //   color: "#2EC866",
  // },
  {
    name: "CodeChef",
    platform: "CodeChef",
    rating: "1500+",
    rank: "",
    link: "https://www.codechef.com/users/akshat_70",
    color: "#7B241C",
  },
  // {
  //   name: "GeeksforGeeks",
  //   platform: "GFG",
  //   rating: "Practice",
  //   rank: "Problem Solver",
  //   link: "https://auth.geeksforgeeks.org/user/Akshatpanjd1w/practice",
  //   color: "#34A853",
  // },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "Open Source Contributor",
    description: "Contributions to Apache Fineract, enhancing financial inclusion through open-source software",
    icon: "🌟",
    highlight: true,
    stats: "Fineract Contributor",
    category: "Open Source",
    color: "#FFA116",
  },
  // {
  //   title: "Multi-Platform Mastery",
  //   description: "Consistent high performance across multiple competitive programming platforms",
  //   icon: "⚡",
  //   highlight: true,
  //   stats: "1380+ CF, 17 KYU AtCoder",
  //   category: "Platform Diversity",
  //   color: "#1F8FFF",
  // },
  // {
  //   title: "Global Competition Success",
  //   description: "Outstanding performance in international coding competitions with top rankings",
  //   icon: "🌍",
  //   highlight: true,
  //   stats: "Rank 559 & 596 Globally",
  //   category: "International Recognition",
  //   color: "#00C851",
  // },
  // {
  //   title: "Hackathon Champion",
  //   description: "2nd position in HackNUthon 3.0 among 100+ teams, showcasing rapid prototyping skills",
  //   icon: "🥈",
  //   highlight: true,
  //   stats: "2nd Place",
  //   category: "Hackathon",
  //   color: "#FF6B6B",
  // },
  // {
  //   title: "Problem Solving Expert",
  //   description: "Solved 1100+ Data Structures and Algorithms problems demonstrating deep technical knowledge",
  //   icon: "💡",
  //   highlight: false,
  //   stats: "1100+ Problems",
  //   category: "Algorithm Mastery",
  //   color: "#4ECDC4",
  // },
  {
    title: "App Store",
    description: "Lead and architected Expenzz - A comprehensive expense tracking app on Google Play Store",
    icon: "📱",
    highlight: true,
    stats: "Live on Play Store",
    category: "Mobile Development",
    color: "#45B7D1",
  },
  {
    title: "Medium",
    description: "Authored 1 well-received technical blog on Medium, sharing knowledge with the developer community",
    icon: "✍️",
    highlight: false,
    stats: "1 Blog",
    category: "Skill Verification",
    color: "#2EC866",
  },
  // {
  //   title: "CodeChef Division 2",
  //   description: "Maintained 1700+ rating in CodeChef Division 2, showing sustained competitive performance",
  //   icon: "🔥",
  //   highlight: false,
  //   stats: "1700+ Rating",
  //   category: "Consistent Performance",
  //   color: "#7B241C",
  // },
] as const;
