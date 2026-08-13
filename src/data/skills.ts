import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    items: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Flask", "Streamlit", "REST APIs"],
  },
  {
    category: "AI/ML & Data Science",
    items: [
      "XGBoost",
      "OpenCV",
      "NumPy",
      "Pandas",
      "GeoPandas",
      "Plotly",
      "MLP",
      "GRU",
      "LSTM",
    ],
  },
  {
    category: "Tools & Frameworks",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "MySQL",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    category: "Core CS",
    items: ["DSA", "DBMS", "OOP", "Operating Systems", "Computer Networks"],
  },
];
