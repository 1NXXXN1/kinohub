import { MovieList } from '@/widgets/movieList';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'NX Media — Фильмы',
  description: 'Лучшие фильмы на каждый день',
};

export default function Films() {
  return (
    <Suspense>
      <MovieList type={'movie'} />
    </Suspense>
  );
}
