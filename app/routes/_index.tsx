import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import StoryList from '~/components/story/StoryList';
import apiService from '~/lib/api';

export async function loader() {
  return json(await apiService.fetchTopStories());
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className='bg-hn-bg dark:dark:bg-slate-900 min-h-screen pt-2'>
      <StoryList items={data} />
    </div>
  );
}
