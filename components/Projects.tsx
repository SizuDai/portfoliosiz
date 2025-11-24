import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import ExpressionsOverlay from './ExpressionsOverlay';

const projects: Project[] = [
  {
    id: 1,
    title: "Top After Effects Essential Expressions",
    category: "After Effects Tools & Scripts",
    year: "2025",
    image: "https://images.unsplash.com/photo-1501780392773-287d506245a5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "SheetSync: Product Manager App",
    category: "Inventory & Data Automation",
    year: "2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
];

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative cursor-pointer perspective-1000"
    >
      <div
        className="relative overflow-hidden rounded-xl mb-6 bg-zinc-900 shadow-2xl border border-zinc-800 group-hover:border-brand group-hover:border-opacity-50 transition-colors duration-500"
        style={{ transform: "translateZ(0px)", aspectRatio: '4/3' }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-20 z-10 group-hover:bg-opacity-0 transition-colors duration-500"
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
          style={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.7 }}
        />

        {/* Floating Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ transform: "translateZ(40px)" }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-brand backdrop-blur-md border border-white border-opacity-20 rounded-full flex items-center justify-center shadow-brand opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
          >
            <ArrowUpRight className="text-black w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>

      <div className="flex justify-between items-end border-b border-zinc-800 pb-4 group-hover:border-brand transition-colors duration-500" style={{ transform: "translateZ(20px)" }}>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-brand transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm uppercase tracking-widest group-hover:text-zinc-300 transition-colors">{project.category}</p>
        </div>
        <span className="text-zinc-700 font-mono text-xs border border-zinc-800 px-2 py-1 rounded group-hover:border-brand group-hover:text-brand transition-colors">{project.year}</span>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [showExpressions, setShowExpressions] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.id === 1) {
      setShowExpressions(true);
    } else if (project.id === 2) {
      window.open("https://sheetsync.sizansmith.com.np/", "_blank");
    }
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-dark relative z-30 overflow-visible" style={{ minHeight: '50vh' }}>
      <motion.div
        initial={{ opacity: 1, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-zinc-900 pt-16"
      >
        <div className="relative z-10 pl-2 pr-4 py-8 -ml-2">
          <h2 className="font-black uppercase tracking-tighter mb-0 text-white leading-none inline-block" style={{ fontSize: '6vw' }}>
            Other Projects
          </h2>
          <p className="text-zinc-400 max-w-lg text-lg leading-relaxed ml-2 mt-4">
            Experimental lab, tools, and motion studies.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <footer className="mt-32 pt-12 border-t border-zinc-900 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-zinc-600 text-xs uppercase tracking-widest">© 2024 Sizan Smith Lamichhane</span>
          <span className="text-zinc-800 text-xs font-mono">Motion • Design • Code</span>
        </div>
      </footer>

      <AnimatePresence>
        {showExpressions && (
          <ExpressionsOverlay onClose={() => setShowExpressions(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;