import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import songService from '../services/songService';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    songService.getSong(id).then(data => setSong(data));
  }, [id]);

  if (!song) return <div>Loading...</div>;

  return (
    <div>
      <h1>{song.title}</h1>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Genre: {song.genre}</p>
      <p>Year: {song.year}</p>
    </div>
  );
};

export default SongDetail;
