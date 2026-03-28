import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Award } from 'lucide-react';

export const certifications = [
  { 
    id: "digital-marketing",
    title: "Digital Marketing & Analytics", 
    issuer: "Boston Institute of Analytics",
    image: "https://i.ibb.co/CsN7gpzY/Screenshot-2026-03-26-at-11-16-01-PM.png"
  },
  { 
    id: "data-science",
    title: "Data Science", 
    issuer: "IIT Kanpur",
    image: "https://i.ibb.co/P0BBwv2/pythons-and-data-science-certi.jpg"
  },
  { 
    id: "corporate-law",
    title: "Corporate & Commercial Law I", 
    issuer: "Coursera",
    image: "https://i.ibb.co/Q33hdFsM/CERTIFICATE-LANDING-PAGE-E47-KYEZGTQ5-B.jpg"
  },
  { 
    id: "basic-statistics",
    title: "Basic Statistics", 
    issuer: "Coursera",
    image: "https://i.ibb.co/S7XzVxgH/basic-statistics-certi.jpg"
  }
];

export const CertificatePage = () => {
  const { id } = useParams();
  const cert = certifications.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cert) {
    return (
      <div className="min-h-screen bg-forest flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">Certificate Not Found</h1>
        <Link to="/#certifications" className="text-lime font-bold uppercase tracking-widest hover:underline">
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
            to="/#certifications" 
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-lime transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="px-4 py-1.5 rounded-full bg-lime/10 border border-lime/20 text-lime text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Official Certification
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              {cert.title}
            </h1>
            <div className="flex items-center gap-4 text-white/40">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <Award className="w-6 h-6 text-lime" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-lime">Issued By</p>
                <p className="text-lg font-medium text-white/80">{cert.issuer}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-lime/5 blur-3xl rounded-[4rem] opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative glass p-4 md:p-10 rounded-[3rem] border border-white/10 overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-auto rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
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
