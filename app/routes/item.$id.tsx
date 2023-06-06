import { json } from '@remix-run/node';
import type { V2_MetaFunction } from '@remix-run/node';
import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CommentForm from '~/components/forms/CommentForm';
import StoryCommentTree from '~/components/story/StoryCommentTree';
import StoryItem from '~/components/story/StoryItem';
import apiService from '~/lib/api';
import { getAdjacentComments } from '~/utils';

export async function loader({ params }: LoaderArgs) {
  const { id } = params;

  if (!id || isNaN(+id)) {
    throw new Error('Invalid item');
  }

  return json(await apiService.fetchFullItem(+id));
}

export const meta: V2_MetaFunction = ({ data }) => {
  return [{ title: data.item.title }];
};

export default function Item() {
  const { item, descendants } = useLoaderData<typeof loader>();

  return (
    <div className='flex flex-col space-y-1 pt-4 bg-hn-bg dark:bg-slate-800 px-2'>
      <StoryItem item={item} />
      <CommentForm />
      {descendants.map((comment, index) => (
        <StoryCommentTree
          comment={comment.item}
          key={comment.item.id}
          kids={comment.descendants}
          nav={{ ...getAdjacentComments(descendants, index), parent: null }}
        />
      ))}
    </div>
  );
}
