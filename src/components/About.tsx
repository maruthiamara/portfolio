import { motion } from 'framer-motion'
import {
  Code2,
  BrainCircuit,
  Sparkles,
  Workflow,
  Database,
  Cpu,
  CheckCircle2,
} from 'lucide-react'
import { profile, skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

const categoryMeta: Record<
  string,
  {
    icon: React.ReactNode
    color: string
    glow: string
    border: string
    badgeBg: string
  }
> = {
  Languages: {
    icon: <Code2 size={18} />,
    color: 'text-amber-400',
    glow: 'rgba(251, 191, 36, 0.15)',
    border: 'hover:border-amber-400/50',
    badgeBg: 'hover:bg-amber-400/10 hover:text-amber-200',
  },
  'Machine Learning': {
    icon: <BrainCircuit size={18} />,
    color: 'text-cyan-400',
    glow: 'rgba(34, 211, 238, 0.15)',
    border: 'hover:border-cyan-400/50',
    badgeBg: 'hover:bg-cyan-400/10 hover:text-cyan-200',
  },
  'Generative AI': {
    icon: <Sparkles size={18} />,
    color: 'text-purple-400',
    glow: 'rgba(192, 132, 252, 0.15)',
    border: 'hover:border-purple-400/50',
    badgeBg: 'hover:bg-purple-400/10 hover:text-purple-200',
  },
  'Data Engineering': {
    icon: <Workflow size={18} />,
    color: 'text-emerald-400',
    glow: 'rgba(52, 211, 153, 0.15)',
    border: 'hover:border-emerald-400/50',
    badgeBg: 'hover:bg-emerald-400/10 hover:text-emerald-200',
  },
  Database: {
    icon: <Database size={18} />,
    color: 'text-sky-400',
    glow: 'rgba(56, 189, 248, 0.15)',
    border: 'hover:border-sky-400/50',
    badgeBg: 'hover:bg-sky-400/10 hover:text-sky-200',
  },
  Tools: {
    icon: <Cpu size={18} />,
    color: 'text-rose-400',
    glow: 'rgba(251, 113, 133, 0.15)',
    border: 'hover:border-rose-400/50',
    badgeBg: 'hover:bg-rose-400/10 hover:text-rose-200',
  },
}

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-5xl px-4 py-24">
        <SectionHeading eyebrow="About" title="AI/ML, end to end" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-card gradient-border mx-auto max-w-3xl rounded-[28px] p-8 sm:p-12 text-center sm:text-left relative overflow-hidden shadow-2xl"
          style={{ ['--grad-from' as string]: 'rgba(6,182,212,0.6)', ['--grad-to' as string]: 'rgba(139,92,246,0.6)' }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <p className="text-lg sm:text-xl leading-relaxed text-white/90 font-medium relative z-10">
            {profile.summary}
          </p>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="The languages, frameworks and infrastructure I build with."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const meta = categoryMeta[group.label] || {
              icon: <CheckCircle2 size={18} />,
              color: 'text-cyan-400',
              glow: 'rgba(6,182,212,0.15)',
              border: 'hover:border-cyan-400/50',
              badgeBg: 'hover:bg-cyan-400/10 hover:text-cyan-200',
            }

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 border border-white/10 ${meta.border} group`}
              >
                {/* Background ambient radial glow on card */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-2xl transition-opacity duration-300 opacity-30 group-hover:opacity-100"
                  style={{ background: meta.glow }}
                />

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`p-2 rounded-xl bg-white/5 ${meta.color} shadow-sm border border-white/10`}>
                      {meta.icon}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">
                      {group.label}
                    </h3>
                  </div>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-sm font-medium text-white/85 shadow-sm backdrop-blur-md transition-all duration-200 ${meta.badgeBg}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-cyan-300 transition-colors" />
                      <span>{item}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
