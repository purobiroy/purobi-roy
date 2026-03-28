/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { 
  Search, 
  Target, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  MapPin,
  Phone,
  ExternalLink,
  Award,
  Briefcase,
  User,
  Zap,
  Smartphone,
  BarChart3,
  Bot,
  Globe,
  PenTool,
  ExternalLink as LinkIcon,
  Code2,
  Rocket
} from 'lucide-react';
import { FireflyCursor } from './components/FireflyCursor';
import { cn } from './lib/utils';
import { projects } from './data/projects';
import { ProjectPage } from './pages/ProjectPage';
import { CertificatePage, certifications } from './pages/CertificatePage';

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-white/60 hover:text-lime transition-colors relative group py-2"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(212,255,94,0.8)]" />
  </a>
);

const Section = ({ children, id, className, bg }: { children: React.ReactNode; id?: string; className?: string; bg?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={cn("py-32 relative overflow-hidden", className, bg)}
  >
    {children}
  </motion.section>
);

const CountUp = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      className="tabular-nums"
    >
      {count}{suffix}
    </motion.span>
  );
};

const SkillCard = ({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) => (
  <motion.div 
    whileHover={{ 
      y: -10,
      boxShadow: "0 30px 60px rgba(212,255,94,0.4)",
      backgroundColor: "#D4FF5E",
    }}
    whileTap={{ 
      scale: 0.98,
      backgroundColor: "#D4FF5E",
    }}
    className="glass p-8 rounded-[2.5rem] group transition-all duration-500 cursor-pointer border border-white/10"
  >
    <div className="w-12 h-12 rounded-2xl bg-lime/10 flex items-center justify-center mb-6 group-hover:bg-black/10 transition-colors">
      {typeof Icon === 'string' ? (
        <span className="text-2xl">{Icon}</span>
      ) : (
        <Icon className="w-6 h-6 text-lime group-hover:text-black" />
      )}
    </div>
    <h3 className="text-xl font-bold mb-4 tracking-tight uppercase group-hover:text-black transition-colors">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="text-white/60 text-sm flex items-start gap-2 group-hover:text-black transition-colors">
          <ChevronRight className="w-4 h-4 text-lime shrink-0 mt-0.5 group-hover:text-black" />
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="h-px w-full bg-gradient-to-r from-black/20 to-transparent" />
    </div>
  </motion.div>
);

const ExperienceItem = ({ date, title, company, description }: { date: string; title: string; company: string; description: string[] }) => (
  <div className="relative pl-8 pb-12 border-l border-white/10 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-lime shadow-[0_0_10px_rgba(212,255,94,0.8)]" />
    <motion.div 
      whileHover={{ 
        y: -10, 
        boxShadow: "0 30px 60px rgba(212,255,94,0.3)",
        backgroundColor: "#D4FF5E"
      }}
      className="glass p-6 rounded-2xl transition-all duration-500 border border-white/5 group cursor-default"
    >
      <span className="text-xs font-mono text-lime mb-2 block uppercase tracking-widest group-hover:text-black transition-colors">{date}</span>
      <h3 className="text-xl font-bold mb-1 group-hover:text-black transition-colors">{title}</h3>
      <p className="text-white/40 text-sm mb-4 font-medium uppercase tracking-wider group-hover:text-black transition-colors">{company}</p>
      <ul className="space-y-2">
        {description.map((item, idx) => (
          <li key={idx} className="text-white/60 text-sm leading-relaxed group-hover:text-black transition-colors">• {item}</li>
        ))}
      </ul>
    </motion.div>
  </div>
);

const EducationItem = ({ date, degree, school }: { date: string; degree: string; school: string }) => (
  <div className="relative pl-8 pb-12 border-l border-white/10 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-lime shadow-[0_0_10px_rgba(212,255,94,0.8)]" />
    <motion.div 
      whileHover={{ 
        y: -10, 
        boxShadow: "0 30px 60px rgba(212,255,94,0.3)",
        backgroundColor: "#D4FF5E"
      }}
      className="glass p-6 rounded-2xl transition-all duration-500 border border-white/5 group cursor-default"
    >
      <span className="text-xs font-mono text-lime mb-2 block uppercase tracking-widest group-hover:text-black transition-colors">{date}</span>
      <h3 className="text-xl font-bold mb-1 group-hover:text-black transition-colors">{degree}</h3>
      <p className="text-white/40 text-sm font-medium uppercase tracking-wider group-hover:text-black transition-colors">{school}</p>
    </motion.div>
  </div>
);

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, description, tags, image }) => (
  <motion.div 
    whileHover={{ 
      y: -10,
      boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
    }}
    whileTap={{ scale: 0.98 }}
    className="group relative bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-lime/30 transition-all duration-500 cursor-pointer"
  >
    <div className="aspect-[16/10] overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-transparent opacity-60" />
      <div className="absolute top-6 left-6">
        <span className="px-4 py-1.5 rounded-full bg-forest/80 backdrop-blur-md border border-white/10 text-lime text-[10px] font-bold uppercase tracking-widest">
          {category}
        </span>
      </div>
    </div>
    
    <div className="p-8 md:p-10">
      <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-lime transition-colors">
        {title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag, i) => (
          <span key={i} className="text-[10px] font-mono text-white/30 uppercase tracking-wider border border-white/5 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <Link 
        to={`/project/${id}`}
        className="inline-flex items-center gap-2 text-lime font-bold uppercase tracking-widest text-xs group/link"
      >
        Explore Project 
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();
  const location = useLocation();

  const handleImageClick = () => {
    if (clickTimeout) clearTimeout(clickTimeout);
    setIsImageClicked(true);
    const timeout = setTimeout(() => {
      setIsImageClicked(false);
      setClickTimeout(null);
    }, 3000);
    setClickTimeout(timeout);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Small delay to ensure the page is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  
  // Scroll Parallax
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-lime selection:text-forest">
      <FireflyCursor />
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-forest/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-lime">Purobi</span>ROY
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#education">Education</NavItem>
            <NavItem href="#certifications">Certifications</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </div>

          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-lime text-forest text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(212,255,94,0.2)]"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-lime/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime/5 rounded-full blur-[100px]" />
          
          {/* Parallax Elements */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-4 h-4 bg-lime/20 rounded-full blur-sm"
          />
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[30%] right-[15%] w-6 h-6 bg-lime/10 rounded-full blur-sm"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[25%] w-2 h-2 bg-lime/30 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Centered blinking glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-lime/20 blur-[30px] rounded-full border border-lime/30 animate-blink -z-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: heroY }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center md:justify-start order-1 md:order-1"
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 rounded-full border border-lime/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-lime/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div id="hero-image-container" className="absolute inset-0 flex items-center justify-center">
                <div 
                  onClick={handleImageClick}
                  className="w-[90%] h-[90%] rounded-full overflow-hidden transition-all duration-500 border-4 border-white/5 shadow-2xl group cursor-pointer hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(212,255,94,0.3)] active:scale-95"
                >
                  <img 
                    src="https://i.ibb.co/KzQrSfhb/Chat-GPT-Image-Mar-2.png" 
                    alt="Purobi Roy" 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500",
                      isImageClicked ? "grayscale-0" : "grayscale group-hover:grayscale-0 group-active:grayscale-0"
                    )}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: textY }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-2"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-lime text-xs font-bold tracking-widest uppercase mb-6"
            >
              Available for new projects
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
              Purobi <br />
              <span className="text-lime text-glow">Roy</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/60 mb-8 max-w-lg leading-tight">
              The <span className="text-white font-medium">Digital Marketer</span>
            </p>
            <p className="text-lg text-white/40 mb-10 italic">
              “Don’t Just Market, Scale.”
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,255,94,0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="group px-8 py-4 rounded-full bg-lime text-forest font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                View My Work <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-all"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Centered blinking glow for About section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime/10 blur-[40px] rounded-full border border-lime/20 animate-blink -z-10" />
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 relative">
              <h2 className="text-8xl md:text-[12rem] font-black text-white/5 leading-none uppercase select-none">
                ABOUT
              </h2>
              <h2 className="absolute top-1/2 left-0 -translate-y-1/2 text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                <span className="text-white block">Not just a</span>
                <span className="text-lime block">Digital Marketer .</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                  I believe that digital marketing is more than just running ads or tracking metrics. It’s about understanding human behavior, identifying intent, and telling stories that truly connect.
                </p>
                <p className="text-lg text-white/60 leading-relaxed">
                  Every click has a reason, every conversion has a journey. With a deep focus on strategy and creativity, I transform insights into impactful digital experiences that drive real growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" bg="bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-lime font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Expertise</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Core Skills</h2>
            </div>
            <p className="text-white/40 max-w-xs text-sm uppercase tracking-widest font-medium">
              High-impact strategies for modern digital growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard 
              icon={Search}
              title="SEO & Growth"
              items={[
                "Rank websites higher on Google",
                "Find the right keywords people search",
                "Grow traffic organically"
              ]}
            />
            <SkillCard 
              icon={PenTool}
              title="Content & Strategy"
              items={[
                "Plan content that converts",
                "Build smart content funnels",
                "Understand audience & behavior"
              ]}
            />
            <SkillCard 
              icon={Globe}
              title="Websites (No-Code)"
              items={[
                "Build websites using WordPress",
                "Manage & optimize pages easily"
              ]}
            />
            <SkillCard 
              icon={Mail}
              title="Email & Funnels"
              items={[
                "Run email campaigns (Mailchimp)",
                "Write copy that gets clicks",
                "Build lead generation systems"
              ]}
            />
            <SkillCard 
              icon={Smartphone}
              title="Social Media"
              items={[
                "Grow LinkedIn & Instagram",
                "Create engaging content",
                "Build strong personal brands"
              ]}
            />
            <SkillCard 
              icon={BarChart3}
              title="Analytics"
              items={[
                "Track performance (GA4)",
                "Measure traffic, leads & results",
                "Improve campaigns using data"
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" bg="bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-lime font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Foundation</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Education</h2>
              
              <div className="space-y-2">
                <EducationItem 
                  date="2021 – 2025"
                  degree="BBA"
                  school="Woxsen University"
                />
                <EducationItem 
                  date="2021"
                  degree="12th (CBSE)"
                  school="Escorts World School"
                />
                <EducationItem 
                  date="2019"
                  degree="10th (CBSE)"
                  school="Escorts World School"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" bg="bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-lime font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Validation</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Certifications</h2>
              
              <div className="grid gap-6">
                {certifications.map((cert, idx) => (
                  <Link 
                    key={idx}
                    to={`/certificate/${cert.id}`}
                    className="block"
                  >
                    <motion.div 
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 30px 60px rgba(212,255,94,0.3)",
                        backgroundColor: "#D4FF5E"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="glass p-6 rounded-[2rem] flex items-center gap-6 group cursor-pointer border border-white/10 transition-all duration-500"
                    >
                      <div className="w-14 h-14 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <Award className="w-7 h-7 text-lime group-hover:text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg group-hover:text-black transition-colors">{cert.title}</h4>
                        <p className="text-white/40 text-sm uppercase tracking-widest group-hover:text-black transition-colors">{cert.issuer}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-black transition-colors" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" bg="bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-lime font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Journey</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">Experience</h2>
            
            <div className="space-y-2">
              <ExperienceItem 
                date="Jun 2024 – Aug 2024"
                title="Business Analyst Intern"
                company="IndoTech Industries"
                description={[
                  "Developed marketing dashboards (Excel, SAP, Tableau)",
                  "Supported segmentation-based email campaigns",
                  "Conducted CRM data analysis"
                ]}
              />
              <ExperienceItem 
                date="Jan 2024 – Jan 2025"
                title="Executive"
                company="Sahyog Club"
                description={[
                  "Led promotional campaigns",
                  "Created digital content & communications"
                ]}
              />
              <ExperienceItem 
                date="Jun 2023 – Jul 2023"
                title="Volunteer"
                company="Queer Welfare Foundation"
                description={[
                  "Managed awareness & fundraising campaigns",
                  "Coordinated outreach and event execution"
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" bg="bg-forest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="relative">
              <span className="text-lime font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Selected Works</span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Creative <br />
                <span className="text-lime">Impact</span>
              </h2>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime/5 blur-[80px] rounded-full -z-10" />
            </div>
            <div className="max-w-md">
              <p className="text-white/40 text-sm uppercase tracking-widest font-medium leading-relaxed mb-6">
                A collection of strategic digital interventions designed to scale brands and optimize user journeys.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-lime/30 to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" bg="bg-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lime/5 blur-[150px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass rounded-[3rem] p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                  Let’s Build <br />
                  <span className="text-lime text-glow">Something</span> <br />
                  That Grows
                </h2>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-start gap-6 group">
                    <a 
                      href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQgKvMgQrFTNNGJvFZwZrlpWkFC?compose=CllgCJTHVcGXcGJVFkhzzbzccXLXbvLKxJFlJKgzTvSLjqgpQnqnwmpQLrhkBpDzKgKfKWzXDXB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-lime group-hover:text-forest transition-all shrink-0"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Me</p>
                      <div className="flex flex-col gap-2">
                        <a 
                          href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQgKvMgQrFTNNGJvFZwZrlpWkFC?compose=CllgCJTHVcGXcGJVFkhzzbzccXLXbvLKxJFlJKgzTvSLjqgpQnqnwmpQLrhkBpDzKgKfKWzXDXB" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-medium hover:text-lime transition-colors"
                        >
                          purobiroy1111@gmail.com
                        </a>
                        <a 
                          href="mailto:purobiroy1111@gmail.com"
                          className="text-xs text-white/40 hover:text-lime transition-colors underline underline-offset-4"
                        >
                          or open with email app
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="tel:9696036770" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-lime group-hover:text-forest transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Me</p>
                      <p className="text-xl font-medium">+91 9696036770</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Location</p>
                      <p className="text-xl font-medium">Hyderabad, India</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a 
                      href="https://www.linkedin.com/in/purobi-roy-28abb6260/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime hover:text-forest transition-all shrink-0"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://github.com/purobiroy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime hover:text-forest transition-all shrink-0"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xl font-black tracking-tighter mb-2">P.ROY</p>
            <p className="text-white/40 text-sm tracking-widest uppercase">Growth-Focused Digital Strategist</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-white/40 hover:text-lime transition-colors">About</a>
            <a href="#skills" className="text-sm text-white/40 hover:text-lime transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-white/40 hover:text-lime transition-colors">Projects</a>
            <a href="#experience" className="text-sm text-white/40 hover:text-lime transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-white/40 hover:text-lime transition-colors">Contact</a>
          </div>

          <p className="text-white/20 text-xs uppercase tracking-widest">
            © 2026 Purobi Roy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/certificate/:id" element={<CertificatePage />} />
      </Routes>
    </BrowserRouter>
  );
}
