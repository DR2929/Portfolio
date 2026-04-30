import NeuralBackground from "../components/NeuralBackground";
import Hero from "../components/Hero";
import Chat from "../components/Chat";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import { getWorkExperienceForDisplay } from "../lib/workExperience";
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
              AI-enabled data and software professional with experience across
              generative AI workflows, data analytics, backend engineering, and
              applied machine learning. I&apos;ve built and supported RAG-based
              systems, LLM-integrated decision-support workflows, semantic
              retrieval pipelines, predictive models, and analytics dashboards
              using Python, SQL, Power BI, PostgreSQL, and modern AI tooling.
            </p>
            <p className="max-w-2xl text-sm text-gray-300">
              Hands-on experience in data validation, ETL, reporting
              automation, API development, and production support, with a track
              record of improving data reliability, retrieval effectiveness,
              system performance, and operational decision-making. MS in Computer
              Science from Montclair State University (GPA 3.9); BTech in
              Electronics &amp; Communication Engineering from Bharath
              Institute of Engineering and Technology, India.
            </p>
            <p className="max-w-2xl text-sm text-gray-300">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber-300/90">
                Coursework &amp; academic projects
              </span>
              <br />
              Software Engineering, Algorithms &amp; Data Structures, Operating
              Systems, Machine Learning, Computer Architecture. Projects include
              multi-agent AI systems (LLMs, RAG), an ML-based attendance system,
              and Android/mobile applications.
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
          <ExperienceSection companies={getWorkExperienceForDisplay()} />
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
            Open to AI/ML, data engineering, and backend roles in the NYC metro
            area (Jersey City / remote-friendly).
          </p>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}

