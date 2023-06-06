import logo from '../../public/logo.svg';
import github from '../../public/github.svg';
import { NavLink } from '@remix-run/react';
import Link from './nav/Link';
import ThemeSwitch from './nav/ThemeSwitch';

const Nav: React.FC = () => {
  return (
    <nav className='bg-hn-orange w-full h-6 flex flex-row space-x-1 text-xs py-3'>
      <div className='inline-flex justify-center items-center px-1'>
        <NavLink to='/' title='Hacker news'>
          <div className='flex items-center justify-center'>
            <img
              src={logo}
              alt='logo'
              className='w-5 h-5 border-solid border border-white hover:no-underline'
            />
            <span className='text-black font-bold text-xs pl-1 hidden md:block'>
              Hacker News
            </span>
          </div>
        </NavLink>
      </div>
      <div className='flex flex-initial divide-x divide-black space-x-1 justify-start items-center font-normal'>
        <Link url='/newest' title='new' />
        <Link url='/front' title='past' />
        <Link url='/newcomments' title='comments' />
        <Link url='/ask' title='ask' />
        <Link url='/show' title='show' />
        <Link url='/jobs' title='jobs' />
      </div>
      <div className='flex flex-auto justify-end items-center space-x-2 pr-2'>
        <ThemeSwitch />
        <NavLink
          to='https://github.com/rezk2ll/remix-hn-clone'
          title='GitHub repo'
          target='_blank'
          rel='noreferrer noopener'
        >
          <div className='flex items-center justify-center'>
            <img src={github} alt='GitHub logo' className='w-5 h-5' />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
