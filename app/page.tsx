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
            I&apos;m Deepika Reddy Madduri, an AI engineer in New York City who likes turning messy, real‑world data into systems that look calm from the outside—fraud‑detection dashboards, multi‑agent pipelines, and whatever else needs to quietly do the hard work in the background. 
            I run on too much coffee and too many tabs, usually with a foreign drama in a language I&apos;m still learning playing somewhere off to the side. I build systems that argue with me in logs and then stay up making sure they don&apos;t win; I&apos;m not a movie person, but give me a long, complicated story—or a stubborn bug—and I&apos;ll happily lose the weekend to figuring it out.
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
            Open to AI/ML roles, quant research, and early-stage startups in New
            York City.
          </p>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}

