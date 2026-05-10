import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Automated Codebase Documentation Generator',
    description:
      'Generates comprehensive documentation for any codebase using LLMs. Supports multi-language repos with smart chunking, vector retrieval (ChromaDB), and structured Markdown output. Deployed with Docker + FastAPI.',
    tags: ['Python', 'FastAPI', 'Redis', 'Celery', 'Docker', 'LLM'],
    link: 'https://github.com/Pavitha-07',
  },
  {
    id: 2,
    num: '02',
    title: 'LLM Model Router',
    description:
      'Dynamic routing layer that dispatches prompts to the optimal LLM backend (GPT-4, Claude, Groq, Ollama) based on task complexity, latency SLA, and cost budget. Async task queue via Celery + Redis.',
    tags: ['Python', 'FastAPI', 'Redis', 'Celery', 'Docker'],
    link: 'https://github.com/Pavitha-07',
  },
  {
    id: 3,
    num: '03',
    title: 'CropDoc — AI Agricultural Assistant',
    description:
      'Built a full-stack AgriTech platform helping farmers make data-driven decisions through AI-powered crop recommendations, pest prediction, and real-time environmental insights.',
    tags: ['Python', 'React', 'FastAPI', 'Tailwind css', 'PostgreSQL', 'Tensorflow'],
    link: 'https://github.com/Pavitha-07',
    award: '',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="projects__header"
        >
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="accent-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            End-to-end AI and full-stack systems — from prototype to deployed product.
          </p>
        </motion.div>

        <motion.div
          className="projects__list"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={card} className="project-row">
              <div className="project-row__num">{project.num}</div>

              <div className="project-row__body">
                <div className="project-row__header">
                  <h3 className="project-row__title">{project.title}</h3>
                  {project.award && (
                    <span className="project-row__award">{project.award}</span>
                  )}
                </div>
                <p className="project-row__desc">{project.description}</p>
                <div className="project-row__tags">
                  {project.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-row__link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
