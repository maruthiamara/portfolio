import { motion } from 'framer-motion'
import { profile, skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

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
          className="glass-card gradient-border mx-auto max-w-3xl rounded-[28px] p-8 sm:p-12 text-center sm:text-left relative overflow-hidden"
          style={{ ['--grad-from' as string]: 'rgba(6,182,212,0.6)', ['--grad-to' as string]: 'rgba(139,92,246,0.6)' }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <p className="text-lg sm:text-xl leading-relaxed text-white/85 font-medium relative z-10">{profile.summary}</p>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="The languages, frameworks and infrastructure I build with."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  {group.label}
                </h3>
                <span className="h-2 w-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 transition-colors" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-white/85 transition-all hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
