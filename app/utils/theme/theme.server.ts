import { createCookieSessionStorage } from '@remix-run/node';

const secret = process.env.SECRET;

if (!secret) {
  throw new Error('Missing SECRET');
}

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    secrets: [secret],
    secure: true,
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
});

export const getThemeSession = async (request: Request) => {
  const session = await themeStorage.getSession(request.headers.get('Cookie'));

  return {
    getTheme: () => session.get('theme'),
    setTheme: (theme: string) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  };
};
