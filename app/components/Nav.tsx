import logo from '../../public/logo.svg';

const Nav: React.FC = () => {
  return (
    <nav className='bg-hn-orange w-full h-6 flex flex-row space-x-1 text-xs py-3'>
      <div className='inline-flex justify-center items-center px-1'>
        <a href='/' title='Hacker news'>
          <div className='flex items-center justify-center'>
            <img
              src={logo}
              alt='logo'
              className='w-5 h-5 border-solid border border-white'
            />
            <span className='text-black font-bold text-xs pl-1'>
              Hacker News
            </span>
          </div>
        </a>
      </div>
      <div className='flex flex-initial divide-x divide-black space-x-1 justify-start items-center font-normal'>
        <a href='/newest' title='New' className='pl-2'>
          new
        </a>
        <a href='/front' title='Past' className='pl-2'>
          past
        </a>
        <a href='/newcomments' title='Comments' className='pl-2'>
          comments
        </a>
        <a href='/ask' title='Ask' className='pl-2'>
          ask
        </a>
        <a href='/show' title='Show' className='pl-2'>
          show
        </a>
        <a href='/jobs' title='Jobs' className='pl-2'>
          jobs
        </a>
      </div>
      <div className='flex flex-auto justify-end items-center pr-2'>
        <a href='/login'>login</a>
      </div>
    </nav>
  );
};

export default Nav;
