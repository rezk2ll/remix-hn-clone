import { type V2_MetaFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import StoryList from '~/components/story/StoryList';
import apiService from '~/lib/api';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Remix HackerNews Clone' }];
};

export async function loader() {
  return json(await apiService.fetchTopStories());
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className='bg-gray-500 min-h-screen'>
      <StoryList items={data} />
    </div>
  );
}
