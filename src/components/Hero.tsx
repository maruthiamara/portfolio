import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import { handleAnchorClick } from '../lib/scroll'
import Typewriter from './Typewriter'

const stack = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'FastAPI',
  'Apache Kafka',
  'Docker',
  'Kubernetes',
  'MQTT',
  'Hadoop',
  'PySpark',
  'PostgreSQL (pgvector)',
  'GeoServer',
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Availability status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/40 px-4 py-1.5 text-sm text-cyan-200/90 backdrop-blur-md shadow-lg shadow-cyan-950/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <Sparkles size={14} className="text-cyan-400" />
          <span>Available for AI / ML roles · {profile.location}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient animate-gradient-pan drop-shadow-sm">
            Hi, I'm {profile.name}
          </span>
        </motion.h1>

        {/* Subtitle with live typewriter animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-2xl leading-relaxed"
        >
          <span className="font-bold text-white text-xl sm:text-3xl tracking-tight">
            Software Engineer
          </span>{' '}
          <span className="text-white/70">— mainly focused on</span>{' '}
          <Typewriter
            words={profile.roles}
            typingSpeed={90}
            deletingSpeed={45}
            pauseDuration={2200}
            loop={true}
            className="font-bold text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
            cursorClassName="text-cyan-400 font-normal"
          />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mx-auto mt-4 max-w-xl text-sm text-white/60 sm:text-base"
        >
          {profile.tagline}
        </motion.p>

        {/* Tech marquee row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
        >
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/75 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => handleAnchorClick(e, 'projects')}
            className="btn-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-transform"
          >
            <span>View Projects</span>
            <Sparkles size={16} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
          >
            <Mail size={18} /> Email
          </a>
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e) => handleAnchorClick(e, 'about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Explore Portfolio</span>
          <ArrowDown size={18} className="animate-float text-cyan-400" />
        </motion.a>
      </div>
    </section>
  )
}
