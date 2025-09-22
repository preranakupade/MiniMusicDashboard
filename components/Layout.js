import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children, theme, setTheme }) {
  const router = useRouter()
  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
      router.push('/')
    }
  }

  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <div>LabelLift</div>
          <div className="small">Mini Music Distribution</div>
        </div>

        <div className="controls">
          <nav className="small" style={{display:'flex',gap:8,alignItems:'center'}}>
            <Link href="/dashboard" className="link">Dashboard</Link>
            <Link href="/upload" className="link">Upload</Link>

          </nav>

          <button
            className="btn secondary"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
            style={{marginLeft:8}}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <button className="btn" onClick={logout} style={{marginLeft:8}}>Logout</button>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}
