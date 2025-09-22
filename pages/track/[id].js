import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

export default function TrackDetail({ theme, setTheme }) {
  const router = useRouter()
  const { id } = router.query
  const [track, setTrack] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetch(`/api/tracks/${id}`).then(r => r.json()).then(data => {
      setTrack(data)
    }).catch(err => {
      console.error(err)
      alert('Could not fetch track')
    }).finally(()=>setLoading(false))
  }, [id])

  if (loading) return <Layout theme={theme} setTheme={setTheme}><div>Loading...</div></Layout>

  if (!track || !track.id) {
    return <Layout theme={theme} setTheme={setTheme}><div>Track not found.</div></Layout>
  }

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <div style={{display:'flex',gap:20,alignItems:'center',marginBottom:12}}>
        <div>
          <h2>{track.title}</h2>
          <div className="small">By {track.artist}</div>
        </div>
      </div>

      <div className="card" style={{maxWidth:720}}>
        <p><strong>Artist:</strong> {track.artist}</p>
        <p><strong>Release Date:</strong> {new Date(track.releaseDate).toLocaleDateString()}</p>
        <p><strong>Genre:</strong> {track.genre}</p>
        <p><strong>Status:</strong> {track.status || 'Uploaded'}</p>
        <p className="small">Track ID: {track.id}</p>
      </div>
    </Layout>
  )
}
