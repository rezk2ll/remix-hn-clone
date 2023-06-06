import { createContext } from 'react';
import type { ThemeContextType } from '~/types';

export const themeContext = createContext<ThemeContextType | undefined>(undefined);
