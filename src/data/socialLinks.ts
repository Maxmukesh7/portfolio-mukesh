export type SocialLink = {
  name: string;
  href: string;
  type?: "link" | "email" | "phone" | "download";
  username?: string;
  color?: string;
};

export type ContactDetail = {
  title: string;
  value: string;
  href?: string;
  iconType: "email" | "phone" | "location";
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Maxmukesh7",
    username: "@Maxmukesh7",
    color: "#2ea44f",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mukesh-kumar-0a1a72293",
    username: "Mukesh Kumar",
    color: "#0a66c2",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/mukeshkumar777/",
    username: "@mukeshkumar777",
    color: "#ffa116",
  },
  {
    name: "Gmail",
    href: "mailto:mukesh2004777@gmail.com",
    username: "mukesh2004777@gmail.com",
    type: "email",
    color: "#ea4335",
  },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    title: "Email",
    value: "mukesh2004777@gmail.com",
    href: "mailto:mukesh2004777@gmail.com",
    iconType: "email",
  },
  {
    title: "Phone",
    value: "+91 6385899326",
    href: "tel:+916385899326",
    iconType: "phone",
  },
  {
    title: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    iconType: "location",
  },
];
