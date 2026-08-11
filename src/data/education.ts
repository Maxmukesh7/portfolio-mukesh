export type EducationItem = {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  duration: string;
  result: string;
  isPrimary: boolean;
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "bachelor",
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering (Cyber Security)",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    duration: "2023 – 2027",
    result: "CGPA: 7.33 (Ongoing)",
    isPrimary: true,
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Thiyagi N G Ramaswamy Memorial Higher Secondary School",
    duration: "2023",
    result: "Percentage: 81.5%",
    isPrimary: false,
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Kalaimagal Matric Higher Secondary School",
    duration: "2021",
    result: "Result: Pass",
    isPrimary: false,
  },
];
