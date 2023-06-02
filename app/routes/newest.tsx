import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import StoryList from '~/components/story/StoryList';
import apiService from '~/lib/api';

export async function loader() {
  return json(await apiService.fetchNewStories());
}

export default function Newest() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className='bg-hn-bg min-h-screen pt-2'>
      <StoryList items={data} />
    </div>
  );
}
