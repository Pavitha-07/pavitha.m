import ParticlesCanvas from './canvas/ParticlesCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* Fixed 3D background */}
      <ParticlesCanvas />

      {/* Overlay radial gradients for depth */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 70% 50% at 10% 10%, rgba(163,230,53,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Scrollable page content */}
      <div id="page">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
