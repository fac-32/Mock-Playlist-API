// setup server 
import express from "express";
import { Router } from "express";

const app = express();
app.use(express.json());

// In-memory data store
const playlists = [
    { id: 1, name: 'Chill Vibes', songs: ['Song A', 'Song B'] },
    { id: 2, name: 'Workout Mix', songs: ['Song C', 'Song D'] },
];

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Mock Playlist API!');
});

// Get all playlists
app.get('/api/playlists', (req, res) => {
    res.json(playlists);
});

// Get a single playlist by id
app.get('/api/playlists/:id', (req, res) => {
    const playlist = playlists.find(p => p.id === parseInt(req.params.id));
    if (!playlist) {
        return res.status(404).send('Playlist not found');
    }
    res.json(playlist);
});

// Create a new playlist
app.post('/api/playlists', (req, res) => {
    const { name, songs } = req.body;
    if (!name || !songs) {
        return res.status(400).send('Missing name or songs');
    }
    const newPlaylist = {
        id: playlists.length + 1,
        name,
        songs,
    };
    playlists.push(newPlaylist);
    res.status(201).json(newPlaylist);
});


const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})

