import { useEffect, useState, useCallback } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreResponseProps, MovieProps } from './types';

import { api } from './services/api';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    Promise.all([
      api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then(response => {
        setMovies(response.data);
      }),
      api.get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then(response => {
        setSelectedGenre(response.data)
      }),
    ]);
  }, [selectedGenreId]);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} handleClickButton={handleClickButton} selectedGenreId={selectedGenreId} />

      <Content movies={movies} selectedGenreTitle={selectedGenre.title} />
    </div>
  )
}