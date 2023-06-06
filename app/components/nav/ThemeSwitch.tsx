import useTheme from '~/utils/theme/use-theme';
import light from '~/../public/light.svg';
import dark from '~/../public/dark.svg';

const ThemeSwitch: React.FC = () => {
  const [theme, toggle] = useTheme();

  return (
    <div className='flex items-center justify-center'>
      <button onClick={toggle}>
        {theme === 'dark' ? (
          <img src={light} className='h-5' alt='light mode' />
        ) : (
          <img src={dark} className='h-6' alt='dark mode' />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
