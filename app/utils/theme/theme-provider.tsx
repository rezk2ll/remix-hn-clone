import { useRef, useState, useEffect } from 'react';
import { themeContext } from './theme-context';
import { Theme } from '~/types';
import { useFetcher } from '@remix-run/react';

const ThemeProvider: React.FC<{
  children: React.ReactNode;
  initialTheme: Theme;
}> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? Theme.LIGHT);

  const persist = useFetcher();
  const persistRef = useRef(persist);

  useEffect(() => {
    persistRef.current = persist;
  }, [persist]);

  const firstLoad = useRef(true);

  useEffect(() => {
    if (!theme) {
      return;
    }

    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    persistRef.current.submit(
      { theme },
      {
        action: 'action/theme',
        method: 'post',
      }
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <themeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
