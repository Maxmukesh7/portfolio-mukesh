export type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  src: string;
  github?: string;
  live?: string;
  docs?: string;
};

export const PROJECTS: FeaturedProject[] = [
  {
    id: "cryptovision",
    title: "CryptoVision",
    category: "Frontend Web Application",
    description:
      "A cryptocurrency analytics dashboard that provides live market prices, interactive charts, watchlists, portfolio simulation, trending coins, and detailed market insights.",
    features: [
      "Live Market Data",
      "Interactive Charts",
      "Watchlist",
      "Portfolio Simulator",
      "Coin Comparison",
      "Trending Coins",
    ],
    techStack: ["React", "JavaScript", "Chart.js", "Coinpaprika API", "CSS"],
    src: "/assets/projects-screenshots/cryptovision.png",
    github: "https://github.com/Maxmukesh7/cryptovision",
    live: "https://cryptovision-rouge.vercel.app/",
  },
  {
    id: "fruit-cart",
    title: "Fruit Cart",
    category: "Full Stack Web Application",
    description:
      "A responsive e-commerce application built with Django that allows users to browse products, manage shopping carts, authenticate users, and place orders through a clean and modern interface.",
    features: [
      "User Authentication",
      "Shopping Cart",
      "Product Search",
      "Category Filter",
      "Order Management",
      "Admin Dashboard",
    ],
    techStack: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    src: "/assets/projects-screenshots/fruitcart.png",
    github: "https://github.com/Maxmukesh7/cart-fruit/tree/main/fruitcart",
    live: "https://cart-fruit.onrender.com/",
  },
  {
    id: "safepipe-secret-leak-detection",
    title: "SafePipe – Secret Leak Detection in CI/CD Pipelines",
    category: "DevSecOps Security Tool",
    description:
      "A DevSecOps security solution that automatically scans source code and Git repositories for exposed secrets before deployment. It detects API keys, access tokens, passwords, private keys, and other sensitive credentials, preventing accidental leaks during the CI/CD process.",
    features: [
      "Automated Secret Scanning",
      "GitHub Repository Integration",
      "Manual & Headless Scan Modes",
      "Regex & Pattern-Based Detection",
      "Email Alerts",
      "Detailed Security Reports",
      "CI/CD Pipeline Integration",
      "Fast Repository Scanning",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "GitHub API",
      "Regex",
      "Docker",
      "JSON",
      "SMTP",
      "Git",
      "CI/CD",
    ],
    src: "/assets/projects-screenshots/safepipe.png",
    github: "https://github.com/Maxmukesh7/Safe_Pipe---DevSecOps-Project-",
    live: "https://safe-pipe-devsecops-project-7.onrender.com/",
  },
  {
    id: "automated-resume-analyzer",
    title: "Automated Resume Analyzer",
    category: "Full Stack Web Application",
    description:
      "A MERN Stack application that analyzes resumes using AI and NLP. It extracts skills, calculates ATS scores, ranks resumes, and generates AI-powered summaries to help recruiters quickly evaluate candidates.",
    features: [
      "Resume Upload",
      "ATS Score",
      "Resume Ranking",
      "NLP Skill Extraction",
      "AI Summary",
      "Recruiter Dashboard",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "NLP",
      "Gemini AI",
    ],
    src: "/assets/projects-screenshots/mern-chat/mern1.png",
    github: "https://github.com/Maxmukesh7/-resume-analyzer--mern",
  },
];

export default PROJECTS;
