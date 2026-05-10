import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const timeline = [
  {
    year: '2024 – Present',
    title: 'B.Tech Computer Science & Engineering',
    place: 'Rajalakshmi Engineering College, Chennai',
    detail: 'CGPA: 8.64 · Expected graduation 2027',
    icon: '',
  },
  {
    year: '',
    title: 'IEEE Technology and Engineering Management Society (TEMS) ',
    place: 'Technical Team Member',
    detail: 'Organized and voluteered technical events like hackathons, workshops, and coding competitions for students',
    icon: '',
  }
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section about">
      <div className="container about__inner" ref={ref}>
        {/* Left col */}
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">
            About <span className="accent-text">Me</span>
          </h2>
          <p className="about__bio">
            I'm <strong>Pavitha M</strong>, a Computer Science undergraduate at Rajalakshmi Engineering College,
            Chennai with a strong interest in software development, problem solving, and building practical applications. I enjoy working on projects that combine functionality with good user experience, especially tools that automate tasks or improve communication.
          </p>
          <p className="about__bio">
            I have a good foundation in Python, DSA, and core Computer Science concepts, and I’m currently exploring machine learning and cloud technologies. I am a quick learner, enjoy collaborative projects, and am eager to apply my skills to solve real-world problems.
          </p>
          <p className="about__bio">
            I’m interested in exploring domains like full-stack development, AI-powered applications, and system design, and I like learning by building real projects rather than only following tutorials. I’m continuously improving my technical skills while also focusing on writing clean, efficient, and scalable code.
          </p>

          <div className="about__contact-links">
            <a href="mailto:[EMAIL_ADDRESS]" className="about__contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              [EMAIL_ADDRESS]
            </a>
            <a href="tel:+918870830410" className="about__contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.7 16.92z" /></svg>
              +91 88708 30410
            </a>
          </div>
        </motion.div>

        {/* Right col — timeline */}
        <motion.div
          className="about__timeline"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-item__icon" />
              <div className="timeline-item__content">
                {item.year && <span className="timeline-item__year">{item.year}</span>}
                <h3 className="timeline-item__title">{item.title}</h3>
                <p className="timeline-item__place">{item.place}</p>
                {item.detail && <p className="timeline-item__detail">{item.detail}</p>}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
