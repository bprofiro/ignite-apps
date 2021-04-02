import { MovieCard } from './MovieCard';
import { MovieProps } from '../types/index';

import '../styles/content.scss';

interface ContentProps {
  movies: MovieProps[];
  selectedGenreTitle: string;
}

export function Content({ movies, selectedGenreTitle } :ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}