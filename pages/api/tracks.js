// pages/api/tracks.js
import { v4 as uuidv4 } from 'uuid'

let tracks = [
  {
    id: uuidv4(),
    title: 'Sunrise Dreams',
    artist: 'Sejal Singh',
    releaseDate: new Date('2023-06-10').toISOString(),
    genre: 'Indie',
    status: 'Released'
  },
  {
    id: uuidv4(),
    title: 'Midnight City',
    artist: 'Pragati Verma',
    releaseDate: new Date('2024-01-08').toISOString(),
    genre: 'Electronic',
    status: 'Uploaded'
  }
]

// GET returns list; POST adds new track
export default function handler(req, res) {
  if (req.method === 'GET') {
    // return newest first
    const sorted = [...tracks].sort((a,b)=> new Date(b.releaseDate) - new Date(a.releaseDate))
    return res.status(200).json(sorted)
  }

  if (req.method === 'POST') {
    const { title, artist, releaseDate, genre } = req.body
    if (!title || !artist || !releaseDate) {
      return res.status(400).json({ error: 'Missing fields' })
    }
    const newTrack = {
      id: uuidv4(),
      title,
      artist,
      releaseDate: new Date(releaseDate).toISOString(),
      genre: genre || 'Unknown',
      status: 'Uploaded'
    }
    tracks.push(newTrack)
    return res.status(201).json(newTrack)
  }

  res.setHeader('Allow', ['GET','POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
