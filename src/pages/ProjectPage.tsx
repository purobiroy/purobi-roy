import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Target, Award } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-forest flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Project Not Found</h1>
        <Link to="/#projects" className="text-lime font-bold uppercase tracking-widest hover:underline">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-forest text-white selection:bg-lime selection:text-forest">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-lime">Purobi</span>ROY
          </Link>
          <Link 
            to="/#projects" 
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-lime transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-lime/10 border border-lime/20 text-lime text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              {project.category}
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/60 font-light max-w-4xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Hero Image */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Content Grid */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
                <Zap className="text-lime w-8 h-8" /> The Challenge
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
                <Target className="text-lime w-8 h-8" /> The Solution
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                {project.solution}
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="glass p-8 rounded-[2rem] space-y-8">
              <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                <Award className="text-lime w-6 h-6" /> Key Results
              </h3>
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                    <CheckCircle2 className="text-lime w-5 h-5 shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 px-4">
              <h3 className="text-xs font-mono text-lime uppercase tracking-[0.3em]">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime/10 blur-[80px] rounded-full -z-10" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              Ready to scale <br />
              <span className="text-lime">Your Brand?</span>
            </h2>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-lime text-forest font-bold text-lg hover:shadow-[0_0_30px_rgba(212,255,94,0.3)] transition-all"
            >
              Let's Talk Strategy
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xl font-black tracking-tighter mb-2">Purobi ROY</p>
            <p className="text-white/40 text-sm tracking-widest uppercase">Growth-Focused Digital Strategist</p>
          </div>
          <p className="text-white/20 text-xs uppercase tracking-widest">
            © 2026 Purobi Roy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
