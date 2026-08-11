const config = {
  title: "Mukesh Kumar R | Software Developer | Full Stack Developer",
  description: {
    long: "I build modern, scalable, and user-friendly web applications with a strong focus on performance and clean design. I enjoy turning ideas into real-world software solutions using modern technologies.",
    short:
      "Mukesh Kumar R — Software Developer | Full Stack Developer portfolio.",
  },
  keywords: [
    "Mukesh Kumar R",
    "portfolio",
    "Software Developer",
    "Full Stack Developer",
    "web development",
    "React",
    "Node.js",
    "TypeScript",
  ],
  author: "Mukesh Kumar R",
  email: "mukesh2004777@gmail.com",
  phone: "+91 6385899326",
  location: "Coimbatore, Tamil Nadu, India",
  site: "https://your-portfolio.vercel.app",
  resume: "https://drive.google.com/file/d/1lvNzzlnWA-O7Pytxobaphpew4Tncxh59/view?usp=sharing",

  // for github stars button
  githubUsername: "Maxmukesh7",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/your-username",
    linkedin: "https://linkedin.com/in/mukesh-kumar-0a1a72293",
    github: "https://github.com/Maxmukesh7",
    leetcode: "https://leetcode.com/u/mukeshkumar777/",
    facebook: "https://facebook.com/your-username",
  },
};
export { config };
