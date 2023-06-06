import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import Nav from './components/Nav';
import React from 'react';
import ThemeProvider from './utils/theme/theme-provider';
import { getThemeSession } from './utils/theme/theme.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Remix HackerNews Clone' }];
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  return { theme: themeSession.getTheme() };
};

const App: React.FC = () => {
  const { theme = '' } = useLoaderData<typeof loader>();

  return (
    <html lang='en' className={theme ?? ''}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Meta />
        <Links />
      </head>
      <body className='bg-white dark:bg-black dark:text-white my-2 md:mx-36'>
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function Main() {
  const { theme = '' } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider initialTheme={theme}>
      <App />
    </ThemeProvider>
  );
}
