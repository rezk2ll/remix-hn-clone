import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import StoryList from '~/components/story/StoryList';
import apiService from '~/lib/api';

export async function loader() {
  return json(await apiService.fetchShowStories());
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className='bg-hn-bg dark:bg-slate-800 min-h-screen pt-2'>
      <StoryList items={data} />
    </div>
  );
}
