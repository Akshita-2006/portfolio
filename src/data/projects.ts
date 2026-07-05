import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "asd-prognosis",
    title: "ASD Prognosis",
    tagline: "AI-powered Autism Spectrum Disorder screening system",
    category: "Healthcare AI",
    status: "Live",
    description:
      "An AI-powered Autism Spectrum Disorder screening system combining AQ-10 screening, facial behavioural analysis, and explainable machine learning for interpretable probability estimation.",
    longDescription: [
      "ASD Prognosis is a screening system designed to support early identification of Autism Spectrum Disorder by combining structured questionnaire data (AQ-10) with facial behavioural analysis derived from computer vision.",
      "The system uses an XGBoost classifier trained on screening data, paired with an OpenCV-based facial analysis pipeline, to produce a calibrated screening probability rather than a binary output — making the result more interpretable for clinicians and caregivers.",
      "The full pipeline is deployed as an interactive Streamlit application, with explainable AI components that surface which features drove a given prediction.",
    ],
    tech: [
      "XGBoost",
      "OpenCV",
      "Streamlit",
      "Python",
      "AQ-10",
      "Explainable AI",
    ],
    metrics: [
      { label: "Accuracy", value: "96.91%" },
      { label: "F1 Score", value: "0.952" },
      { label: "ROC-AUC", value: "0.999" },
    ],
    features: [
      "Explainable AI predictions",
      "Clinical probability calibration",
      "Facial behavioural analysis via OpenCV",
      "Interactive Streamlit deployment",
    ],
    githubUrl: "https://github.com/Akshita-2006/ASDPrognosis",
    demoUrl: "https://asdprognosis.streamlit.app/",
    featured: true,
  },
  {
    slug: "ayushscan",
    title: "AyushScan",
    tagline: "AI-powered healthcare bill analysis platform",
    category: "Full Stack AI",
    status: "Production Prototype",
    description:
      "A production-grade healthcare platform that combines OCR, generative AI, and public healthcare datasets to detect overpricing, identify savings opportunities, and improve healthcare accessibility.",
    longDescription: [
      "AyushScan analyzes hospital and pharmacy bills to help patients understand whether they are being overcharged. An OCR pipeline extracts line items from scanned or photographed bills, which are then analyzed using the Gemini AI model.",
      "Extracted medicine and procedure costs are compared against Jan Aushadhi generic pricing to flag potential overpricing, and the system recommends applicable government health schemes based on the bill context.",
      "A multilingual chatbot helps users navigate their results and ask questions in their preferred language, and a hospital search feature helps users locate affordable care nearby.",
    ],
    tech: [
      "Python",
      "Flask",
      "Gemini API",
      "OCR",
      "SQLite",
      "OpenStreetMap API",
      "NLP",
    ],
    features: [
      "OCR-based bill digitization pipeline",
      "Gemini AI-powered bill analysis",
      "Jan Aushadhi price comparison",
      "Overpricing detection",
      "Government scheme recommendations",
      "Multilingual chatbot support",
      "Hospital search",
    ],
    githubUrl: "https://github.com/JASKAMRA/AyushSCAN",
    featured: true,
  },
  {
    slug: "ev-adoption-forecasting",
    title: "EV Adoption Forecasting",
    tagline:
      "Forecasting electric mobility adoption using machine learning and time series analysis",
    category: "Forecasting",
    status: "Live",
    description:
      "A forecasting system that leverages machine learning and historical EV adoption data to model future electric mobility trends for infrastructure and sustainability planning.",
    longDescription: [
      "This project forecasts electric vehicle adoption trends by applying time series and machine learning techniques to historical adoption data.",
      "The pipeline includes data preprocessing, outlier handling, and comparison of forecasting models to identify trends useful for sustainability planning and policy decisions.",
    ],
    tech: ["Python", "Pandas", "Time Series", "Machine Learning"],
    features: [
      "Data preprocessing and cleaning",
      "Outlier handling",
      "Forecasting model comparison",
      "Trend visualization",
      "Sustainability-focused applications",
    ],
    githubUrl: "https://github.com/Akshita-2006/WEEK-1",
    demoUrl: "https://ev-adoption-forecasting-model.streamlit.app/",
  },
  {
    slug: "neuroadapt-ai",
    title: "NeuroAdapt AI",
    tagline:
      "AI-powered adaptive learning and accessibility powered by generative AI",
    category: "Accessibility Tech",
    status: "Active Development",
    description:
      "An AI-powered adaptive learning browser extension focused on accessibility and personalized education, built for the Prompt-to-Product: Build with Gemini competition.",
    longDescription: [
      "NeuroAdapt AI is an adaptive learning extension designed to make digital content more accessible by personalizing how information is presented based on individual learning needs.",
      'Built for the "Prompt-to-Product: Build with Gemini" competition, the project won first place among 100+ teams, validating its architecture and approach to accessible, AI-driven personalization.',
      "The roadmap includes expanding adaptive content types, deeper personalization models, and broader platform integrations.",
    ],
    tech: ["Gemini API", "JavaScript", "Browser Extension", "Accessibility"],
    features: [
      "Competition-winning entry: Prompt-to-Product, Build with Gemini",
      "Adaptive content architecture for accessibility",
      "Personalized learning experience engine",
      "Roadmap: expanded personalization models and platform integrations",
    ],
    githubUrl: "https://github.com/tusharsingh212/neuroadapt-ai",
  },
];
