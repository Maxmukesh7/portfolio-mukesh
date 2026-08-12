# Mukesh Kumar R — Developer Portfolio

## Overview

A modern, responsive, and performance-focused personal developer portfolio built with **Next.js 14**, **React 18**, and **TypeScript**. This frontend application showcases my academic background, technical skills, course certifications, software projects, and professional social profiles with interactive 3D elements and smooth animations.

---

## Features

- **Responsive Design**: Mobile-first, fully responsive layout across all device viewports.
- **Interactive UI & 3D Visuals**: Animated background scenes powered by GSAP, Framer Motion transitions, and interactive 3D models using Spline.
- **Smooth Scrolling**: Enhanced scrolling experience integrated with Lenis smooth scroll.
- **Hero & Profile Sections**: Overview of personal metrics, core focus areas, and quick navigation actions.
- **Technical Skills Showcase**: Categorized presentation of programming languages, frameworks, web technologies, and developer tools.
- **Project Gallery**: Detailed project cards featuring screenshots, key feature highlights, technology tags, and direct links to GitHub repositories and live deployments.
- **Education Timeline**: Structured display of academic qualifications and ongoing degree progress.
- **Certifications**: Technical course completion certificates with direct view links hosted on Google Drive.
- **Resume Viewing**: Embedded link to access and view resume on Google Drive.
- **Contact & Social Profiles**: Direct email integration and links to GitHub, LinkedIn, and LeetCode.
- **Dark & Light Mode**: Theme toggling enabled via `next-themes`.

---

## Sections

- **Home**: Main landing banner, headline, 3D keyboard model, sound effects, and quick call-to-action buttons.
- **About**: Profile summary, core technical focus, key strengths, and resume link.
- **Skills**: Visual representation of technical skill set across frontend, backend technologies, and tools.
- **Projects**: Portfolio section highlighting full-stack web applications and DevSecOps tools.
- **Education**: Academic history from secondary school to ongoing undergraduate engineering degree.
- **Certifications**: Technical learning certificates across Python, AWS, Cyber Security, and DevOps.
- **Contact**: Reach out information and social media links.

---

## Projects

### Automated Resume Analyzer
A MERN Stack application that analyzes resumes using AI and NLP. It extracts candidate skills, calculates ATS scores, ranks resumes, and generates AI-powered summaries to streamline recruitment.
- **GitHub**: [https://github.com/Maxmukesh7/-resume-analyzer--mern](https://github.com/Maxmukesh7/-resume-analyzer--mern)
- **Live Demo**: Not deployed

### SafePipe — DevSecOps Project
A DevSecOps security solution that automatically scans source code and Git repositories for exposed secrets (API keys, credentials, private keys) before deployment.
- **GitHub**: [https://github.com/Maxmukesh7/Safe_Pipe---DevSecOps-Project-](https://github.com/Maxmukesh7/Safe_Pipe---DevSecOps-Project-)
- **Live Demo**: [https://safe-pipe-devsecops-project-7.onrender.com/](https://safe-pipe-devsecops-project-7.onrender.com/)

### CryptoVision
A cryptocurrency analytics dashboard providing live market prices, interactive charts, watchlists, portfolio simulation, and trending coins.
- **GitHub**: [https://github.com/Maxmukesh7/cryptovision](https://github.com/Maxmukesh7/cryptovision)
- **Live Demo**: [https://cryptovision-rouge.vercel.app/](https://cryptovision-rouge.vercel.app/)

### Fruit Cart
A responsive e-commerce web application built with Django and PostgreSQL featuring product browsing, shopping cart management, and user authentication.
- **GitHub**: [https://github.com/Maxmukesh7/cart-fruit/tree/main/fruitcart](https://github.com/Maxmukesh7/cart-fruit/tree/main/fruitcart)
- **Live Demo**: [https://cart-fruit.onrender.com/](https://cart-fruit.onrender.com/)

---

## Education

### Bachelor of Engineering — Computer Science and Engineering (Cyber Security)
- **Institution**: Sri Shakthi Institute of Engineering and Technology (SIET)
- **Duration**: 2023 – 2027
- **Score**: CGPA: 7.33 (Ongoing)

### Higher Secondary Certificate (HSC)
- **Institution**: Thiyagi N G Ramaswamy Memorial Higher Secondary School
- **Year**: 2023
- **Score**: 81.5%

### Secondary School Leaving Certificate (SSLC)
- **Institution**: Kalaimagal Matric Higher Secondary School
- **Year**: 2021
- **Result**: Pass

---

## Certifications

1. **Python Course for Beginners with Certification: Mastering the Essentials** — Scaler Topics
2. **AWS Cloud Practitioner Essentials** — AWS Training & Certification
3. **Introduction to Cyber Security** — Simplilearn SkillUp
4. **Operate with DevOps** — Microsoft Learn
5. **Configure a Project and Repository Structure to Support Secure Pipelines** — Microsoft Learn

---

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Language**: TypeScript

### Styling
- **CSS Framework**: Tailwind CSS
- **CSS Preprocessor**: Sass (SCSS Modules)
- **Icons**: Lucide React, React Icons (`react-icons/si`, `react-icons/ri`, `react-icons/fa6`)

### Libraries & UI Tools
- **UI Animations**: Framer Motion
- **Scroll & Timeline Animations**: GSAP (with ScrollTrigger)
- **3D Scenes**: Spline (`@splinetool/react-spline`, `@splinetool/runtime`)
- **Smooth Scroll**: Lenis (`lenis`)
- **Carousel**: Splide (`@splidejs/react-splide`)
- **Effects**: Canvas Confetti (`canvas-confetti`)
- **Theme Provider**: next-themes
- **MDX Parser**: next-mdx-remote, gray-matter
- **DevTools Detection**: devtools-detector

### Development Tools
- **Build Tool**: Next.js SWC Compiler
- **Linter**: ESLint (`eslint-config-next`)
- **Styles Processor**: PostCSS (`tailwindcss`, `autoprefixer`)
- **Package Manager**: npm

---

## Project Structure

```text
portfolio/
├── public/
│   └── assets/             # 3D Spline scenes, sound effects, preview images, screenshots
├── src/
│   ├── app/                # App Router pages (Home, About, Projects, Blogs, Contact)
│   ├── components/         # Page sections, UI elements, navigation, and providers
│   ├── content/            # MDX blog posts
│   ├── data/               # Configuration, skills, projects, education, and certificates data
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # MDX parser and utility functions
│   ├── types/              # TypeScript definitions
│   └── utils/              # Mouse tracking and UI utilities
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and npm scripts
└── README.md               # Documentation
```

---

## Getting Started

To set up and run the project locally:

```bash
# Clone the repository
git clone https://github.com/Maxmukesh7/portfolio-mukesh.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Build

To build the project for production:

```bash
npm run build
```

To start the production server locally after building:

```bash
npm run start
```

---

## Deployment

This portfolio project is configured for deployment on **Vercel**.

---

## Author

### Mukesh Kumar R
*Computer Science Engineering — Cyber Security Student & Software Developer*

- **GitHub**: [Maxmukesh7](https://github.com/Maxmukesh7)
- **LinkedIn**: [Mukesh Kumar](https://linkedin.com/in/mukesh-kumar-0a1a72293)
- **LeetCode**: [mukeshkumar777](https://leetcode.com/u/mukeshkumar777/)
- **Email**: [mukesh2004777@gmail.com](mailto:mukesh2004777@gmail.com)
- **Resume**: [View Resume on Google Drive](https://drive.google.com/file/d/1lvNzzlnWA-O7Pytxobaphpew4Tncxh59/view?usp=sharing)

---

## License

No license has been specified for this project.
