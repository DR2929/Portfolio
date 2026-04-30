export type WorkRole = {
  title: string;
  period: string;
  /** Short bullets shown on the portfolio */
  summaryBullets: string[];
  /** Full resume bullets — used only for the AI assistant context */
  resumeBullets: string[];
};

export type WorkCompany = {
  name: string;
  location: string;
  roles: WorkRole[];
};

export const workExperience: WorkCompany[] = [
  {
    name: "Montclair State University",
    location: "Montclair, NJ",
    roles: [
      {
        title: "Generative AI & Data Specialist",
        period: "Aug 2024 – Present",
        summaryBullets: [
          "Owns ETL and schema evolution across Tutor.com, study hall, and recitation data—backfills, SLAs, and ~30% fewer cross-system inconsistencies on 10K+ weekly records for downstream LLM and analytics.",
          "Data validation, PSI-based drift monitoring, and a logistic regression early-warning model (ROC-AUC 0.63→0.81) tied into LLM-assisted student support.",
          "Shipped a RAG-based advisor workflow plus LLM evaluation, guardrails, and structured outputs for grounded academic interventions."
        ],
        resumeBullets: [
          "Architected a fault-tolerant data pipeline integrating Tutor.com, study hall, and recitation datasets using ETL workflows, schema evolution controls, freshness SLAs, and automated backfill recovery, reducing cross-system inconsistencies by ~30% across 10K+ weekly records and creating reliable structured data for downstream LLM, retrieval, and predictive analytics workflows.",
          "Implemented a data validation and drift-monitoring framework using structured quality checks, PSI thresholds, and weekly evaluation cycles to detect anomalies and distribution shifts, reducing invalid records by ~20% and improving the accuracy of behavioral signals used for risk scoring, context assembly, and grounded AI-generated recommendations.",
          "Developed an early warning system using logistic regression with engineered behavioral features, class-weight balancing, and threshold tuning, improving ROC-AUC from 0.63 to 0.81 and producing calibrated risk signals that were later integrated into an LLM-assisted intervention workflow for student support decisioning.",
          "Built a RAG-based advisor support workflow by combining embeddings-driven semantic retrieval over program guidance, historical engagement patterns, and intervention rules with LLM-generated case summaries and recommended next steps, enabling natural-language querying and grounded responses for at-risk student scenarios.",
          "Designed an LLM evaluation and guardrail layer using prompt templates, structured JSON outputs, response validation checks, and stakeholder feedback loops to improve consistency, reduce unsupported recommendations, and strengthen trust in AI-assisted intervention summaries used by academic support teams."
        ]
      },
      {
        title: "Data Analyst – Center for Academic Success and Tutoring",
        period: "Feb 2024 – Aug 2024",
        summaryBullets: [
          "Consolidated and validated operational data across three teams (25K+ student records) for reporting and analysis.",
          "Built Power BI dashboards and recurring KPI reports for engagement, utilization, and team performance.",
          "Trend and gap analysis for staffing and scheduling; streamlined datasets to scale BI and later AI-ready analytics."
        ],
        resumeBullets: [
          "Consolidated, cleaned, validated, and structured operational data from 3 academic support teams across 25,000+ student records using Excel, SQL, and standardized data preparation workflows, improving data accuracy, consistency, and reliability for reporting, dashboarding, and ad hoc analysis.",
          "Built and maintained interactive dashboards and recurring reports in Power BI to track KPIs related to student engagement, attendance, service utilization, and team performance, reducing manual reporting effort and enabling faster data-driven decision-making for program managers and department leadership.",
          "Performed data analysis on tutoring, recitation, and student support datasets to identify trends, usage patterns, and performance gaps, supporting resource planning, staffing decisions, scheduling optimization, and operational analysis across the department.",
          "Improved reporting efficiency by organizing structured datasets, maintaining reporting logic, and streamlining data workflows for repeatable analysis, metric tracking, and stakeholder reporting, creating a more scalable foundation for business intelligence and performance monitoring.",
          "Supported analytics modernization initiatives by preparing clean, well-labeled datasets for exploratory analysis, query-based reporting, pattern detection, and AI-assisted insight generation, strengthening the department’s ability to move from static reporting to scalable analytics workflows."
        ]
      }
    ]
  },
  {
    name: "Accenture",
    location: "Multi-region",
    roles: [
      {
        title: "Full Stack Engineer",
        period: "Apr 2021 – Aug 2023",
        summaryBullets: [
          "Backend APIs and PostgreSQL for multi-region platforms (~5M users, 6+ countries); high-volume reporting with strong uptime.",
          "Query and index tuning (~70% faster execution; report load from minutes to under 10 seconds); SBERT semantic retrieval over 100K+ records wired into APIs.",
          "200+ production incidents triaged with Kibana/PostgreSQL; translated 100+ requirements into schemas, validation, and API contracts."
        ],
        resumeBullets: [
          "Engineered and scaled backend systems supporting multi-region applications across 6+ countries and ~5M users, designing RESTful APIs and PostgreSQL data models to handle high-volume reporting and operational workflows with high availability.",
          "Optimized database performance by restructuring complex SQL queries, indexing high-frequency access paths, and eliminating inefficient joins, reducing query execution time by ~70% and improving report load times from ~3 minutes to under 10 seconds.",
          "Designed and implemented semantic retrieval using sentence embeddings (SBERT) over ~100K+ structured and semi-structured operational records using cosine similarity for top-K matching, reducing repeated query attempts and improving first-pass retrieval effectiveness for incident investigation and reporting.",
          "Integrated retrieval outputs into backend APIs and structured response formats, enabling faster consumption of relevant results for internal users and reducing turnaround time for issue triage and operational reporting.",
          "Translated 100+ stakeholder requirements into production-ready backend features and data pipelines, defining schemas, validation logic, and API contracts that improved delivery speed by ~25% and reduced ambiguity-driven rework.",
          "Diagnosed and resolved 200+ production incidents across backend services and scheduled data workflows using Kibana and PostgreSQL logs, reducing downtime by ~30% and improving system reliability."
        ]
      }
    ]
  },
  {
    name: "Infor",
    location: "Hyderabad, India",
    roles: [
      {
        title: "Junior Software Engineer",
        period: "Oct 2020 – Mar 2021",
        summaryBullets: [
          "Spring Boot performance work: native indexed queries and pagination (~480ms→~310ms under load).",
          "OCR microservice (Python, Tesseract, logistic regression) with higher precision on labeled scans.",
          "ERP data integrity via JSON schema and constraints; JUnit/Mockito; Jenkins pipelines with fewer failed deploys."
        ],
        resumeBullets: [
          "Refactored slow REST endpoints in Spring Boot by replacing JPQL joins with composite BTREE-indexed native queries and offset-based pagination; reduced response time from ~480ms to ~310ms under ~20 concurrent users.",
          "Implemented an OCR microservice using Python, Tesseract, and logistic regression with engineered features (token density ratios, bounding-box alignment variance, keyword positional frequency); improved precision from ~0.68 to ~0.81 on ~1.2K labeled samples.",
          "Enforced data integrity in ERP workflows via JSON schema validation, strict type/null checks, and composite uniqueness constraints; reduced duplicate records by ~25% and stabilized transaction success rates to >97% across ~8K weekly entries.",
          "Developed unit and integration tests using JUnit and Mockito; identified excessive object allocation via heap profiling and refactored DTO transformations, reducing GC overhead by ~12% fewer tenured collections.",
          "Improved CI/CD reliability by standardizing Jenkins build configurations and isolating pipeline stages; reduced deployment failures by ~20% while increasing pipeline runtime by ~10–12% due to added validation gates."
        ]
      }
    ]
  }
];

export type ExperienceDisplayCompany = {
  name: string;
  location: string;
  roles: { title: string; period: string; bullets: string[] }[];
};

/** Portfolio UI: summary bullets only */
export function getWorkExperienceForDisplay(): ExperienceDisplayCompany[] {
  return workExperience.map((c) => ({
    name: c.name,
    location: c.location,
    roles: c.roles.map((r) => ({
      title: r.title,
      period: r.period,
      bullets: r.summaryBullets
    }))
  }));
}

/** Full work-history text injected into the chat system prompt */
export function getWorkExperienceForAI(): string {
  const lines: string[] = ["WORK EXPERIENCE (full resume detail)\n"];

  for (const company of workExperience) {
    lines.push(`\n${company.name} — ${company.location}`);
    for (const role of company.roles) {
      lines.push(`${role.title} | ${role.period}`);
      role.resumeBullets.forEach((b, i) => lines.push(`  ${i + 1}. ${b}`));
    }
  }

  return lines.join("\n");
}
