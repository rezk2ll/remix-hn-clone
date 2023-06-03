import type { AdjacentComments, Comment, FullItem, Item } from '~/types';
import {
  getAdjacentComments,
  getCommentsTreeSize,
  getTimeDifference,
} from '~/utils';
import triangle from '~/../public/triangle.svg';
import { useState } from 'react';

const StoryCommentTree: React.FC<{
  comment: Comment | Item;
  kids: FullItem[];
  adjacent: AdjacentComments;
}> = ({ comment, kids, adjacent }) => {
  const [display, setDisplay] = useState<boolean>(true);

  const toggleDispaly = () => {
    setDisplay(!display);
  };

  return (
    <div className='flex flex-col space-y-1 pb-2' id={`${comment.id}`}>
      <div className='flex items-center text-gray-500 text-[10px] font-light space-x-0.5 pl-3'>
        <img src={triangle} alt='upvote' className='h-3 pb-1' />
        <span>
          by <a href={`/user/${comment.by}`}>{comment.by}</a>
        </span>
        <a href={`/item/${comment.id}`}>
          {getTimeDifference(comment.time)} ago
        </a>
        |
        {adjacent.prev ? (
          <>
            <a href={`#${adjacent.prev}`} className='hover:underline'>
              prev
            </a>
            |
          </>
        ) : null}
        {adjacent.next ? (
          <a href={`#${adjacent.next}`} className='hover:underline'>
            next
          </a>
        ) : null}
        <span
          onClick={toggleDispaly}
          className='cursor-pointer hover:underline'
        >
          {display
            ? '[-]'
            : kids.length > 0
            ? `[${getCommentsTreeSize(kids)} more]`
            : '[1 more]'}
        </span>
      </div>
      {display ? (
        <div className='pl-5'>
          {comment.deleted ? (
            <div className='text-xs italic text-gray-500'>deleted</div>
          ) : (
            <div
              className='text-xs space-y-1'
              dangerouslySetInnerHTML={{ __html: comment.text as string }}
            />
          )}
          <span className='underline text-xs'>reply</span>
          <div className='pl-4'>
            {kids.map((kid, index) => (
              <StoryCommentTree
                key={kid.item.id}
                comment={kid.item}
                kids={kid.descendants}
                adjacent={getAdjacentComments(kids, index)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StoryCommentTree;
