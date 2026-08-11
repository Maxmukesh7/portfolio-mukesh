export type Certificate = {
  id: string;
  title: string;
  provider: string;
  category: string;
  completion: string;
  iconType: "python" | "aws" | "security" | "devops" | "secops";
  iconBg: string;
  badgeColor: string;
  driveUrl: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "scaler-python",
    title: "Python Course for Beginners With Certification: Mastering the Essentials",
    provider: "Scaler Topics",
    category: "Python Programming",
    completion: "26 November 2025",
    iconType: "python",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    driveUrl: "https://drive.google.com/file/d/1-3DPxcQg4TmWvzbLbkBRebwPyFforiGJ/view?usp=sharing",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS Training & Certification",
    category: "Cloud Computing",
    completion: "02 July 2026",
    iconType: "aws",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    driveUrl: "https://drive.google.com/file/d/17zBDDbrywTAytBpvzFhoVYVv05VIAw3x/view?usp=sharing",
  },
  {
    id: "simplilearn-cybersecurity",
    title: "Introduction to Cyber Security",
    provider: "Simplilearn SkillUp",
    category: "Cyber Security",
    completion: "25 September 2025",
    iconType: "security",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    driveUrl: "https://drive.google.com/file/d/1aRtXCssnKK9Imb8X2XTxC98gPMs4jXTE/view?usp=sharing",
  },
  {
    id: "microsoft-operate-devops",
    title: "Operate with DevOps",
    provider: "Microsoft",
    category: "DevOps",
    completion: "10 December 2025",
    iconType: "devops",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    badgeColor: "border-sky-500/30 text-sky-400 bg-sky-500/10",
    driveUrl: "https://drive.google.com/file/d/17Wir8_uHo9coMAuVE7i02pjmqHFH9E21/view?usp=sharing",
  },
  {
    id: "microsoft-secure-pipelines",
    title: "Configure a project and repository structure to support secure pipelines",
    provider: "Microsoft",
    category: "DevSecOps",
    completion: "10 December 2025",
    iconType: "secops",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    driveUrl: "https://drive.google.com/file/d/1Rdc4DDfrLj5A3wwRqCQeSnkk7_lmYNBY/view?usp=sharing",
  },
];

export default CERTIFICATES;
