import { Router, Request, Response } from 'express';

type Playlists = {
    'id': number,
    "name": string,
    "tracks": string[]
}

const playlists: Playlists[] = [
    {
        'id': 1,
        "name": "80s Hits",
        "tracks": ["Every Breath You Take", "What a Feeling", "We are the World"]
    },
    {
        'id': 2,
        "name": "90s Hits",
        "tracks": ["All I Wanna Do", "...Baby One More Time", "Macarena"]
    },
    {
        'id': 3,
        "name": "Latest 2020 Hits",
        "tracks": ["Levitating", "Watermelon Sugar", "Savage Love"]
    }
];

const router = Router();

router.get('/playlists', (req: Request, res: Response) => {
    res.json(playlists);
});

router.get('/playlists/:id', (req: Request, res: Response) => {
    let playlistId: number = parseInt(req.params.id!);
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist) {
        res.json(playlist);
    } else {
        res.status(404).json({ message: 'Playlist not found' });
    }
});

router.post('/playlists', (req: Request, res: Response) => {
    const {name, tracks} = req.body;
    const newPlaylist: Playlists = {
        id: playlists.length + 1,
        name,
        tracks
    };
    playlists.push(newPlaylist);
    res.json(newPlaylist);
});

router.delete('/playlists/:id', (req: Request, res: Response) => {
    let playlistId: number = parseInt(req.params.id!);
    const index = playlists.findIndex(p => p.id === playlistId);
    if (index !== -1) {
        const deletedPlaylist = playlists.splice(index, 1);
        res.json(deletedPlaylist[0]);
    } else {
        res.status(404).json({ message: 'Playlist not found' });
    }
});

export default router;