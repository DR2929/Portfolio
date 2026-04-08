import NeuralBackground from "../components/NeuralBackground";
import Hero from "../components/Hero";
import Chat from "../components/Chat";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import StatsBar from "../components/StatsBar";
import ContactForm from "../components/ContactForm";
import RevealOnScroll from "../components/RevealOnScroll";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <NeuralBackground />

      <div className="relative z-10 space-y-32 pb-24">
        <section className="section pt-24 sm:pt-32">
          <Hero />
        </section>

        <StatsBar />

        <section className="section space-y-4" id="about">
          <RevealOnScroll>
            <h2 className="section-title">About</h2>
            <p className="max-w-2xl text-sm text-gray-300">
              AI software engineer with about three years building data pipelines,
              ML models, and production backends in Python, SQL, and Java. Recent
              focus on document AI, RAG, and agentic systems for pharma supply
              chain and fintech. Strong background in ETL, validation, REST APIs,
              NLP (including BERT / Hugging Face), and classical ML (logistic
              regression, XGBoost), with experience improving data quality, model
              performance, and reliability on moderate-scale datasets.
            </p>
          </RevealOnScroll>
        </section>

        <section className="section" id="skills">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300">
              <span>Tech Stack</span>
              <span className="h-px w-16 bg-white/10" />
            </div>
            <h2 className="section-title">
              Tools I <em>trust</em>
            </h2>
          </div>
          <SkillsSection />
        </section>

        <section className="section space-y-8" id="projects">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300">
              <span>Selected Work</span>
              <span className="h-px w-16 bg-white/10" />
            </div>
            <h2 className="section-title">
              Projects that <em>ship</em>
            </h2>
          </div>
          <ProjectsSection />
        </section>

        <section className="section" id="experience">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300">
              <span>Career</span>
              <span className="h-px w-16 bg-white/10" />
            </div>
            <h2 className="section-title">
              Where I&apos;ve <em>built</em>
            </h2>
          </div>
          <ExperienceSection />
        </section>

        <section className="section space-y-8" id="ai-agent">
          <h2 className="section-title">Ask my AI Agent</h2>
          <p className="text-gray-300 max-w-2xl">
            Ask anything about my background, projects, or how I approach AI
            engineering problems. This agent is powered by the same tooling I
            use in production systems.
          </p>
          <Chat />
        </section>

        <section className="section space-y-6 pb-12 text-center" id="contact">
          <div className="flex items-center justify-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300">
            <span>Contact</span>
            <span className="h-px w-16 bg-white/10" />
          </div>
          <h2 className="section-title">
            Let&apos;s build something <em>real</em>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-300">
            Open to AI/ML and backend-heavy roles in the New York metro area
            (Jersey City, NJ).
          </p>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}

