import { render, screen } from '@testing-library/react';
import { FavoritesList } from '../ui/favoritesList';
import { mockMovies } from '@/shared/mocks';

jest.mock('@/entities/Movie', () => ({
  Movie: ({ id, name }: { id: number; name: string }) => (
    <div data-testid='movie' data-id={id}>
      {name}
    </div>
  ),
}));

describe('FavoritesList', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders movies from localStorage', () => {
    localStorage.setItem('nxmedia-favorites', JSON.stringify(mockMovies));

    render(<FavoritesList />);

    const fakeMovies = screen.getAllByTestId('movie');
    expect(fakeMovies).toHaveLength(2);
    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByText('Movie Two')).toBeInTheDocument();
  });

  it('renders empty list if no favorites in localStorage', () => {
    render(<FavoritesList />);
    expect(screen.queryByTestId('movie')).not.toBeInTheDocument();
  });
});
