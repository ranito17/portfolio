import Section from '../components/ui/Section'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section title="Skills">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {skills.map((s) => (
          <span className="chip" key={s}>{s}</span>
        ))}
      </div>
    </Section>
  )
}