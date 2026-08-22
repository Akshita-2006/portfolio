import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "React Router", "TanStack Query", "Zustand", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT", "bcrypt", "Zod", "Socket.io"],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "Mongoose", "MySQL", "SQLite", "Supabase Storage", "Vercel"],
  },
  {
    category: "Core CS & Tools",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Git", "GitHub"],
  },
  {
    category: "AI/ML & Data",
    items: ["NumPy", "Pandas", "Scikit-learn", "XGBoost", "OpenCV", "PyTorch", "TensorFlow", "GeoPandas"],
  },
];
