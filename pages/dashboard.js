import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Dashboard({ theme, setTheme }) {
  const router = useRouter()
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    // check auth
    if (typeof window !== 'undefined' && !localStorage.getItem('user')) {
      router.push('/')
    }
  }, [router])

  useEffect(() => {
    fetchTracks()
  }, [])

  async function fetchTracks() {
    setLoading(true)
    try {
      const res = await fetch('/api/tracks')
      const data = await res.json()
      setTracks(data)
    } catch (err) {
      console.error(err)
      alert('Could not fetch tracks.')
    } finally {
      setLoading(false)
    }
  }

  const filtered = tracks.filter(t => {
    if (!query) return true
    const q = query.toLowerCase()
    return t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q) || (t.genre || '').toLowerCase().includes(q)
  })

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <h2>Dashboard</h2>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <input className="search" placeholder="Search by title, artist or genre" value={query} onChange={e=>setQuery(e.target.value)} />
          <Link href="/upload" className="btn">New Track</Link>
        </div>
      </div>

      <div className="card">
        {loading ? <div>Loading...</div> : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Release Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && <tr><td colSpan="5">No tracks found.</td></tr>}
                {filtered.map(track => (
                  <tr key={track.id}>
                    <td>{track.title}</td>
                    <td>{track.artist}</td>
                    <td className="small">{new Date(track.releaseDate).toLocaleDateString()}</td>
                    <td className="small">{track.status || 'Uploaded'}</td>
                    <td style={{textAlign:'right'}}>
                      <Link href={`/track/${track.id}`} className="link">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Layout>
  )
}
