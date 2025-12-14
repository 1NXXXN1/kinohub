import Link from 'next/link';

import Logo from '@/assets/icons/logo.svg';

import { NavBar } from '@/widgets/header/ui/navBar';
import { Menu } from '@/widgets/header/ui/menu';
import { Search } from '@/features/search';

export const Header = () => {
  return (
    <header className='flex h-16 items-center justify-between'>
      <div className='md:flex md:items-center md:gap-12'>
        <Link
          href='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Logo />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            NX<span className='text-color3'>Media</span>
          </span>
        </Link>
      </div>
      <NavBar />
      <Search />
      <Menu />
    </header>
  );
};
