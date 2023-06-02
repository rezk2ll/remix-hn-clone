import logo from '../../public/logo.svg';
import github from '../../public/github.svg';
import { NavLink } from '@remix-run/react';

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
            <span className='text-black font-bold text-xs pl-1'>
              Hacker News
            </span>
          </div>
        </NavLink>
      </div>
      <div className='flex flex-initial divide-x divide-black space-x-1 justify-start items-center font-normal'>
        <NavLink
          to='/newest'
          title='New'
          className={({ isActive }) =>
            `pl-2 hover:no-underline ${isActive ? 'text-hn-bg' : ''}`
          }
        >
          new
        </NavLink>
        <NavLink
          to='/front'
          title='Past'
          className={({ isActive }) =>
            `pl-2 hover:no-underline ${isActive ? 'text-hn-bg' : ''}`
          }
        >
          past
        </NavLink>
        <NavLink
          to='/newcomments'
          title='Comments'
          className={({ isActive }) =>
            `pl-2 hover:no-underline ${isActive ? 'text-hn-bg' : ''}`
          }
        >
          comments
        </NavLink>
        <NavLink
          to='/ask'
          title='Ask'
          className={({ isActive }) =>
            `pl-2 hover:no-underline ${isActive ? 'text-hn-bg' : ''}`
          }
        >
          ask
        </NavLink>
        <NavLink
          to='/show'
          title='Show'
          className={({ isActive }) =>
            `pl-2 hover:no-underline ${isActive ? 'text-hn-bg' : ''}`
          }
        >
          show
        </NavLink>
        <NavLink
          to='/jobs'
          title='Jobs'
          className={({ isActive }) =>
            `pl-2 hover:no-underline ${isActive ? 'text-hn-bg' : ''}`
          }
        >
          jobs
        </NavLink>
      </div>
      <div className='flex flex-auto justify-end items-center pr-2'>
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
