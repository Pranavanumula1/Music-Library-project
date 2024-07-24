import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import songService from '../services/songService';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    songService.getSongs().then(data => setSongs(data));
  }, []);

  return (
    <div>
      <h1>Music Library</h1>
      <ul>
        {songs.map(song => (
          <li key={song._id}>
            <Link to={`/song/${song._id}`}>{song.title} by {song.artist}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
