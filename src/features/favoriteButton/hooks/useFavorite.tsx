import { useEffect, useState } from 'react';
import { Movie } from '@/entities/Movie/model/movie';

export const useFavorite = (movie: Movie) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('nxmedia-favorites');
    const favorites: Movie[] = stored ? JSON.parse(stored) : [];
    setIsFavorite(favorites.some((fav) => fav.id === movie.id));
  }, [movie]);

  const toggleFavorite = () => {
    const stored = localStorage.getItem('nxmedia-favorites');
    let favorites: Movie[] = stored ? JSON.parse(stored) : [];

    if (favorites.some((fav) => fav.id === movie.id)) {
      favorites = favorites.filter((fav) => fav.id !== movie.id);
      setIsFavorite(false);
    } else {
      favorites.push(movie);
      setIsFavorite(true);
    }

    localStorage.setItem('nxmedia-favorites', JSON.stringify(favorites));
  };

  return { isFavorite, toggleFavorite };
};
