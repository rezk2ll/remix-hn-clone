import type { Comment, CommentNavigation, FullItem, Item } from '~/types';
import { getAdjacentComments } from '~/utils/comment';
import { useState } from 'react';
import CommentHead from '../comment/CommentHead';

const StoryCommentTree: React.FC<{
  comment: Comment | Item;
  kids: FullItem[];
  nav: CommentNavigation;
}> = ({ comment, kids, nav }) => {
  const [display, setDisplay] = useState<boolean>(true);

  const toggleDispaly = () => {
    setDisplay(!display);
  };

  return (
    <div className='flex flex-col space-y-1 pb-2' id={`${comment.id}`}>
      <CommentHead
        comment={comment}
        nav={nav}
        display={display}
        kids={kids}
        onToggleDisplay={toggleDispaly}
      />
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
                nav={{
                  ...getAdjacentComments(kids, index),
                  parent: comment.id,
                }}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StoryCommentTree;
