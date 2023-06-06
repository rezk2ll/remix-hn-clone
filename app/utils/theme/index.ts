import { Theme } from '~/types';

export const isValidTheme = (theme: string | null): boolean => {
  return Object.values(Theme).includes(theme as Theme);
}
