import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow="Journey" title="Experience" />

      {/* Experience */}
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass gradient-border rounded-[24px] p-7 sm:p-8"
            style={{ ['--grad-from' as string]: 'rgba(99,102,241,0.5)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 text-cyan-200">
                  <Briefcase size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-white/60">{exp.company}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">
                {exp.period}
              </span>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
