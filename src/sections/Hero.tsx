import { profile } from '../data/profile'
import Card from '../components/ui/Card'

export default function Hero() {
  return (
    <section style={{ padding: '56px 0 22px' }}>
      <div className="container">
        <div className="heroGrid">
          {/* LEFT: INFO */}
          <Card>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 14,
              }}
            >
              <h1 style={{ margin: 0, fontSize: 36 }}>{profile.name}</h1>

              <p style={{ margin: 0, color: 'var(--muted)', fontSize: 18 }}>
                {profile.title}
              </p>

              <p style={{ marginTop: 8 }}>{profile.blurb}</p>

              <div style={{ marginTop: 10 }}>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>Location</div>
                <div>Israel</div>
              </div>

              <div>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>Languages</div>
                <div>Arabic (Native), English (Fluent), Hebrew (Very Good)</div>
              </div>

              <div>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>Focus</div>
                <div>Full-stack web apps, system architecture, and scalable backend logic</div>
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
                {profile.links.github && (
                  <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}

                {/* Resume download (file is in public/resume.pdf) */}
                <a className="btn" href="/resume.pdf" download>
                  Resume (PDF)
                </a>
              </div>
            </div>
          </Card>

          {/* RIGHT: PHOTO */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/profile.jpg" alt={profile.name} className="heroPhoto" />
          </div>
        </div>
      </div>
    </section>
  )
}