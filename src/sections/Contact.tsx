import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import { profile } from '../data/profile'

export default function Contact() {
  const { email, github, linkedin } = profile.links

  return (
    <Section title="Contact" subtitle="Let’s talk.">
      <Card>
        <div style={{ display: 'grid', gap: 10 }}>
          {email && (
            <div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>Email</div>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          )}
          {github && (
            <div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>GitHub</div>
              <a href={github} target="_blank" rel="noreferrer">{github}</a>
            </div>
          )}
          {linkedin && (
            <div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>LinkedIn</div>
              <a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a>
            </div>
          )}
        </div>
      </Card>

      <div style={{ padding: '18px 0 0', color: 'var(--muted)', fontSize: 13 }}>
        © {new Date().getFullYear()} {profile.name}
      </div>
    </Section>
  )
}