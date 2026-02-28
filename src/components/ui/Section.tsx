type Props = {
    title?: string
    subtitle?: string
    children: React.ReactNode
  }
  
  export default function Section({ title, subtitle, children }: Props) {
    return (
      <section style={{ padding: '34px 0' }}>
        <div className="container">
          {(title || subtitle) && (
            <div style={{ marginBottom: 14 }}>
              {title && <h2 style={{ margin: 0, fontSize: 22 }}>{title}</h2>}
              {subtitle && <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </section>
    )
  }