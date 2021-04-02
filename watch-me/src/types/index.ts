export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface RatingProps {
  Source: string;
  Value: string;
}

export interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: RatingProps[];
  Runtime: string;
}