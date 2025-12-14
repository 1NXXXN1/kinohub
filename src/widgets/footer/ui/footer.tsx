import Link from 'next/link';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr className='my-6 border-color2 sm:mx-auto lg:my-8' />
      <span className='block sm:text-center'>
        © {year}{' '}
        <Link href='/' className=''>
          NX Media™
        </Link>
      </span>
    </footer>
  );
};
