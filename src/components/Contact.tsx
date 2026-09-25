import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-24">
      <SectionHeading eyebrow="Contact" title="Let’s build something together" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="glass-card gradient-border relative overflow-hidden rounded-[32px] p-8 text-center sm:p-14 shadow-2xl"
        style={{ ['--grad-from' as string]: 'rgba(6,182,212,0.6)', ['--grad-to' as string]: 'rgba(139,92,246,0.6)' }}
      >
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

        <p className="mx-auto max-w-xl text-lg sm:text-xl text-white/85 font-medium leading-relaxed relative z-10">
          Open to AI/ML opportunities. The fastest way to reach me is email —
          I usually reply within a day.
        </p>

        <div className="mt-8 flex justify-center relative z-10">
          <a
            href={profile.links.email}
            className="btn-glow inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-bold text-white shadow-xl transition-all"
          >
            <Send size={18} />
            <span>Send Email</span>
            <span className="text-white/60 font-normal text-xs ml-1"></span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/60 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <MapPin size={15} className="text-cyan-400" /> {profile.location}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 relative z-10">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white/90 transition-all hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-300"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white/90 transition-all hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={profile.links.email}
            aria-label="Email"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white/90 transition-all hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      <footer className="mt-16 border-t border-white/10 pt-8 text-center text-sm font-medium text-white/40">
        © {new Date().getFullYear()} {profile.name}. Designed & Built with React, Tailwind & Framer Motion.
      </footer>
    </section>
  )
}
