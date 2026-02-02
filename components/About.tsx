import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const experience = [
    { year: 'Feb 2023 — Present', role: 'Motion Designer', company: 'Bhoos Games', location: 'Kathmandu' },
    { year: 'May 2019 — Jun 2021', role: 'Motion Graphics Designer', company: 'Adbhud Digital Marketing', location: 'Kathmandu' },
  ];

  const education = [
    { year: 'Bachelor Level', school: 'Sunway International College', degree: 'BCS', location: 'Kathmandu' },
    { year: 'Level 11 & 12', school: 'Trinity International College', degree: 'Computer Science', location: 'Kathmandu' },
    { year: 'Up to Level 10', school: 'GEBS', degree: 'School Level', location: 'Kathmandu' },
  ];

  const skills = [
    "Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "DaVinci Resolve", "Figma"
  ];

  const services = [
    "Graphic Design", "VFX", "Video Editing", "Logo Animations", "Character Animations"
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 relative border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 mb-32"
        >
          <div className="w-full md:w-1/4">
            <h2 className="text-brand text-xs font-bold uppercase tracking-widest sticky top-32">About Me</h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-semibold mb-12 font-syne" style={{ lineHeight: 1.1 }}>
              A willing and creative learner of all things, blending Art with Artificial Intelligence.
            </h3>

            <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              <p>
                Sizan Smith Lamichhane is a Motion Graphics Designer and VFX Artist specializing in high-impact visual storytelling. With a handle known as Sizzler Fx, I bridge the gap between technical motion design (After Effects, Premiere Pro, DaVinci) and modern AI workflows like ComfyUI and Unreal Engine. My work ranges from major sports campaigns, like the Faf du Plessis signing for the Biratnagar Kings, to experimental AI influencer models like Leyla. This site serves as a lab for my scripts, expressions, and technical breakdowns.
              </p>

              <div className="border-l-4 border-brand pl-6 my-8">
                <h4 className="text-white font-bold mb-2">My Philosophy</h4>
                <p className="text-zinc-300 text-base">
                  "The future isn't about choosing between human creativity and AI efficiency; it's about fusing them."
                </p>
              </div>

              <p>
                I leverage tools like <strong>ComfyUI</strong> and custom <strong>LLM Agents</strong> to automate the tedious parts of the creative process (like rotoscoping, asset generation, and script writing), allowing me to focus purely on the storytelling and visual impact. This "Hybrid-Creative" approach allows me to deliver high-quality animations faster and more efficiently than traditional studios.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 mb-24 border-t border-zinc-900 pt-16"
        >
          <div className="w-full md:w-1/4">
            <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-widest sticky top-32">Experience</h2>
          </div>
          <div className="w-full md:w-3/4 space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between border-b border-zinc-900 pb-12 last:border-0 last:pb-0">
                <div className="mb-2 md:mb-0">
                  <h4 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">{job.company}</h4>
                  <span className="text-zinc-500 text-sm">{job.role}</span>
                </div>
                <div className="text-right flex flex-col md:items-end">
                  <span className="text-white font-mono text-sm">{job.year}</span>
                  <span className="text-zinc-600 text-xs uppercase tracking-wider">{job.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 mb-24 border-t border-zinc-900 pt-16"
        >
          <div className="w-full md:w-1/4">
            <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-widest sticky top-32">Education</h2>
          </div>
          <div className="w-full md:w-3/4 space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between border-b border-zinc-900 pb-12 last:border-0 last:pb-0">
                <div className="mb-2 md:mb-0">
                  <h4 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">{edu.school}</h4>
                  <span className="text-zinc-500 text-sm">{edu.degree}</span>
                </div>
                <div className="text-right flex flex-col md:items-end">
                  <span className="text-white font-mono text-sm">{edu.year}</span>
                  <span className="text-zinc-600 text-xs uppercase tracking-wider">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-zinc-900 pt-16">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-12">Services</h2>
            <ul className="grid grid-cols-1 gap-4">
              {services.map((service, i) => (
                <li key={i} className="text-xl md:text-2xl text-zinc-300 border-b border-zinc-900 pb-4">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-12">Software Skills</h2>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="text-zinc-400 hover:text-white transition-colors text-lg border-b border-zinc-900 pb-4">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div >
    </section >
  );
};

export default About;