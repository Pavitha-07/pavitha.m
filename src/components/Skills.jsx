import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    label: 'Languages',
    num: '01',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'C'],
  },
  {
    label: 'Frontend',
    num: '02',
    skills: ['React.js', 'HTML5', 'CSS3', 'Streamlit'],
  },
  {
    label: 'Backend & APIs',
    num: '03',
    skills: ['FastAPI', 'Celery', 'REST APIs'],
  },
  {
    label: 'Data & AI',
    num: '04',
    skills: ['LLM Integration', 'Ollama', 'OpenAI API', 'Groq', 'Claude code'],
  },
  {
    label: 'DevOps & Tools',
    num: '05',
    skills: ['Docker', 'Git', 'GitHub', 'Postman'],
  },
  {
    label: 'Databases',
    num: '06',
    skills: ['Redis', 'MySQL', 'PostgreSQL'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="skills__header"
        >
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">
            Skills &amp; <span className="accent-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            The stack I reach for when building production-ready AI and full-stack systems.
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.label} variants={item} className="ruled-card skills__card">
              <div className="skills__card-header">
                <span className="skills__num">{cat.num}</span>
                <span className="skills__cat-label">{cat.label}</span>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
