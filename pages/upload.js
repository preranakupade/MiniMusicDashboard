import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { useEffect } from 'react'

export default function Upload({ theme, setTheme }) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [genre, setGenre] = useState('Pop')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('user')) {
      router.push('/')
    }
  }, [router])

  async function onSubmit(e) {
    e.preventDefault()
    if (!title || !artist || !releaseDate) {
      alert('Please fill Title, Artist and Release Date.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, artist, releaseDate, genre })
      })
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      alert('Could not add track.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <div style={{maxWidth:720}}>
        <h2>Upload Track (mock)</h2>
        <div className="card">
          <form onSubmit={onSubmit} style={{display:'grid',gap:10}}>
            <input className="input" placeholder="Track Title" value={title} onChange={e=>setTitle(e.target.value)} />
            <input className="input" placeholder="Artist Name" value={artist} onChange={e=>setArtist(e.target.value)} />
            <input className="input" type="date" value={releaseDate} onChange={e=>setReleaseDate(e.target.value)} />
            <select className="input" value={genre} onChange={e=>setGenre(e.target.value)}>
              <option>Pop</option>
              <option>Hip-Hop</option>
              <option>Rock</option>
              <option>Electronic</option>
              <option>Indie</option>
              <option>Classical</option>
            </select>

            <div style={{display:'flex',gap:8}}>
              <button className="btn" type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
              <button className="btn secondary" type="button" onClick={()=>router.push('/dashboard')}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
