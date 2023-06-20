import { defer } from '@remix-run/node';
import type { V2_MetaFunction } from '@remix-run/node';
import type { LoaderArgs } from '@remix-run/node';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import SekeletonComments from '~/components/comment/Skeleton';
import CommentForm from '~/components/forms/CommentForm';
import StoryCommentTree from '~/components/story/StoryCommentTree';
import StoryItem from '~/components/story/StoryItem';
import apiService from '~/lib/api';
import type { Item as ItemType } from '~/types';
import { getAdjacentComments } from '~/utils/comment';

export async function loader({ params }: LoaderArgs) {
  const { id } = params;

  if (!id || isNaN(+id)) {
    throw new Error('Invalid item');
  }

  return defer({
    item: await apiService.fetchItem<ItemType>(+id),
    data: apiService.fetchFullItem(+id),
  });
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data.item.title }];
};

export default function Item() {
  const { data, item } = useLoaderData<typeof loader>();

  return (
    <div className='flex flex-col space-y-1 pt-4 bg-hn-bg dark:bg-slate-800 px-2'>
      <StoryItem item={item} />
      <CommentForm />
      <Suspense fallback={<SekeletonComments />}>
        <Await resolve={data} errorElement={<p>error</p>}>
          {({ descendants }) => (
            <>
              {descendants.map((comment, index) => (
                <StoryCommentTree
                  comment={comment.item}
                  key={comment.item.id}
                  kids={comment.descendants}
                  nav={{
                    ...getAdjacentComments(descendants, index),
                    parent: null,
                  }}
                />
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
