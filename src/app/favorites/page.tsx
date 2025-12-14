import { FavoritesList } from '@/widgets/favoritesList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NX Media — Избранное',
  description: 'Ваши избранные',
};

export default function Favorites() {
  return (
    <article>
      <h1 className='text-xl md:text-3xl font-bold mb-4'>Избранные</h1>
      <FavoritesList />
    </article>
  );
}
