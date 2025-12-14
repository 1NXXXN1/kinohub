'use client';
import { Movie } from '@/entities/Movie';
import { Movie as MovieType } from '@/entities/Movie/model/movie';
import { useEffect, useState } from 'react';

export const FavoritesList = () => {
  const [favorites, setFavorites] = useState<MovieType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('nxmedia-favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
      {favorites.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster={movie.poster?.url}
          name={movie.name}
          year={movie.year}
          movieLength={movie.isSeries ? movie.seriesLength : movie.movieLength}
          rating={movie.rating.kp}
        />
      ))}
    </div>
  );
};
