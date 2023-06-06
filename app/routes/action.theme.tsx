import {
  type LoaderFunction,
  redirect,
  type ActionFunction,
  json,
} from '@remix-run/node';
import { isValidTheme } from '~/utils/theme';
import { getThemeSession } from '~/utils/theme/theme.server';

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();

  const formData = new URLSearchParams(requestText);
  const theme = formData.get('theme');

  if (!theme || !isValidTheme(theme)) {
    return json({
      sucess: false,
      message: 'Invalid theme',
    });
  }

  themeSession.setTheme(theme);

  return json(
    {
      sucess: true,
    },
    { headers: { 'Set-cookie': await themeSession.commit() } }
  );
};

export const loader: LoaderFunction = () => redirect('/', { status: 404 });
