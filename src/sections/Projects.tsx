import Section from '../components/ui/Section'
import Card from '../components/ui/Card.tsx'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section title="Featured Projects" subtitle="Real work, not tutorial clones.">
      <div className="grid grid-3">
        {projects.map((p) => (
          <Card key={p.title}>
            <h3 style={{ margin: 0, fontSize: 18 }}>{p.title}</h3>
            <p style={{ margin: '8px 0 12px', color: 'var(--muted)' }}>{p.description}</p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
              {p.tech.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {p.github && (
                <a className="btn" href={p.github} target="_blank" rel="noreferrer">Code</a>
              )}
              {p.live && (
                <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live</a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}