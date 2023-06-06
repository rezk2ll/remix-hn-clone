import { useContext } from 'react';
import { themeContext } from './theme-context';

export default () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
