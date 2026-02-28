type Props = {
    children: React.ReactNode
  }
  
  export default function Card({ children }: Props) {
    return (
      <div
        style={{
          border: '1px solid var(--border)',
          background: 'var(--panel)',
          borderRadius: 'var(--r)',
          padding: 16,
        }}
      >
        {children}
      </div>
    )
  }