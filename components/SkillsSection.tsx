"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java 8+", "Python", "JavaScript/TypeScript", "SQL", "HTML/CSS"]
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Figma"]
  },
  {
    title: "Backend & APIs",
    items: ["Spring Boot", "Flask", "FastAPI", "Node.js", "REST APIs", "WebSockets"]
  },
  {
    title: "Data & Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Pandas",
      "NumPy",
      "Tableau",
      "Power BI",
      "Vector DBs"
    ]
  },
  {
    title: "AI & ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Hugging Face",
      "OpenAI APIs",
      "RAG pipelines",
      "LLMs",
      "NLP (spaCy, NLTK)"
    ]
  },
  {
    title: "DevOps & Tooling",
    items: [
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Maven/Gradle",
      "Git",
      "Postman",
      "Kibana",
      "Grafana",
      "Gradio dashboards"
    ]
  }
];

export default function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="grid gap-5 md:grid-cols-3"
    >
      {groups.map((group) => (
        <motion.div
          key={group.title}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 230, damping: 20 }}
          className="rounded-2xl border border-white/10 bg-[rgba(19,19,26,0.96)] p-5"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300">
              {group.title}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono rounded-md bg-[#1c1c26] px-2.5 py-1 text-[11px] text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

