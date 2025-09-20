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
  //   link: "https://github.com/Manav7603/Portfolio/",
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
  {
    title: "Full Stack Developer",
    icon: backend,
  },
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
      "Developing full-stack web applications using React.js, Node.js, and modern JavaScript frameworks.",
      "Building responsive and interactive user interfaces with modern CSS frameworks like Tailwind CSS.",
      "Implementing backend APIs and database management using MongoDB and SQL databases.",
      "Working with clients to understand requirements and deliver high-quality solutions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Haraxy Technologies",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Created multiple web applications including CMS, ChatBot, and Stock Market Prediction systems.",
      "Developed responsive web applications using HTML, CSS, JavaScript, and Python.",
      "Implemented modern UI/UX designs with focus on user experience and accessibility.",
      "Built and maintained various projects showcasing different technologies and frameworks.",
    ],
  },
] as const;

// Testimonials - Removed as requested
export const TESTIMONIALS = [] as const;

// Projects
export const PROJECTS = [
  {
    name: "CMS - Content Management System",
    description:
      "A comprehensive Content Management System built with JavaScript that allows users to create, edit, and manage content with an intuitive interface and robust backend functionality.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Manav7603/CMS",
    // live_site_link: "https://github.com/Manav7603/CMS",
  },
  {
    name: "ChatBot with Chat Application",
    description:
      "An intelligent chatbot application that provides real-time chat functionality with AI-powered responses, built using modern JavaScript technologies and featuring a clean, responsive UI.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "chat",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Manav7603/ChatBot-with-Chat-Application",
    live_site_link: "https://github.com/Manav7603/ChatBot-with-Chat-Application",
  },
  {
    name: "Chat with Document",
    description:
      "An innovative web application that enables users to interact with documents through chat interface, allowing for document analysis and Q&A functionality using AI technology.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "document",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Manav7603/Chat-with-Document",
    // live_site_link: "https://github.com/Manav7603/Chat-with-Document",
  },
  {
    name: "Movie Ticket Booking System",
    description:
      "A comprehensive movie ticket booking system developed in C that provides users with an efficient way to browse movies, select seats, and book tickets with a user-friendly interface.",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
      {
        name: "booking",
        color: "green-text-gradient",
      },
      {
        name: "system",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Manav7603/Movie-Ticket-Booking-System",
    // live_site_link: "https://github.com/Manav7603/Movie-Ticket-Booking-System",
  },
  {
    name: "Stock Market Prediction",
    description:
      "A machine learning-powered application that analyzes stock market data and provides predictions using advanced algorithms, built with Python and Jupyter Notebook for data analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "jupyter",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Manav7603/Stock-Market-Prediction",
    // live_site_link: "https://github.com/Manav7603/Stock-Market-Prediction",
  },
  {
    name: "Store Management System",
    description:
      "A comprehensive store management system built with Python that handles inventory, sales, customer data, and provides detailed analytics for efficient store operations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "inventory",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Manav7603/Store-Management-System",
    // live_site_link: "https://github.com/Manav7603/Store-Management-System",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Manav7603",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/manav-pandya7603/",
  },
  {
    name: "X",
    icon: twitter,
    link: "https://x.com/ManavJAp",
  },
] as const;

export const CODING_PROFILES = [
  {
    name: "LeetCode",
    platform: "LeetCode",
    rating: "1900+",
    rank: "Knight (Top 4% globally)",
    link: "https://leetcode.com/Manav_7603/",
    color: "#FFA116",
  },
  {
    name: "Codeforces",
    platform: "Codeforces",
    rating: "1380+",
    rank: "Pupil",
    link: "https://codeforces.com/profile/Manav_7603",
    color: "#1F8FFF",
  },
  {
    name: "AtCoder",
    platform: "AtCoder",
    rating: "17 KYU",
    rank: "17 KYU",
    link: "https://atcoder.jp/users/Manav_7603",
    color: "#00C851",
  },
  {
    name: "HackerRank",
    platform: "HackerRank",
    rating: "5★ Algorithms",
    rank: "5★ C++, 3★ CodeChef",
    link: "https://www.hackerrank.com/profile/manavjpandya7603",
    color: "#2EC866",
  },
  {
    name: "CodeChef",
    platform: "CodeChef",
    rating: "1700+",
    rank: "Div 2",
    link: "https://www.codechef.com/users/manav7603",
    color: "#7B241C",
  },
  {
    name: "GeeksforGeeks",
    platform: "GFG",
    rating: "Practice",
    rank: "Problem Solver",
    link: "https://auth.geeksforgeeks.org/user/manavpanjd1w/practice",
    color: "#34A853",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "LeetCode Knight",
    description: "Achieved Knight status with 1900+ rating, placing in top 4% globally",
    icon: "🏆",
    highlight: true,
    stats: "1900+ Rating",
    category: "Competitive Programming",
    color: "#FFA116",
  },
  {
    title: "Multi-Platform Mastery",
    description: "Consistent high performance across multiple competitive programming platforms",
    icon: "⚡",
    highlight: true,
    stats: "1380+ CF, 17 KYU AtCoder",
    category: "Platform Diversity",
    color: "#1F8FFF",
  },
  {
    title: "Global Competition Success",
    description: "Outstanding performance in international coding competitions with top rankings",
    icon: "🌍",
    highlight: true,
    stats: "Rank 559 & 596 Globally",
    category: "International Recognition",
    color: "#00C851",
  },
  {
    title: "Hackathon Champion",
    description: "2nd position in HackNUthon 3.0 among 100+ teams, showcasing rapid prototyping skills",
    icon: "🥈",
    highlight: true,
    stats: "2nd Place",
    category: "Hackathon",
    color: "#FF6B6B",
  },
  {
    title: "Problem Solving Expert",
    description: "Solved 1100+ Data Structures and Algorithms problems demonstrating deep technical knowledge",
    icon: "💡",
    highlight: false,
    stats: "1100+ Problems",
    category: "Algorithm Mastery",
    color: "#4ECDC4",
  },
  {
    title: "App Store Success",
    description: "Co-Architected Expenzz (Beta) - A comprehensive expense tracking app on Google Play Store",
    icon: "📱",
    highlight: true,
    stats: "Live on Play Store",
    category: "Mobile Development",
    color: "#45B7D1",
  },
  {
    title: "HackerRank Excellence",
    description: "5-star rating in Algorithms and C++, 3-star in CodeChef, demonstrating consistent performance",
    icon: "⭐",
    highlight: false,
    stats: "5★ Algorithms",
    category: "Skill Verification",
    color: "#2EC866",
  },
  {
    title: "CodeChef Division 2",
    description: "Maintained 1700+ rating in CodeChef Division 2, showing sustained competitive performance",
    icon: "🔥",
    highlight: false,
    stats: "1700+ Rating",
    category: "Consistent Performance",
    color: "#7B241C",
  },
] as const;
