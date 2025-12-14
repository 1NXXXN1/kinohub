import { Player } from '@/entities/Player';
import { MovieAbout } from '@/widgets/movieAbout';
import { getMovie } from '@/entities/Movie/api/getMovie';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie = await getMovie((await params).id);

  return {
    title: `NX Media — ${movie.name}`,
    description: movie.description,
    openGraph: {
      title: movie.name,
      description: movie.description,
      images: [
        {
          url: movie.poster.url,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Films({ params }: Props) {
  const { id } = await params;

  const data = await getMovie(id);

  return (
    <article>
      <MovieAbout movie={data} />
      <div className='mt-6'>
        <div className='aspect-video bg-foreground rounded-lg overflow-hidden'>
          <Player id={id} />
        </div>
      </div>
    </article>
  );
}
